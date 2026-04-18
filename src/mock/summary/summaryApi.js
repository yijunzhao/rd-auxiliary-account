const STATUS_OPTIONS = ['启用', '停用', '草稿']
const FLOW_OPTIONS = ['草稿', '审批中', '审批通过', '审批驳回']

const MODULE_SPECS = [
  { key: 'summary-summary', title: '支出分配汇总', prefix: 'SUM' },
  { key: 'summary-book', title: '支出分配台账', prefix: 'SAB' }
]

const DEFAULT_TOOLBAR = {
  addLabel: '新增',
  batchDeleteLabel: '批量删除',
  importLabel: '导入',
  exportLabel: '导出'
}

const DEFAULT_MODAL = {
  width: 1040,
  columns: 2,
  okText: '保存',
  cancelText: '取消',
  closeText: '关闭',
  okFirst: false
}

function createModule(spec) {
  return {
    title: spec.title,
    prefix: spec.prefix,
    toolbar: { ...DEFAULT_TOOLBAR },
    modal: { ...DEFAULT_MODAL },
    columns: [
      { title: '统计期间', key: 'period', sortable: true, width: 120 },
      { title: '项目编号', key: 'projectCode', sortable: true, width: 150 },
      { title: '项目名称', key: 'projectName', width: 220 },
      { title: '费用类型', key: 'expenseType', width: 150 },
      { title: '原始金额(元)', key: 'originalAmount', sortable: true, width: 130 },
      { title: '分配金额(元)', key: 'allocationAmount', sortable: true, width: 130 },
      { title: '流程状态', key: 'flowStatus', width: 120 },
      { title: '更新日期', key: 'updatedAt', sortable: true, width: 120 }
    ],
    querySchema: [
      { key: 'period', label: '统计期间', type: 'input', match: 'fuzzy', placeholder: 'YYYY-MM' },
      { key: 'projectCode', label: '项目编号', type: 'input', match: 'fuzzy' },
      { key: 'projectName', label: '项目名称', type: 'input', match: 'fuzzy' },
      { key: 'flowStatus', label: '流程状态', type: 'select', match: 'exact', options: FLOW_OPTIONS }
    ],
    formSchema: [
      { key: 'period', label: '统计期间', type: 'input', required: true, requiredMessage: '请输入统计期间', pattern: '^\\d{4}-\\d{2}$', patternMessage: '请输入 YYYY-MM 格式' },
      { key: 'projectCode', label: '项目编号', type: 'input', required: true, requiredMessage: '请输入项目编号', min: 6, max: 32, pattern: '^[A-Z0-9-]+$', patternMessage: '项目编号格式不正确' },
      { key: 'projectName', label: '项目名称', type: 'input', required: true, requiredMessage: '请输入项目名称', min: 2, max: 120 },
      { key: 'expenseType', label: '费用类型', type: 'input', required: true, requiredMessage: '请输入费用类型', min: 2, max: 120 },
      { key: 'originalAmount', label: '原始金额(元)', type: 'number', required: true, requiredMessage: '请输入原始金额', minValue: 0, maxValue: 999999999 },
      { key: 'allocationAmount', label: '分配金额(元)', type: 'number', required: true, requiredMessage: '请输入分配金额', minValue: 0, maxValue: 999999999 },
      { key: 'flowStatus', label: '流程状态', type: 'select', options: FLOW_OPTIONS, required: true, requiredMessage: '请选择流程状态' },
      { key: 'remark', label: '备注', type: 'textarea', required: false, max: 300 },
      { key: 'status', label: '状态', type: 'select', options: STATUS_OPTIONS, required: true, requiredMessage: '请选择状态' }
    ],
    rows: [
      {
        id: `${spec.prefix}001`,
        period: '2026-03',
        projectCode: 'RD-PJT-2026-001',
        projectName: '新一代智能配电控制器研发',
        expenseType: spec.title,
        originalAmount: 252000,
        allocationAmount: 198500,
        flowStatus: '审批通过',
        remark: '模块独立 mock 示例数据',
        status: '启用',
        updatedAt: '2026-04-17'
      }
    ]
  }
}

const MODULES = Object.fromEntries(MODULE_SPECS.map((spec) => [spec.key, createModule(spec)]))
const store = Object.fromEntries(Object.entries(MODULES).map(([key, meta]) => [key, meta.rows.map((item) => ({ ...item }))]))

function wait(ms = 40) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function deepClone(data) {
  return JSON.parse(JSON.stringify(data))
}

function ensureModule(moduleKey) {
  const module = MODULES[moduleKey]
  if (!module) throw new Error('未找到对应模块')
  return module
}

function normalize(value) {
  return value === null || value === undefined ? '' : String(value).trim()
}

