<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { NButton, NCard, NDescriptions, NDescriptionsItem, NEmpty, NSpace, NSpin } from 'naive-ui'
import { fetchProjectDetail, fetchProjectModuleMeta } from '../../mock/project/projectApi'

const props = defineProps({
  moduleKey: { type: String, required: true }
})

const route = useRoute()
const router = useRouter()
const loading = ref(false)
const title = ref('')
const row = ref(null)
const meta = ref({ columns: [], formSchema: [] })

const id = computed(() => route.params.id)

const detailItems = computed(() => {
  if (!row.value) return []
  const fieldMap = new Map()
  meta.value.formSchema.forEach((item) => fieldMap.set(item.key, item.label))
  meta.value.columns.forEach((item) => {
    if (!fieldMap.has(item.key)) fieldMap.set(item.key, item.title)
  })

  return [...fieldMap.keys()]
    .filter((key) => key !== 'id')
    .filter((key) => row.value[key] !== undefined && row.value[key] !== null && row.value[key] !== '')
    .map((key) => ({ key, label: fieldMap.get(key), value: row.value[key] }))
})

async function loadDetail() {
  loading.value = true
  try {
    const moduleMeta = await fetchProjectModuleMeta(props.moduleKey)
    meta.value = moduleMeta
    title.value = moduleMeta.title
    row.value = await fetchProjectDetail({ moduleKey: props.moduleKey, id: id.value })
  } finally {
    loading.value = false
  }
}

function goBack() {
  const listPath = route.meta?.listPath
  if (typeof listPath === 'string' && listPath.startsWith('/')) {
    router.push(listPath)
    return
  }
  router.push('/dashboard/analysis')
}

onMounted(loadDetail)

watch(
  () => [props.moduleKey, id.value],
  () => {
    loadDetail()
  }
)
</script>

<template>
  <n-card :title="`${title} - 详情`" :bordered="false" class="detail-card">
    <template #header-extra>
      <n-space>
        <n-button @click="goBack">返回列表</n-button>
      </n-space>
    </template>

    <n-spin :show="loading">
      <n-descriptions v-if="row" label-placement="left" :column="2" bordered size="small">
        <n-descriptions-item v-for="item in detailItems" :key="item.key" :label="item.label">{{ item.value }}</n-descriptions-item>
      </n-descriptions>
      <n-empty v-else description="未找到该记录" />
    </n-spin>
  </n-card>
</template>

<style scoped>
.detail-card { border-radius: 2px; }
</style>
