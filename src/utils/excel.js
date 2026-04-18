import * as XLSX from 'xlsx'

function normalizeCellValue(value) {
  if (value instanceof Date) return value.toISOString().slice(0, 10)
  if (typeof value === 'string') return value.trim()
  return value
}

export function exportRowsToExcel({ rows, fileName = 'export', sheetName = 'Sheet1' }) {
  const normalized = (rows || []).map((row) => {
    const next = {}
    Object.entries(row || {}).forEach(([k, v]) => {
      next[k] = normalizeCellValue(v)
    })
    return next
  })
  const ws = XLSX.utils.json_to_sheet(normalized)
  const wb = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(wb, ws, sheetName)
  const arrayBuffer = XLSX.write(wb, { type: 'array', bookType: 'xlsx' })
  const blob = new Blob([arrayBuffer], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = `${fileName}.xlsx`
  anchor.click()
  URL.revokeObjectURL(url)
}

export async function importRowsFromExcel(file) {
  const buf = await file.arrayBuffer()
  const workbook = XLSX.read(buf, { type: 'array', cellDates: true })
  const firstSheet = workbook.SheetNames[0]
  const ws = workbook.Sheets[firstSheet]
  return XLSX.utils.sheet_to_json(ws, { defval: '', raw: false, dateNF: 'yyyy-mm-dd' })
}

