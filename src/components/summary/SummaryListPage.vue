<script setup>
import { computed, h, ref } from 'vue'
import {
  NButton,
  NCard,
  NDataTable,
  NForm,
  NFormItem,
  NInput,
  NPagination,
  NSelect,
  NSpace,
  NSpin,
  NTag,
  useMessage
} from 'naive-ui'
import ArchiveEditModal from './ArchiveEditModal.vue'
import {
  batchDeleteProjectRecords,
  deleteProjectRecord,
  exportProjectRecords,
  fetchProjectList,
  fetchProjectModuleMeta,
  importProjectRecords,
  saveProjectRecord
} from '../../mock/project/projectApi'
import { useModuleListReload } from '../../composables/useModuleListReload'
import { exportRowsToExcel, importRowsFromExcel } from '../../utils/excel'

const props = defineProps({
  moduleKey: { type: String, required: true }
})

const message = useMessage()
const loading = ref(false)
const submitting = ref(false)
const page = ref(1)
const pageSize = ref(8)
const total = ref(0)
const rows = ref([])
const meta = ref({ title: '', columns: [], querySchema: [], formSchema: [], toolbar: {}, modal: {} })
const query = ref({})
const modalVisible = ref(false)
const editingRow = ref(null)
const modalMode = ref('create')
const selectedRowKeys = ref([])
const sortState = ref({ sortKey: '', sortOrder: '' })
const importInputRef = ref(null)

const tableColumns = computed(() => {
  const base = meta.value.columns.map((col) => ({
    title: col.title,
    key: col.key,
    minWidth: col.width || 140,
    width: col.width,
    sorter: !!col.sortable
  }))

  return [
    { type: 'selection', width: 44 },
    ...base,
    {
      title: '状态',
      key: 'status',
      width: 96,
      render: (row) => h(NTag, { size: 'small', type: row.status === '启用' ? 'success' : row.status === '停用' ? 'error' : 'warning' }, { default: () => row.status || '-' })
    },
    {
      title: '操作',
      key: 'actions',
      width: 250,
      render: (row) =>
        h(NSpace, { size: 6 }, {
          default: () => [
            h(NButton, { text: true, type: 'primary', onClick: () => viewDetail(row) }, { default: () => '详情' }),
            h(NButton, { text: true, onClick: () => editRow(row) }, { default: () => '编辑' }),
            h(
              NButton,
              {
                text: true,
                type: 'error',
                onClick: async () => {
                  if (!window.confirm('确认删除该条记录吗？')) return
                  await removeRow(row.id)
                }
              },
              { default: () => '删除' }
            )
          ]
        })
    }
  ]
})

function buildDefaultQuery() {
  const defaults = {}
  meta.value.querySchema.forEach((field) => {
    defaults[field.key] = ''
  })
  query.value = defaults
}

async function loadMeta() {
  meta.value = await fetchProjectModuleMeta(props.moduleKey)
  buildDefaultQuery()
}

async function loadList() {
  loading.value = true
  try {
    const { list, total: t } = await fetchProjectList({
      moduleKey: props.moduleKey,
      filters: query.value,
      page: page.value,
      pageSize: pageSize.value,
      sortKey: sortState.value.sortKey,
      sortOrder: sortState.value.sortOrder
    })
    rows.value = list
    total.value = t
    selectedRowKeys.value = selectedRowKeys.value.filter((id) => list.some((item) => item.id === id))
  } catch (error) {
    message.error(error?.message || '加载列表失败')
  } finally {
    loading.value = false
  }
}

async function handleSearch() {
  page.value = 1
  await loadList()
}

async function resetQuery() {
  buildDefaultQuery()
  sortState.value = { sortKey: '', sortOrder: '' }
  page.value = 1
  await loadList()
}

function createRow() {
  modalMode.value = 'create'
  editingRow.value = null
  modalVisible.value = true
}

function editRow(row) {
  modalMode.value = 'edit'
  editingRow.value = { ...row }
  modalVisible.value = true
}

function viewDetail(row) {
  modalMode.value = 'detail'
  editingRow.value = { ...row }
  modalVisible.value = true
}

async function saveRow(payload) {
  submitting.value = true
  try {
    await saveProjectRecord({ moduleKey: props.moduleKey, record: payload })
    message.success(editingRow.value ? '修改成功' : '新增成功')
    await loadList()
  } catch (error) {
    message.error(error?.message || '保存失败')
  } finally {
    submitting.value = false
  }
}

