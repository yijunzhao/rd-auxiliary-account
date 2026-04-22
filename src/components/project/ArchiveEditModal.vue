<script setup>
import { computed, ref, watch } from 'vue'
import { NButton, NDatePicker, NForm, NFormItem, NInput, NInputNumber, NModal, NSelect, NSpace } from 'naive-ui'

const props = defineProps({
  show: { type: Boolean, required: true },
  title: { type: String, required: true },
  formSchema: { type: Array, required: true },
  row: { type: Object, default: null },
  readOnly: { type: Boolean, default: false },
  modalWidth: { type: [Number, String], default: 820 },
  columns: { type: Number, default: 2 },
  cancelText: { type: String, default: '取消' },
  okText: { type: String, default: '保存' },
  closeText: { type: String, default: '关闭' },
  okFirst: { type: Boolean, default: false }
})

const emit = defineEmits(['update:show', 'save'])

const model = ref({})
const formRef = ref(null)

const rules = computed(() => {
  const result = {}
  props.formSchema.forEach((field) => {
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
            if (field.min && text.length < field.min) {
              return new Error(field.minMessage || `${field.label}长度不能少于${field.min}位`)
            }
            if (field.max && text.length > field.max) {
              return new Error(field.maxMessage || `${field.label}长度不能超过${field.max}位`)
            }
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
          if (field.minValue !== undefined && num < field.minValue) {
            return new Error(field.minValueMessage || `${field.label}不能小于${field.minValue}`)
          }
          if (field.maxValue !== undefined && num > field.maxValue) {
            return new Error(field.maxValueMessage || `${field.label}不能大于${field.maxValue}`)
          }
          return true
        }
      })
    }

    if (fieldRules.length) {
      result[field.key] = fieldRules
    }
  })
  return result
})

watch(
  () => [props.show, props.row, props.formSchema],
  () => {
    if (!props.show) return
    const base = {}
    props.formSchema.forEach((field) => {
      if (field.type === 'daterange') {
        base[field.key] = null
      } else if (field.type === 'number') {
        base[field.key] = null
      } else {
        base[field.key] = ''
      }
    })

    model.value = props.row ? { ...base, ...props.row } : base

    if (model.value.startDate && model.value.endDate && props.formSchema.some((f) => f.key === 'dateRange')) {
      model.value.dateRange = [model.value.startDate, model.value.endDate]
    }
  },
  { immediate: true }
)

function close() {
  emit('update:show', false)
}

function getFieldPlaceholder(field) {
  if (field?.placeholder) return field.placeholder
  if (['select', 'date', 'daterange'].includes(field?.type)) return `请选择${field.label}`
  return `请输入${field.label}`
}

async function submit() {
  if (props.readOnly) {
    close()
    return
  }
  await formRef.value?.validate()

  const payload = { ...model.value }
  if (Array.isArray(payload.dateRange) && payload.dateRange.length === 2) {
    payload.startDate = String(payload.dateRange[0]).slice(0, 10)
    payload.endDate = String(payload.dateRange[1]).slice(0, 10)
  }

  emit('save', payload)
  close()
}
</script>

<template>
  <n-modal :show="show" preset="card" :title="title" :style="{ width: typeof modalWidth === 'number' ? `${modalWidth}px` : modalWidth }" @update:show="(v) => emit('update:show', v)">
    <n-form ref="formRef" :model="model" :rules="rules" label-placement="left" label-width="110">
      <div class="form-grid" :style="{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }">
        <n-form-item v-for="field in formSchema" :key="field.key" :label="field.label" :path="field.key" :class="{ 'full-row': field.span === columns || field.type === 'textarea' }">
          <n-select v-if="field.type === 'select'" v-model:value="model[field.key]" :options="(field.options || []).map((o) => ({ label: o, value: o }))" :placeholder="getFieldPlaceholder(field)" :disabled="readOnly" />
          <n-date-picker v-else-if="field.type === 'date'" v-model:value="model[field.key]" type="date" value-format="yyyy-MM-dd" style="width: 100%" :placeholder="getFieldPlaceholder(field)" :disabled="readOnly" />
          <n-date-picker v-else-if="field.type === 'daterange'" v-model:value="model[field.key]" type="daterange" value-format="yyyy-MM-dd" style="width: 100%" clearable :placeholder="['开始日期', '结束日期']" :disabled="readOnly" />
          <n-input-number v-else-if="field.type === 'number'" v-model:value="model[field.key]" :min="field.minValue" :max="field.maxValue" style="width: 100%" :placeholder="getFieldPlaceholder(field)" :disabled="readOnly" />
          <n-input v-else-if="field.type === 'textarea'" v-model:value="model[field.key]" type="textarea" :autosize="{ minRows: 2, maxRows: 4 }" :placeholder="getFieldPlaceholder(field)" :disabled="readOnly" />
          <n-input v-else v-model:value="model[field.key]" :placeholder="getFieldPlaceholder(field)" :disabled="readOnly" />
        </n-form-item>
      </div>
    </n-form>

    <template #footer>
      <n-space justify="end">
        <template v-if="readOnly">
          <n-button @click="close">{{ closeText }}</n-button>
        </template>
        <template v-else-if="okFirst">
          <n-button type="primary" @click="submit">{{ okText }}</n-button>
          <n-button @click="close">{{ cancelText }}</n-button>
        </template>
        <template v-else>
          <n-button @click="close">{{ cancelText }}</n-button>
          <n-button type="primary" @click="submit">{{ okText }}</n-button>
        </template>
      </n-space>
    </template>
  </n-modal>
</template>

<style scoped>
.form-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px 14px; }
.full-row { grid-column: 1 / -1; }
</style>
