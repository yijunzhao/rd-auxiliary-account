const STATUS_OPTIONS = ['启用', '停用', '草稿']

const MODULE_SPECS = [
  { key: 'material-archive', title: '物料档案', prefix: 'MA' },
  { key: 'material-flow-detail', title: '物料流转明细', prefix: 'MF' },
  { key: 'origin-stock-file', title: '期初库存文件', prefix: 'OS' },
  { key: 'sample-stock-in', title: '样品入库', prefix: 'SI' },
  { key: 'scrap-stock-in', title: '废料入库', prefix: 'RI' },
  { key: 'sample-stock-out', title: '样品出库', prefix: 'SO' },
  { key: 'scrap-stock-out', title: '废料出库', prefix: 'RO' },
  { key: 'material-flow-summary', title: '物料流转汇总', prefix: 'MS' },
  { key: 'sample-other-stock-summary', title: '样品及其他收发存汇总', prefix: 'SS' },
  { key: 'requisition-form', title: '领料单', prefix: 'RQ' }
]

const DEFAULT_TOOLBAR = {
  addLabel: '新增',
  batchDeleteLabel: '批量删除',
  importLabel: '导入',
  exportLabel: '导出'
}

const DEFAULT_MODAL = {
  width: 1020,
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
      { title: '单据编号', key: 'billNo', sortable: true, width: 160 },
      { title: '物料编码', key: 'materialCode', sortable: true, width: 140 },
      { title: '物料名称', key: 'materialName', width: 220 },
      { title: '业务类型', key: 'bizType', width: 130 },
      { title: '数量', key: 'quantity', sortable: true, width: 110 },
      { title: '单位', key: 'unit', width: 80 },
      { title: '业务日期', key: 'bizDate', sortable: true, width: 120 },
      { title: '仓库', key: 'warehouse', width: 160 },
      { title: '更新日期', key: 'updatedAt', sortable: true, width: 120 }
    ],
    querySchema: [
      { key: 'billNo', label: '单据编号', type: 'input', match: 'fuzzy' },
      { key: 'materialCode', label: '物料编码', type: 'input', match: 'fuzzy' },
      { key: 'materialName', label: '物料名称', type: 'input', match: 'fuzzy' },
      { key: 'bizType', label: '业务类型', type: 'input', match: 'fuzzy' },
      { key: 'status', label: '状态', type: 'select', match: 'exact', options: STATUS_OPTIONS }
    ],
    formSchema: [
      { key: 'billNo', label: '单据编号', type: 'input', required: true, requiredMessage: '请输入单据编号', min: 4, max: 40 },
      { key: 'materialCode', label: '物料编码', type: 'input', required: true, requiredMessage: '请输入物料编码', min: 2, max: 30 },
      { key: 'materialName', label: '物料名称', type: 'input', required: true, requiredMessage: '请输入物料名称', min: 2, max: 120 },
      { key: 'bizType', label: '业务类型', type: 'input', required: true, requiredMessage: '请输入业务类型', min: 2, max: 60 },
      { key: 'quantity', label: '数量', type: 'number', required: true, requiredMessage: '请输入数量', minValue: 0, maxValue: 999999999 },
      { key: 'unit', label: '单位', type: 'select', options: ['件', '个', '千克', '米', '套'], required: true, requiredMessage: '请选择单位' },
      { key: 'bizDate', label: '业务日期', type: 'date', required: true, requiredMessage: '请选择业务日期' },
      { key: 'warehouse', label: '仓库', type: 'input', required: true, requiredMessage: '请输入仓库', min: 2, max: 60 },
      { key: 'remark', label: '备注', type: 'textarea', required: false, max: 300 },
      { key: 'status', label: '状态', type: 'select', options: STATUS_OPTIONS, required: true, requiredMessage: '请选择状态' }
    ],
    rows: [
      {
        id: `${spec.prefix}001`,
        billNo: `${spec.prefix}-2026-001`,
        materialCode: 'MAT-0001',
        materialName: '高频采样电阻',
        bizType: spec.title,
        quantity: 120,
        unit: '个',
        bizDate: '2026-04-16',
        warehouse: '研发样品库',
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

export async function fetchArchiveModuleMeta(moduleKey) {
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

export async function fetchArchiveList({ moduleKey, filters, page = 1, pageSize = 10, sortKey = '', sortOrder = '' }) {
  await wait()
  const module = ensureModule(moduleKey)
  const baseRows = store[moduleKey] || []
  const filtered = applyFilters(baseRows, filters, module.querySchema)
  const sorted = sortRows(filtered, sortKey, sortOrder)
  return deepClone({ list: paginate(sorted, page, pageSize), total: sorted.length })
}

export async function fetchArchiveDetail({ moduleKey, id }) {
  await wait()
  ensureModule(moduleKey)
  const row = (store[moduleKey] || []).find((item) => item.id === id)
  return row ? deepClone(row) : null
}

export async function saveArchiveRecord({ moduleKey, record }) {
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
    ...payload
  }
  rows.unshift(created)
  return deepClone(created)
}

export async function deleteArchiveRecord({ moduleKey, id }) {
  await wait()
  ensureModule(moduleKey)
  const rows = store[moduleKey]
  const before = rows.length
  const next = rows.filter((item) => item.id !== id)
  store[moduleKey] = next
  return { success: before !== next.length }
}

export async function batchDeleteArchiveRecords({ moduleKey, ids }) {
  await wait()
  ensureModule(moduleKey)
  const rows = store[moduleKey]
  const idSet = new Set(ids || [])
  const next = rows.filter((item) => !idSet.has(item.id))
  const removed = rows.length - next.length
  store[moduleKey] = next
  return { removed }
}

export async function exportArchiveRecords({ moduleKey, filters }) {
  await wait()
  const module = ensureModule(moduleKey)
  const rows = applyFilters(store[moduleKey] || [], filters, module.querySchema)
  return deepClone({
    filename: `${moduleKey}-${Date.now()}`,
    rows
  })
}

export async function importArchiveRecords({ moduleKey, records }) {
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
      status: payload.status || '草稿',
      ...payload
    })
    inserted += 1
  })

  return { inserted, updated }
}