async function removeRow(id) {
  submitting.value = true
  try {
    const res = await deleteProjectRecord({ moduleKey: props.moduleKey, id })
    if (res.success) {
      message.success('删除成功')
      await loadList()
    } else {
      message.warning('记录不存在或已删除')
    }
  } catch (error) {
    message.error(error?.message || '删除失败')
  } finally {
    submitting.value = false
  }
}

async function batchDelete() {
  if (!selectedRowKeys.value.length) return
  if (!window.confirm(`确认批量删除 ${selectedRowKeys.value.length} 条记录吗？`)) return
  submitting.value = true
  try {
    const { removed } = await batchDeleteProjectRecords({ moduleKey: props.moduleKey, ids: selectedRowKeys.value })
    selectedRowKeys.value = []
    message.success(`批量删除成功，共删除 ${removed} 条`)
    await loadList()
  } catch (error) {
    message.error(error?.message || '批量删除失败')
  } finally {
    submitting.value = false
  }
}

async function handleExport() {
  submitting.value = true
  try {
    const data = await exportProjectRecords({ moduleKey: props.moduleKey, filters: query.value })
    const titleKeyPairs = [{ title: '记录ID', key: 'id' }, ...(meta.value.columns || []), { title: '状态', key: 'status' }]
    const exportRows = (data.rows || []).map((row) => {
      const item = {}
      titleKeyPairs.forEach(({ title, key }) => {
        item[title] = row?.[key] ?? ''
      })
      return item
    })
    exportRowsToExcel({
      rows: exportRows,
      fileName: data.filename || `${props.moduleKey}-${Date.now()}`,
      sheetName: meta.value.title || '导出数据'
    })
    message.success('导出成功')
  } catch (error) {
    message.error(error?.message || '导出失败')
  } finally {
    submitting.value = false
  }
}

async function handleBatchExport() {
  if (!selectedRowKeys.value.length) return
  submitting.value = true
  try {
    const data = await exportProjectRecords({
      moduleKey: props.moduleKey,
      filters: query.value,
      ids: selectedRowKeys.value
    })
    const titleKeyPairs = [{ title: '记录ID', key: 'id' }, ...(meta.value.columns || []), { title: '状态', key: 'status' }]
    const exportRows = (data.rows || []).map((row) => {
      const item = {}
      titleKeyPairs.forEach(({ title, key }) => {
        item[title] = row?.[key] ?? ''
      })
      return item
    })
    exportRowsToExcel({
      rows: exportRows,
      fileName: data.filename || `${props.moduleKey}-selected-${Date.now()}`,
      sheetName: `${meta.value.title || '导出数据'}-选中`
    })
    message.success('批量导出成功')
  } catch (error) {
    message.error(error?.message || '批量导出失败')
  } finally {
    submitting.value = false
  }
}

function triggerImport() {
  importInputRef.value?.click()
}

async function onImportFileChange(event) {
  const file = event.target?.files?.[0]
  if (!file) return

  submitting.value = true
  try {
    const rows = await importRowsFromExcel(file)
    const titleToKey = Object.fromEntries(
      [{ title: '记录ID', key: 'id' }, ...(meta.value.columns || []), { title: '状态', key: 'status' }].map((it) => [it.title, it.key])
    )
    const records = rows.map((row) => {
      const next = {}
      Object.entries(row || {}).forEach(([k, v]) => {
        const targetKey = titleToKey[k] || k
        next[targetKey] = v
      })
      return next
    })
    const { inserted, updated } = await importProjectRecords({ moduleKey: props.moduleKey, records })
    message.success(`导入完成，新增 ${inserted} 条，更新 ${updated} 条`)
    await loadList()
  } catch (error) {
    message.error(error?.message || '导入失败，请检查 Excel 内容格式')
  } finally {
    event.target.value = ''
    submitting.value = false
  }
}

async function onPageChange(p) {
  page.value = p
  await loadList()
}

async function onPageSizeChange(size) {
  pageSize.value = size
  page.value = 1
  await loadList()
}

async function onSorterChange(sorter) {
  if (!sorter || Array.isArray(sorter)) return
  sortState.value = {
    sortKey: sorter.columnKey || '',
    sortOrder: sorter.order || ''
  }
  page.value = 1
  await loadList()
}