function applyFilters(rows, filters = {}, querySchema = []) {
  return rows.filter((row) => {
    return querySchema.every((field) => {
      const raw = filters[field.key]
      if (raw === '' || raw === null || raw === undefined) return true
      const expected = normalize(raw)
      const actual = normalize(row[field.key])
      if (!expected) return true
      if (field.match === 'exact') return actual === expected
      return actual.toLowerCase().includes(expected.toLowerCase())
    })
  })
}

function sortRows(rows, sortKey, sortOrder) {
  if (!sortKey || !sortOrder) return rows
  const factor = sortOrder === 'descend' ? -1 : 1
  return [...rows].sort((a, b) => {
    const av = a?.[sortKey]
    const bv = b?.[sortKey]
    if (av === bv) return 0
    if (av === undefined || av === null || av === '') return 1
    if (bv === undefined || bv === null || bv === '') return -1
    if (typeof av === 'number' && typeof bv === 'number') return (av - bv) * factor
    return String(av).localeCompare(String(bv), 'zh-Hans-CN') * factor
  })
}

function paginate(rows, page = 1, pageSize = 10) {
  const start = (page - 1) * pageSize
  return rows.slice(start, start + pageSize)
}

function nextId(moduleKey, prefix) {
  const count = store[moduleKey].length + 1
  return `${prefix}${String(count).padStart(3, '0')}`
}

export async function fetchProjectModuleMeta(moduleKey) {
  await wait()
  const module = ensureModule(moduleKey)
  return deepClone({
    title: module.title,
    toolbar: module.toolbar,
    columns: module.columns,
    querySchema: module.querySchema,
    formSchema: module.formSchema,
    modal: module.modal
  })
}

export async function fetchProjectList({ moduleKey, filters, page = 1, pageSize = 10, sortKey = '', sortOrder = '' }) {
  await wait()
  const module = ensureModule(moduleKey)
  const baseRows = store[moduleKey] || []
  const filtered = applyFilters(baseRows, filters, module.querySchema)
  const sorted = sortRows(filtered, sortKey, sortOrder)
  return deepClone({ list: paginate(sorted, page, pageSize), total: sorted.length })
}

export async function fetchProjectDetail({ moduleKey, id }) {
  await wait()
  ensureModule(moduleKey)
  const row = (store[moduleKey] || []).find((item) => item.id === id)
  return row ? deepClone(row) : null
}

export async function saveProjectRecord({ moduleKey, record }) {
  await wait()
  const module = ensureModule(moduleKey)
  const rows = store[moduleKey]
  const payload = deepClone(record || {})
  payload.updatedAt = payload.updatedAt || '2026-04-18'

  if (payload.id) {
    const index = rows.findIndex((item) => item.id === payload.id)
    if (index >= 0) {
      rows[index] = { ...rows[index], ...payload }
      return deepClone(rows[index])
    }
  }

  const created = {
    id: nextId(moduleKey, module.prefix),
    status: payload.status || '草稿',
    flowStatus: payload.flowStatus || '草稿',
    ...payload
  }
  rows.unshift(created)
  return deepClone(created)
}

export async function deleteProjectRecord({ moduleKey, id }) {
  await wait()
  ensureModule(moduleKey)
  const rows = store[moduleKey]
  const before = rows.length
  const next = rows.filter((item) => item.id !== id)
  store[moduleKey] = next
  return { success: before !== next.length }
}

export async function batchDeleteProjectRecords({ moduleKey, ids }) {
  await wait()
  ensureModule(moduleKey)
  const rows = store[moduleKey]
  const idSet = new Set(ids || [])
  const next = rows.filter((item) => !idSet.has(item.id))
  const removed = rows.length - next.length
  store[moduleKey] = next
  return { removed }
}

export async function exportProjectRecords({ moduleKey, filters, ids }) {
  await wait()
  const module = ensureModule(moduleKey)
  let rows = applyFilters(store[moduleKey] || [], filters, module.querySchema)
  if (Array.isArray(ids) && ids.length) {
    const idSet = new Set(ids)
    rows = rows.filter((item) => idSet.has(item.id))
  }
  return deepClone({
    filename: `${moduleKey}-${Date.now()}`,
    rows
  })
}

export async function importProjectRecords({ moduleKey, records }) {
  await wait()
  const module = ensureModule(moduleKey)
  const rows = store[moduleKey]
  let inserted = 0
  let updated = 0

  ;(records || []).forEach((item) => {
    const payload = { ...item }
    payload.updatedAt = payload.updatedAt || '2026-04-18'
    if (payload.id) {
      const index = rows.findIndex((row) => row.id === payload.id)
      if (index >= 0) {
        rows[index] = { ...rows[index], ...payload }
        updated += 1
        return
      }
    }
    rows.unshift({
      id: nextId(moduleKey, module.prefix),
      flowStatus: payload.flowStatus || '草稿',
      status: payload.status || '草稿',
      ...payload
    })
    inserted += 1
  })

  return { inserted, updated }
}