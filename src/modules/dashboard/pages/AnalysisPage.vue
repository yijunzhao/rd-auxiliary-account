<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import * as echarts from 'echarts'
import { NButton, NCard, NSpace, NSelect } from 'naive-ui'

const year = ref('2026')
const yearOptions = [
  { label: '2026', value: '2026' },
  { label: '2025', value: '2025' },
  { label: '2024', value: '2024' }
]

const dashboard = { projectCount: 3, projectMax: 100, staffCount: 0, staffMax: 100, incomeRatio: 0, incomeRatioMax: 100 }
const projectInvestData = [{ name: '暂无数据', value: 1 }]
const workHourDataByYear = {
  '2026': [
    { name: '研发费用归集合能管理系统', value: 1860 },
    { name: 'AI 质检平台升级', value: 1325 },
    { name: '移动端工单优化', value: 940 },
    { name: '成本核算自动化', value: 1180 },
    { name: '数据中台接口治理', value: 760 }
  ],
  '2025': [
    { name: '研发费用归集合能管理系统', value: 1520 },
    { name: 'AI 质检平台升级', value: 1100 },
    { name: '移动端工单优化', value: 860 },
    { name: '成本核算自动化', value: 1035 },
    { name: '数据中台接口治理', value: 690 }
  ],
  '2024': [
    { name: '研发费用归集合能管理系统', value: 1280 },
    { name: 'AI 质检平台升级', value: 920 },
    { name: '移动端工单优化', value: 740 },
    { name: '成本核算自动化', value: 860 },
    { name: '数据中台接口治理', value: 550 }
  ]
}
const workHourData = computed(() => workHourDataByYear[year.value] ?? workHourDataByYear['2026'])
const expenseData = [
  { name: '人员人工费用', value: 1 }, { name: '直接投入费用', value: 1 }, { name: '折旧费用', value: 1 },
  { name: '长期待摊费用', value: 1 }, { name: '无形资产摊销', value: 1 }, { name: '新产品设计费用', value: 1 },
  { name: '装备调试费用', value: 1 }, { name: '其他相关费用', value: 1 }, { name: '委托研发费用', value: 1 }, { name: '委托境外费用', value: 1 }
]

const gaugeProjectRef = ref(null)
const gaugeStaffRef = ref(null)
const pieInvestRef = ref(null)
const gaugeIncomeRef = ref(null)
const barHourRef = ref(null)
const pieExpenseRef = ref(null)
const chartInstances = []

function buildGaugeOption(value, max, unit) {
  return { series: [{ type: 'gauge', min: 0, max, splitNumber: 10, radius: '92%', startAngle: 225, endAngle: -45, axisLine: { lineStyle: { width: 10, color: [[value / Math.max(max, 1), '#2f8cff'], [1, '#d8dfeb']] } }, axisTick: { distance: -16, length: 4, lineStyle: { color: '#aeb8c9', width: 1 } }, splitLine: { distance: -16, length: 8, lineStyle: { color: '#aeb8c9', width: 1 } }, axisLabel: { distance: -28, color: '#8d98aa', fontSize: 10 }, pointer: { itemStyle: { color: '#2f8cff' }, width: 3, length: '68%' }, anchor: { show: true, showAbove: true, size: 12, itemStyle: { color: '#fff', borderWidth: 3, borderColor: '#4b65b3' } }, detail: { fontSize: 40, offsetCenter: [0, '66%'], color: '#2f3747', formatter: `{value}${unit}` }, data: [{ value }] }] }
}

function createChart(elRef, option) {
  if (!elRef.value) return
  const chart = echarts.init(elRef.value)
  chart.setOption(option)
  chartInstances.push(chart)
}