function onCheckedRowKeysUpdate(keys) {
  selectedRowKeys.value = keys
}

const modalTitle = computed(() => {
  if (modalMode.value === 'detail') return `${meta.value.title} - 详情查看`
  if (modalMode.value === 'edit') return `${meta.value.title} - 编辑`
  return `${meta.value.title} - 新增`
})

useModuleListReload(
  () => props.moduleKey,
  async () => {
    await loadMeta()
    await loadList()
  },
  async () => {
    page.value = 1
    sortState.value = { sortKey: '', sortOrder: '' }
    selectedRowKeys.value = []
  }
)
</script>

<template>
  <n-card class="filter-card" :bordered="false">
    <n-form inline>
      <n-form-item v-for="field in meta.querySchema" :key="field.key" :label="field.label">
        <n-select
          v-if="field.type === 'select'"
          v-model:value="query[field.key]"
          :options="[{ label: '全部', value: '' }, ...(field.options || []).map((o) => ({ label: o, value: o }))]"
          style="width: 170px"
        />
        <n-input v-else v-model:value="query[field.key]" :placeholder="field.placeholder || `请输入${field.label}`" style="width: 220px" clearable />
      </n-form-item>
      <n-form-item>
        <n-space>
          <n-button type="primary" @click="handleSearch">查询</n-button>
          <n-button @click="resetQuery">重置</n-button>
        </n-space>
      </n-form-item>
    </n-form>
  </n-card>

  <n-card :title="meta.title" class="archive-card" :bordered="false">
    <template #header-extra>
      <n-space>
        <n-button type="primary" size="small" @click="createRow">{{ meta.toolbar?.addLabel || '新增' }}</n-button>
        <n-button size="small" type="error" ghost :disabled="!selectedRowKeys.length" @click="batchDelete">{{ meta.toolbar?.batchDeleteLabel || '批量删除' }}</n-button>
        <n-button v-if="meta.toolbar?.batchExportLabel" size="small" :disabled="!selectedRowKeys.length" @click="handleBatchExport">{{ meta.toolbar.batchExportLabel }}</n-button>
        <n-button v-if="meta.toolbar?.downloadTemplateLabel" size="small" @click="handleExport">{{ meta.toolbar.downloadTemplateLabel }}</n-button>
        <n-button size="small" @click="triggerImport">{{ meta.toolbar?.importLabel || '导入' }}</n-button>
        <n-button size="small" @click="handleExport">{{ meta.toolbar?.exportLabel || '导出' }}</n-button>
      </n-space>
    </template>

    <input ref="importInputRef" type="file" accept=".xlsx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" class="import-input" @change="onImportFileChange" />

    <n-spin :show="loading">
      <n-data-table
        :columns="tableColumns"
        :data="rows"
        :row-key="(row) => row.id"
        :checked-row-keys="selectedRowKeys"
        striped
        size="small"
        @update:checked-row-keys="onCheckedRowKeysUpdate"
        @update:sorter="onSorterChange"
      />
    </n-spin>

    <div class="archive-pagination">
      <n-pagination
        :page="page"
        :page-size="pageSize"
        :item-count="total"
        :page-sizes="[8, 10, 20]"
        show-size-picker
        @update:page="onPageChange"
        @update:page-size="onPageSizeChange"
      />
    </div>
  </n-card>

  <archive-edit-modal
    v-model:show="modalVisible"
    :title="modalTitle"
    :form-schema="meta.formSchema"
    :row="editingRow"
    :read-only="modalMode === 'detail'"
    :modal-width="meta.modal?.width || 1020"
    :columns="meta.modal?.columns || 2"
    :cancel-text="meta.modal?.cancelText || '取消'"
    :ok-text="meta.modal?.okText || '保存'"
    :close-text="meta.modal?.closeText || '关闭'"
    :ok-first="!!meta.modal?.okFirst"
    @save="saveRow"
  />

  <n-spin v-if="submitting" :show="true" size="small" style="position: fixed; right: 16px; bottom: 16px" />
</template>

<style scoped>
.filter-card { border-radius: 2px; margin-bottom: 8px; }
.archive-card { border-radius: 2px; }
.archive-pagination { margin-top: 12px; display: flex; justify-content: flex-end; }
.import-input { display: none; }
</style>
