<script setup>
import { computed, h, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  NButton,
  NCard,
  NDataTable,
  NDatePicker,
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
  batchDeleteArchiveRecords,
  deleteArchiveRecord,
  exportArchiveRecords,
  fetchArchiveList,
  fetchArchiveModuleMeta,
  importArchiveRecords,
  saveArchiveRecord
} from '../../mock/company/companyApi'
import { useModuleListReload } from '../../composables/useModuleListReload'
import { exportRowsToExcel, importRowsFromExcel } from '../../utils/excel'

const props = defineProps({
  moduleKey: { type: String, required: true },
  routeBase: { type: String, default: 'material' }
})

const router = useRouter()
const route = useRoute()
const message = useMessage()
const loading = ref(false)
const submitting = ref(false)
const page = ref(1)
const pageSize = ref(8)
const total = ref(0)
const rows = ref([])
const meta = ref({
  title: '',
  columns: [],
  querySchema: [],
  formSchema: [],
  ui: {
    showQuery: true,
    showCreate: true,
    showBatchDelete: true,
    showImport: true,
    showExport: true,
    showDetailAction: true,
    showEditAction: true,
    showDeleteAction: true
  }
})
const query = ref({})
const modalVisible = ref(false)
const editingRow = ref(null)
const selectedRowKeys = ref([])
const sortState = ref({ sortKey: '', sortOrder: '' })
const importInputRef = ref(null)

const actionButtons = computed(() => {
  const buttons = []
  if (meta.value.ui.showDetailAction) buttons.push('detail')
  if (meta.value.ui.showEditAction) buttons.push('edit')
  if (meta.value.ui.showDeleteAction) buttons.push('delete')
  return buttons
})

const tableColumns = computed(() => {
  const base = meta.value.columns.map((col) => ({
    title: col.title,
    key: col.key,
    minWidth: 140,
    sorter: !!col.sortable
  }))

  return [
    ...(meta.value.ui.showBatchDelete ? [{ type: 'selection', width: 44 }] : []),
    ...base,
    {
      title: '状态',
      key: 'status',
      width: 96,
      render: (row) => h(NTag, { size: 'small', type: row.status === '启用' ? 'success' : row.status === '停用' ? 'error' : 'warning' }, { default: () => row.status || '-' })
    },
    ...(actionButtons.value.length
      ? [{
      title: '操作',
      key: 'actions',
      width: 250,
      render: (row) =>
        h(NSpace, { size: 6 }, {
          default: () => [
            ...(meta.value.ui.showDetailAction ? [h(NButton, { text: true, type: 'primary', onClick: () => viewDetail(row) }, { default: () => '详情' })] : []),
            ...(meta.value.ui.showEditAction ? [h(NButton, { text: true, onClick: () => editRow(row) }, { default: () => '编辑' })] : []),
            ...(meta.value.ui.showDeleteAction
              ? [h(
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
                )]
              : [])
          ]
        })
    }]
      : [])
  ]
})

function buildDefaultQuery() {
  const defaults = {}
  meta.value.querySchema.forEach((field) => {
    defaults[field.key] = field.type === 'daterange' ? null : ''
  })
  query.value = defaults
}

async function loadMeta() {
  meta.value = await fetchArchiveModuleMeta(props.moduleKey)
  buildDefaultQuery()
}

async function loadList() {
  loading.value = true
  try {
    const { list, total: t } = await fetchArchiveList({
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
  if (!meta.value.ui.showCreate) return
  router.push(`${route.path.replace(/\/$/, '')}/create`)
}

function editRow(row) {
  editingRow.value = { ...row }
  modalVisible.value = true
}

async function saveRow(payload) {
  submitting.value = true
  try {
    await saveArchiveRecord({ moduleKey: props.moduleKey, record: payload })
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
    const res = await deleteArchiveRecord({ moduleKey: props.moduleKey, id })
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
  if (!meta.value.ui.showBatchDelete) return
  if (!selectedRowKeys.value.length) return
  if (!window.confirm(`确认批量删除 ${selectedRowKeys.value.length} 条记录吗？`)) return
  submitting.value = true
  try {
    const { removed } = await batchDeleteArchiveRecords({ moduleKey: props.moduleKey, ids: selectedRowKeys.value })
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
  if (!meta.value.ui.showExport) return
  submitting.value = true
  try {
    const data = await exportArchiveRecords({
      moduleKey: props.moduleKey,
      filters: query.value
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

function triggerImport() {
  if (!meta.value.ui.showImport) return
  importInputRef.value?.click()
}

async function onImportFileChange(event) {
  if (!meta.value.ui.showImport) return
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
    const { inserted, updated } = await importArchiveRecords({ moduleKey: props.moduleKey, records })
    message.success(`导入完成，新增 ${inserted} 条，更新 ${updated} 条`)
    await loadList()
  } catch (error) {
    message.error(error?.message || '导入失败，请检查 Excel 内容格式')
  } finally {
    event.target.value = ''
    submitting.value = false
  }
}

function viewDetail(row) {
  router.push(`${route.path.replace(/\/$/, '')}/detail/${row.id}`)
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
  <n-card v-if="meta.ui.showQuery && meta.querySchema.length" class="filter-card" :bordered="false">
    <n-form inline>
      <n-form-item v-for="field in meta.querySchema" :key="field.key" :label="field.label">
        <n-select
          v-if="field.type === 'select'"
          v-model:value="query[field.key]"
          :options="[{ label: '全部', value: '' }, ...(field.options || []).map((o) => ({ label: o, value: o }))]"
          style="width: 170px"
        />
        <n-date-picker
          v-else-if="field.type === 'daterange'"
          v-model:value="query[field.key]"
          type="daterange"
          value-format="yyyy-MM-dd"
          style="width: 250px"
          clearable
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
        <n-button v-if="meta.ui.showCreate" type="primary" size="small" @click="createRow">新增</n-button>
        <n-button v-if="meta.ui.showBatchDelete" size="small" type="error" ghost :disabled="!selectedRowKeys.length" @click="batchDelete">批量删除</n-button>
        <n-button v-if="meta.ui.showImport" size="small" @click="triggerImport">导入</n-button>
        <n-button v-if="meta.ui.showExport" size="small" @click="handleExport">导出</n-button>
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
    :title="'编辑档案'"
    :form-schema="meta.formSchema"
    :row="editingRow"
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
