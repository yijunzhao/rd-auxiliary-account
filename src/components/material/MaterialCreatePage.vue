<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { NButton, NCard, NDatePicker, NForm, NFormItem, NInput, NInputNumber, NSelect, NSpace, useMessage } from 'naive-ui'
import { fetchArchiveModuleMeta, saveArchiveRecord } from '../../mock/company/companyApi'
import { useModuleListReload } from '../../composables/useModuleListReload'

const props = defineProps({
  moduleKey: { type: String, required: true },
  routeBase: { type: String, default: 'material' }
})

const router = useRouter()
const message = useMessage()
const loading = ref(false)
const submitting = ref(false)
const meta = ref({ title: '', formSchema: [] })
const model = ref({})
const formRef = ref(null)

const rules = computed(() => {
  const result = {}
  meta.value.formSchema.forEach((field) => {
    const fieldRules = []
    if (field.required) {
      const isPick = ['select', 'date', 'daterange'].includes(field.type)
      fieldRules.push({
        required: true,
        message: field.requiredMessage || `${isPick ? '请选择' : '请输入'}${field.label}`,
        trigger: ['blur', 'change', 'input']
      })
    }

    if (field.type === 'input' || field.type === 'textarea') {
      if (field.min || field.max) {
        fieldRules.push({
          trigger: ['blur', 'input'],
          validator: (_, value) => {
            const text = String(value ?? '')
            if (!text) return true
            if (field.min && text.length < field.min) return new Error(field.minMessage || `${field.label}长度不能少于${field.min}位`)
            if (field.max && text.length > field.max) return new Error(field.maxMessage || `${field.label}长度不能超过${field.max}位`)
            return true
          }
        })
      }
      if (field.pattern) {
        fieldRules.push({
          trigger: ['blur', 'input'],
          validator: (_, value) => {
            const text = String(value ?? '')
            if (!text) return true
            const reg = new RegExp(field.pattern)
            return reg.test(text) ? true : new Error(field.patternMessage || `${field.label}格式不正确`)
          }
        })
      }
    }

    if (field.type === 'number') {
      fieldRules.push({
        trigger: ['blur', 'change'],
        validator: (_, value) => {
          if (value === undefined || value === null || value === '') return true
          const num = Number(value)
          if (Number.isNaN(num)) return new Error(`${field.label}必须是数字`)
          if (field.minValue !== undefined && num < field.minValue) return new Error(field.minValueMessage || `${field.label}不能小于${field.minValue}`)
          if (field.maxValue !== undefined && num > field.maxValue) return new Error(field.maxValueMessage || `${field.label}不能大于${field.maxValue}`)
          return true
        }
      })
    }

    if (fieldRules.length) result[field.key] = fieldRules
  })
  return result
})

function buildDefaultModel() {
  const base = {}
  meta.value.formSchema.forEach((field) => {
    if (field.type === 'daterange') {
      base[field.key] = null
    } else if (field.type === 'number') {
      base[field.key] = null
    } else {
      base[field.key] = ''
    }
  })
  model.value = base
}

async function loadMeta() {
  loading.value = true
  try {
    meta.value = await fetchArchiveModuleMeta(props.moduleKey)
    buildDefaultModel()
  } finally {
    loading.value = false
  }
}

function goBack() {
  router.push(`/${props.routeBase}/${props.moduleKey}`)
}

async function submit() {
  await formRef.value?.validate()
  submitting.value = true
  try {
    const payload = { ...model.value }
    if (Array.isArray(payload.dateRange) && payload.dateRange.length === 2) {
      payload.startDate = String(payload.dateRange[0]).slice(0, 10)
      payload.endDate = String(payload.dateRange[1]).slice(0, 10)
    }
    await saveArchiveRecord({ moduleKey: props.moduleKey, record: payload })
    message.success('新增成功')
    goBack()
  } catch (error) {
    message.error(error?.message || '保存失败')
  } finally {
    submitting.value = false
  }
}

useModuleListReload(
  () => props.moduleKey,
  async () => {
    await loadMeta()
  }
)
</script>

<template>
  <n-card :title="`${meta.title} - 新增`" :bordered="false" class="create-card">
    <template #header-extra>
      <n-space>
        <n-button @click="goBack">返回列表</n-button>
      </n-space>
    </template>

    <n-form ref="formRef" :model="model" :rules="rules" label-placement="left" label-width="110">
      <div class="form-grid">
        <n-form-item
          v-for="field in meta.formSchema"
          :key="field.key"
          :label="field.label"
          :path="field.key"
          :class="{ 'full-row': field.type === 'textarea' || field.span === 2 }"
        >
          <n-select v-if="field.type === 'select'" v-model:value="model[field.key]" :options="(field.options || []).map((o) => ({ label: o, value: o }))" />
          <n-date-picker v-else-if="field.type === 'date'" v-model:value="model[field.key]" type="date" value-format="yyyy-MM-dd" style="width: 100%" />
          <n-date-picker v-else-if="field.type === 'daterange'" v-model:value="model[field.key]" type="daterange" value-format="yyyy-MM-dd" style="width: 100%" clearable />
          <n-input-number v-else-if="field.type === 'number'" v-model:value="model[field.key]" :min="field.minValue" :max="field.maxValue" style="width: 100%" />
          <n-input v-else-if="field.type === 'textarea'" v-model:value="model[field.key]" type="textarea" :autosize="{ minRows: 2, maxRows: 4 }" />
          <n-input v-else v-model:value="model[field.key]" />
        </n-form-item>
      </div>
    </n-form>

    <div class="actions">
      <n-space justify="end">
        <n-button @click="goBack">取消</n-button>
        <n-button type="primary" :loading="submitting" @click="submit">保存</n-button>
      </n-space>
    </div>
  </n-card>
</template>

<style scoped>
.create-card { border-radius: 2px; }
.form-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px 14px; }
.full-row { grid-column: 1 / -1; }
.actions { margin-top: 12px; }
</style>