function renderCharts() {
  disposeCharts()
  createChart(gaugeProjectRef, buildGaugeOption(dashboard.projectCount, dashboard.projectMax, '个'))
  createChart(gaugeStaffRef, buildGaugeOption(dashboard.staffCount, dashboard.staffMax, '人'))
  createChart(pieInvestRef, { tooltip: { trigger: 'item' }, series: [{ type: 'pie', radius: '72%', center: ['50%', '54%'], data: projectInvestData, label: { show: false }, itemStyle: { color: '#cfcfcf' } }] })
  createChart(gaugeIncomeRef, buildGaugeOption(dashboard.incomeRatio, dashboard.incomeRatioMax, '万'))
  createChart(barHourRef, {
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
    grid: { left: 46, right: 18, top: 26, bottom: 72 },
    xAxis: {
      type: 'category',
      data: workHourData.value.map((i) => i.name),
      axisLabel: { color: '#8d97a8', fontSize: 11, interval: 0, rotate: 18 },
      axisLine: { lineStyle: { color: '#d7dbe4' } }
    },
    yAxis: {
      type: 'value',
      name: '工时数',
      nameTextStyle: { color: '#8d97a8', fontSize: 11 },
      axisLabel: { color: '#8d97a8' },
      splitLine: { lineStyle: { color: '#eef1f7' } }
    },
    series: [{
      type: 'bar',
      data: workHourData.value.map((i) => i.value),
      itemStyle: { color: '#2f8cff' },
      barWidth: 30,
      label: { show: true, position: 'top', color: '#5f6f89', fontSize: 11 }
    }]
  })
  createChart(pieExpenseRef, { tooltip: { trigger: 'item' }, color: ['#3a9ad9', '#45bad7', '#5ccccf', '#90d3aa', '#f2d766', '#f29b77', '#ef6e91', '#d368ba', '#cf84c1', '#8f8cd8'], series: [{ type: 'pie', radius: '66%', center: ['50%', '56%'], label: { color: '#9aa5bb', fontSize: 11, formatter: (params) => `${params.name}\n(0%)` }, labelLine: { length: 10, length2: 8 }, data: expenseData }] })
}

function disposeCharts() {
  while (chartInstances.length) {
    const chart = chartInstances.pop()
    chart?.dispose()
  }
}

function resizeCharts() { chartInstances.forEach((chart) => chart.resize()) }

async function refreshDashboard() {
  await nextTick()
  renderCharts()
}

onMounted(async () => {
  window.addEventListener('resize', resizeCharts)
  await nextTick()
  renderCharts()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeCharts)
  disposeCharts()
})
</script>

<template>
  <n-card class="filter-card" :bordered="false">
    <n-space>
      <div class="filter-label">显示年份:</div>
      <n-select v-model:value="year" :options="yearOptions" class="year-select" size="small" />
      <n-button size="small" @click="refreshDashboard">重新计算</n-button>
    </n-space>
  </n-card>

  <div class="chart-grid-top">
    <n-card title="项目数量" size="small" class="dash-card"><div ref="gaugeProjectRef" class="chart-300"></div></n-card>
    <n-card title="研发人员数量" size="small" class="dash-card"><div ref="gaugeStaffRef" class="chart-300"></div></n-card>
    <n-card title="各项目研发投入占比" size="small" class="dash-card"><div ref="pieInvestRef" class="chart-300"></div></n-card>
    <n-card title="研发投入占收入比" size="small" class="dash-card"><div ref="gaugeIncomeRef" class="chart-300"></div></n-card>
  </div>

  <div class="chart-grid-bottom">
    <n-card title="人工工时结构分析" size="small" class="dash-card"><div ref="barHourRef" class="chart-400"></div></n-card>
    <n-card title="项目研发费用结构分析" size="small" class="dash-card"><div ref="pieExpenseRef" class="chart-400"></div></n-card>
  </div>
</template>

<style scoped>
.filter-card { border-radius: 2px; margin-bottom: 8px; }
.filter-label { line-height: 24px; font-size: 13px; color: #555; }
.year-select { width: 120px; }
.chart-grid-top { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 8px; margin-bottom: 8px; }
.chart-grid-bottom { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; }
.dash-card { border-radius: 2px; }
.chart-300 { height: 300px; }
.chart-400 { height: 330px; }
@media (max-width: 1400px) { .chart-grid-top { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 900px) { .chart-grid-top, .chart-grid-bottom { grid-template-columns: 1fr; } }
</style>
