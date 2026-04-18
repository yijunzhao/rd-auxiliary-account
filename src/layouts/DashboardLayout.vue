<script setup>
import { computed, h, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { NIcon, NLayout, NLayoutContent, NLayoutHeader, NLayoutSider, NMenu, NScrollbar, NSelect } from 'naive-ui'
import {
  BarChartOutline,
  BriefcaseOutline,
  BuildOutline,
  BusinessOutline,
  CalendarOutline,
  CardOutline,
  CheckboxOutline,
  CubeOutline,
  DocumentTextOutline,
  FileTrayFullOutline,
  GitNetworkOutline,
  HomeOutline,
  LayersOutline,
  LibraryOutline,
  DocumentAttachOutline,
  PauseCircleOutline,
  StopCircleOutline,
  FolderOpenOutline,
  FunnelOutline,
  GitMergeOutline,
  SwapHorizontalOutline,
  PeopleOutline,
  PieChartOutline,
  PricetagsOutline,
  SettingsOutline,
  ArchiveOutline,
  ListOutline,
  DocumentOutline,
  LogInOutline,
  LogOutOutline,
  StatsChartOutline,
  ClipboardOutline
} from '@vicons/ionicons5'

const route = useRoute()
const router = useRouter()

const company = ref('江苏荣泽信息科技股份有限公司')
const companyOptions = [{ label: '江苏荣泽信息科技股份有限公司', value: '江苏荣泽信息科技股份有限公司' }]

function renderIcon(icon) {
  return () => h(NIcon, { size: 18 }, { default: () => h(icon) })
}

const menuOptions = [
  { key: '/dashboard/analysis', label: '首页', icon: renderIcon(HomeOutline) },
  {
    key: 'company',
    label: '公司档案',
    icon: renderIcon(BusinessOutline),
    children: [
      { key: '/company/basic-info', label: '企业基本信息', icon: renderIcon(DocumentTextOutline) },
      { key: '/company/bank-account', label: '银行账户', icon: renderIcon(CardOutline) },
      { key: '/company/fixed-assets', label: '固定资产', icon: renderIcon(CubeOutline) },
      { key: '/company/accounting-code', label: '会计科目', icon: renderIcon(PricetagsOutline) },
      { key: '/company/holiday-settings', label: '节假日设置', icon: renderIcon(CalendarOutline) },
      { key: '/company/intangible-assets', label: '无形资产', icon: renderIcon(FileTrayFullOutline) },
      { key: '/company/intellectual-property', label: '知识产权', icon: renderIcon(BriefcaseOutline) },
      { key: '/company/personnel-file', label: '人员档案', icon: renderIcon(PeopleOutline) }
    ]
  },
  {
    key: 'project',
    label: '项目管理',
    icon: renderIcon(GitNetworkOutline),
    children: [
      { key: '/project/project-info', label: '项目信息', icon: renderIcon(LayersOutline) },
      { key: '/project/project-change', label: '项目变更信息', icon: renderIcon(SwapHorizontalOutline) },
      { key: '/project/project-suspend', label: '项目暂停/恢复', icon: renderIcon(PauseCircleOutline) },
      { key: '/project/project-termination', label: '项目终止表', icon: renderIcon(StopCircleOutline) },
      { key: '/project/project-document', label: '项目文档管理', icon: renderIcon(DocumentAttachOutline) },
      { key: '/project/project-collection-config', label: '项目归集配置', icon: renderIcon(FunnelOutline) },
      { key: '/project/project-stage-config', label: '项目阶段配置', icon: renderIcon(GitMergeOutline) },
      { key: '/project/project-stage-change-apply', label: '项目阶段转换申请', icon: renderIcon(LibraryOutline) }
    ]
  },
  {
    key: 'material',
    label: '样品及其他管理',
    icon: renderIcon(BarChartOutline),
    children: [
      { key: '/material/material-archive', label: '物料档案', icon: renderIcon(ArchiveOutline) },
      { key: '/material/material-flow-detail', label: '物料流转明细', icon: renderIcon(ListOutline) },
      { key: '/material/origin-stock-file', label: '期初库存文件', icon: renderIcon(DocumentOutline) },
      { key: '/material/sample-stock-in', label: '样品入库', icon: renderIcon(LogInOutline) },
      { key: '/material/scrap-stock-in', label: '废料入库', icon: renderIcon(LogInOutline) },
      { key: '/material/sample-stock-out', label: '样品出库', icon: renderIcon(LogOutOutline) },
      { key: '/material/scrap-stock-out', label: '废料出库', icon: renderIcon(LogOutOutline) },
      { key: '/material/material-flow-summary', label: '物料流转汇总', icon: renderIcon(StatsChartOutline) },
      { key: '/material/sample-other-stock-summary', label: '样品及其他收发存汇总', icon: renderIcon(StatsChartOutline) },
      { key: '/material/requisition-form', label: '领料单', icon: renderIcon(ClipboardOutline) }
    ]
  },
  {
    key: 'process',
    label: '研发过程',
    icon: renderIcon(GitNetworkOutline),
    children: [
      { key: '/process/cost-center', label: '成本中心', icon: renderIcon(BriefcaseOutline) },
      { key: '/process/original-attendance-file', label: '原始考勤文件', icon: renderIcon(DocumentTextOutline) },
      { key: '/process/attendance', label: '人员考勤', icon: renderIcon(PeopleOutline) },
      { key: '/process/personnel-working-hours', label: '人员工时填报', icon: renderIcon(CalendarOutline) },
      { key: '/process/fixed-assets-working-hours', label: '固定资产工时', icon: renderIcon(CubeOutline) },
      { key: '/process/intangible-assets-working-hours', label: '无形资产工时', icon: renderIcon(FileTrayFullOutline) },
      { key: '/process/leased-assets-working-hours', label: '租赁资产工时', icon: renderIcon(LayersOutline) },
      { key: '/process/personnel-input-working-form', label: '人员投入工时分配表', icon: renderIcon(FunnelOutline) },
      { key: '/process/assets-input-working-form', label: '资产投入工时分配表', icon: renderIcon(GitMergeOutline) },
      { key: '/process/doc-appraisal-report', label: '项目立项报告', icon: renderIcon(DocumentAttachOutline) },
      { key: '/process/doc-changes-document', label: '项目变更书', icon: renderIcon(SwapHorizontalOutline) },
      { key: '/process/doc-final-acceptance-report', label: '项目验收报告', icon: renderIcon(CheckboxOutline) },
      { key: '/process/doc-meeting-record', label: '项目会议纪要', icon: renderIcon(LibraryOutline) },
      { key: '/process/doc-other-report', label: '其他过程资料', icon: renderIcon(DocumentTextOutline) },
      { key: '/process/doc-test-report', label: '测试报告', icon: renderIcon(BarChartOutline) },
      { key: '/process/files', label: '研发过程资料归档', icon: renderIcon(FolderOpenOutline) },
      { key: '/process/export', label: '研发过程导出', icon: renderIcon(SwapHorizontalOutline) },
      { key: '/process/research-export', label: '研发过程汇总导出', icon: renderIcon(StatsChartOutline) }
    ]
  },
  {
    key: 'expense',
    label: '研发支出',
    icon: renderIcon(PieChartOutline),
    children: [
      { key: '/expense/personnellabor', label: '人员人工费用', icon: renderIcon(PeopleOutline) },
      { key: '/expense/directinvestment', label: '直接投入费用', icon: renderIcon(LogInOutline) },
      { key: '/expense/depreciationandspread', label: '折旧与长期待摊费用', icon: renderIcon(StatsChartOutline) },
      { key: '/compliance/expense/cmexintangibleassetsshare/cmexIntangibleAssetsShareList', label: '无形资产摊销费用', icon: renderIcon(FileTrayFullOutline) },
      { key: '/compliance/expense/cmexnewsproductdesign/cmexNewsProductDesignList', label: '新产品设计费等', icon: renderIcon(DocumentAttachOutline) },
      { key: '/compliance/expense/cmexequipmentadjustment/cmexEquipmentAdjustmentList', label: '装备调试费用', icon: renderIcon(BuildOutline) },
      { key: '/compliance/expense/cmexotherexpense/cmexOtherExpenseList', label: '其他相关费用', icon: renderIcon(ListOutline) },
      { key: '/compliance/expense/cmexentrustedresearch/cmexEntrustedResearchList', label: '委托研发费用', icon: renderIcon(LibraryOutline) },
      { key: '/compliance/expense/cmexoffsettingresearch/cmexOffsettingResearchList', label: '应冲减研发费用', icon: renderIcon(SwapHorizontalOutline) },
      { key: '/compliance/expense/cmexauditadjustments/cmexAuditAdjustmentsList', label: '审计调整研发费用', icon: renderIcon(CheckboxOutline) },
      { key: '/compliance/expense/cmexaccountingvouchersimport/cmexAccountingVouchersImportList', label: '会计凭证导入', icon: renderIcon(DocumentOutline) }
    ]
  },
  {
    key: 'allocation',
    label: '支出分配',
    icon: renderIcon(BarChartOutline),
    children: [
      { key: '/summary/summary', label: '支出分配汇总', icon: renderIcon(StatsChartOutline) },
      { key: '/summary/book', label: '支出分配台账', icon: renderIcon(ListOutline) }
    ]
  },
  {
    key: 'report',
    label: '报表生成及查询',
    icon: renderIcon(DocumentTextOutline),
    children: [
      { key: '/statements/research-expenses', label: '研发支出多口径报表', icon: renderIcon(StatsChartOutline) },
      { key: '/statements/keep-information', label: '加计扣除留存备查资料', icon: renderIcon(DocumentOutline) },
      { key: '/statements/research-deducted', label: '加计扣除相关报表', icon: renderIcon(ListOutline) },
      { key: '/statements/high-tech-reports', label: '高新技术企业相关报表', icon: renderIcon(BriefcaseOutline) },
      { key: '/statements/statistics-reports', label: '研发活动统计报表', icon: renderIcon(BarChartOutline) }
    ]
  },
  {
    key: 'flow',
    label: '流程管理',
    icon: renderIcon(GitNetworkOutline),
    children: [
      { key: '/flowable/model/modelDesigner', label: '流程模型', icon: renderIcon(GitMergeOutline) },
      { key: '/flowable/SysCustomForm/SysCustomFormList', label: '业务表单', icon: renderIcon(DocumentAttachOutline) },
      { key: '/flowable/task/record/index', label: '流程申请', icon: renderIcon(LibraryOutline) }
    ]
  },
  {
    key: 'task',
    label: '任务管理',
    icon: renderIcon(CheckboxOutline),
    children: [
      { key: '/flowable/task/allprocess/index', label: '所有任务', icon: renderIcon(ListOutline) },
      { key: '/flowable/task/myprocess/index', label: '我的任务', icon: renderIcon(PeopleOutline) },
      { key: '/flowable/task/todo/index', label: '待办任务', icon: renderIcon(CalendarOutline) },
      { key: '/flowable/task/finished/index', label: '已办任务', icon: renderIcon(CheckboxOutline) },
      { key: '/flowable/FlowCc/FowCcList', label: '抄送我的', icon: renderIcon(DocumentOutline) },
      { key: '/flowable/MyCc/MyCcList', label: '我的抄送', icon: renderIcon(DocumentTextOutline) }
    ]
  },
  {
    key: 'system',
    label: '系统管理',
    icon: renderIcon(SettingsOutline),
    children: [
      { key: '/system/depart', label: '部门管理', icon: renderIcon(PeopleOutline) },
      { key: '/system/position', label: '职务管理', icon: renderIcon(BriefcaseOutline) }
    ]
  },
  {
    key: 'config',
    label: '配置中心',
    icon: renderIcon(BuildOutline),
    children: [
      {
        key: '/compliance/config/cmcfelectricitypriceconfig/cmcfElectricityPriceConfigList',
        label: '电费归集模式配置',
        icon: renderIcon(BuildOutline)
      },
      {
        key: '/compliance/config/cmcfprojectstageconfig/cmcfProjectStageConfigList',
        label: '项目阶段配置',
        icon: renderIcon(GitMergeOutline)
      },
      {
        key: '/compliance/config/cmcfprojectcollectionconfig/cmcfProjectCollectionConfigList',
        label: '项目归集配置',
        icon: renderIcon(FunnelOutline)
      },
      {
        key: '/compliance/config/cmcfexpenseallocationconfig/cmcfExpenseAllocationConfigList',
        label: '支出分配配置',
        icon: renderIcon(BarChartOutline)
      },
      {
        key: '/compliance/config/cmcfworkinghoursinputconfig/cmcfWorkingHoursInputConfigList',
        label: '工时录入配置',
        icon: renderIcon(CalendarOutline)
      },
      {
        key: '/compliance/config/cmcfworkflowconfig/cmcfWorkFlowConfigList',
        label: '流程配置',
        icon: renderIcon(GitNetworkOutline)
      }
    ]
  }
]

const companyBaseKeys = [
  '/company/basic-info',
  '/company/bank-account',
  '/company/fixed-assets',
  '/company/accounting-code',
  '/company/holiday-settings',
  '/company/intangible-assets',
  '/company/intellectual-property',
  '/company/personnel-file'
]

const projectBaseKeys = [
  '/project/project-info',
  '/project/project-change',
  '/project/project-suspend',
  '/project/project-termination',
  '/project/project-document',
  '/project/project-collection-config',
  '/project/project-stage-config',
  '/project/project-stage-change-apply'
]

const materialBaseKeys = [
  '/material/material-archive',
  '/material/material-flow-detail',
  '/material/origin-stock-file',
  '/material/sample-stock-in',
  '/material/scrap-stock-in',
  '/material/sample-stock-out',
  '/material/scrap-stock-out',
  '/material/material-flow-summary',
  '/material/sample-other-stock-summary',
  '/material/requisition-form'
]

const processBaseKeys = [
  '/process/cost-center',
  '/process/original-attendance-file',
  '/process/attendance',
  '/process/personnel-working-hours',
  '/process/fixed-assets-working-hours',
  '/process/intangible-assets-working-hours',
  '/process/leased-assets-working-hours',
  '/process/personnel-input-working-form',
  '/process/assets-input-working-form',
  '/process/doc-appraisal-report',
  '/process/doc-changes-document',
  '/process/doc-final-acceptance-report',
  '/process/doc-meeting-record',
  '/process/doc-other-report',
  '/process/doc-test-report',
  '/process/files',
  '/process/export',
  '/process/research-export'
]

const expenseBaseKeys = [
  '/expense/personnellabor',
  '/expense/directinvestment',
  '/expense/depreciationandspread',
  '/compliance/expense/cmexintangibleassetsshare/cmexIntangibleAssetsShareList',
  '/compliance/expense/cmexnewsproductdesign/cmexNewsProductDesignList',
  '/compliance/expense/cmexequipmentadjustment/cmexEquipmentAdjustmentList',
  '/compliance/expense/cmexotherexpense/cmexOtherExpenseList',
  '/compliance/expense/cmexentrustedresearch/cmexEntrustedResearchList',
  '/compliance/expense/cmexoffsettingresearch/cmexOffsettingResearchList',
  '/compliance/expense/cmexauditadjustments/cmexAuditAdjustmentsList',
  '/compliance/expense/cmexaccountingvouchersimport/cmexAccountingVouchersImportList',
  '/expense/developAndExpensesFile'
]

const allocationBaseKeys = [
  '/summary/summary',
  '/summary/book'
]

const statementBaseKeys = [
  '/statements/research-expenses',
  '/statements/keep-information',
  '/statements/research-deducted',
  '/statements/high-tech-reports',
  '/statements/statistics-reports'
]

const flowBaseKeys = [
  '/flowable/model/modelDesigner',
  '/flowable/SysCustomForm/SysCustomFormList',
  '/flowable/task/record/index'
]

const taskBaseKeys = [
  '/flowable/task/allprocess/index',
  '/flowable/task/myprocess/index',
  '/flowable/task/todo/index',
  '/flowable/task/finished/index',
  '/flowable/FlowCc/FowCcList',
  '/flowable/MyCc/MyCcList'
]

const systemBaseKeys = [
  '/system/depart',
  '/system/position'
]

const configBaseKeys = [
  '/compliance/config/cmcfelectricitypriceconfig/cmcfElectricityPriceConfigList',
  '/compliance/config/cmcfprojectstageconfig/cmcfProjectStageConfigList',
  '/compliance/config/cmcfprojectcollectionconfig/cmcfProjectCollectionConfigList',
  '/compliance/config/cmcfexpenseallocationconfig/cmcfExpenseAllocationConfigList',
  '/compliance/config/cmcfworkinghoursinputconfig/cmcfWorkingHoursInputConfigList',
  '/compliance/config/cmcfworkflowconfig/cmcfWorkFlowConfigList'
]

const activeMenu = computed(() => {
  const p = route.path
  const hit = companyBaseKeys.find((k) => p.startsWith(k))
  if (hit) return hit
  const projectHit = projectBaseKeys.find((k) => p.startsWith(k))
  if (projectHit) return projectHit
  const materialHit = materialBaseKeys.find((k) => p.startsWith(k))
  if (materialHit) return materialHit
  const processHit = processBaseKeys.find((k) => p.startsWith(k))
  if (processHit) return processHit
  const expenseHit = expenseBaseKeys.find((k) => p.startsWith(k))
  if (expenseHit) return expenseHit
  const allocationHit = allocationBaseKeys.find((k) => p.startsWith(k))
  if (allocationHit) return allocationHit
  const statementHit = statementBaseKeys.find((k) => p.startsWith(k))
  if (statementHit) return statementHit
  const flowHit = flowBaseKeys.find((k) => p.startsWith(k))
  if (flowHit) return flowHit
  const taskHit = taskBaseKeys.find((k) => p.startsWith(k))
  if (taskHit) return taskHit
  const systemHit = systemBaseKeys.find((k) => p.startsWith(k))
  if (systemHit) return systemHit
  const configHit = configBaseKeys.find((k) => p.startsWith(k))
  if (configHit) return configHit
  return p
})

const expandedKeys = ref([])
const siderCollapsed = ref(false)
const breadcrumbLabel = computed(() => route.meta?.breadcrumb || '首页')

function handleMenuSelect(key) {
  if (typeof key === 'string' && key.startsWith('/')) {
    router.push(key)
  }
}

function logout() {
  router.push('/login')
}

function toggleSider() {
  siderCollapsed.value = !siderCollapsed.value
}
</script>

<template>
  <n-layout has-sider class="dashboard-page">
    <n-layout-sider
      class="dashboard-sider"
      :width="236"
      :collapsed-width="0"
      collapse-mode="width"
      :collapsed="siderCollapsed"
      :native-scrollbar="false"
      bordered
    >
      <div class="sider-title">智能化研发辅助账系统</div>
      <n-scrollbar style="height: calc(100vh - 52px)">
        <n-menu
          :value="activeMenu"
          v-model:expanded-keys="expandedKeys"
          :options="menuOptions"
          class="sider-menu"
          @update:value="handleMenuSelect"
        />
      </n-scrollbar>
    </n-layout-sider>

    <n-layout>
      <n-layout-header class="dashboard-header">
        <div class="header-left">
          <span class="header-hamburger" @click="toggleSider">☰</span>
          <span class="header-welcome">欢迎进入 研发费用合规智能管理系统</span>
        </div>

        <div class="header-right">
          <n-select v-model:value="company" :options="companyOptions" class="company-select" size="small" />
          <span class="header-icon">🔔</span>
          <span class="header-icon">🔍</span>
          <span class="header-user">易君召</span>
          <a class="logout-link" href="javascript:void(0)" @click="logout">退出</a>
        </div>
      </n-layout-header>

      <n-layout-content class="dashboard-content">
        <div class="page-breadcrumb">{{ breadcrumbLabel }}</div>
        <router-view />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<style scoped>
.dashboard-page { min-height: 100vh; background: #f0f2f5; }
.dashboard-sider { background: #ffffff; border-right: 1px solid #e8edf5; }
.sider-title { height: 52px; line-height: 52px; font-size: 18px; font-weight: 700; color: #1f2a44; letter-spacing: 0.4px; background: linear-gradient(180deg, #ffffff 0%, #f7fafe 100%); padding: 0 16px; border-bottom: 1px solid #e8edf5; }
.sider-menu { background: transparent; }
.sider-menu :deep(.n-menu-item), .sider-menu :deep(.n-submenu) { margin: 2px 8px; }
.sider-menu :deep(.n-menu-item-content), .sider-menu :deep(.n-submenu .n-submenu-title) { height: 42px; line-height: 42px; border-radius: 10px; padding-left: 12px !important; font-size: 14px; font-weight: 600; color: #2f3c57 !important; transition: all 0.2s ease; }
.sider-menu :deep(.n-menu-item-content__icon), .sider-menu :deep(.n-submenu .n-menu-item-content__icon) { color: #6f8fbd; margin-right: 8px; }
.sider-menu :deep(.n-menu-item-content:hover), .sider-menu :deep(.n-submenu .n-submenu-title:hover) { background: linear-gradient(90deg, #eef5ff 0%, #f6f9ff 100%); color: #1e60cc !important; }
.sider-menu :deep(.n-menu-item-content:hover .n-menu-item-content__icon), .sider-menu :deep(.n-submenu .n-submenu-title:hover .n-menu-item-content__icon) { color: #1e60cc; }
.sider-menu :deep(.n-menu-item-content--selected) { background: linear-gradient(90deg, #e7f1ff 0%, #f2f7ff 100%) !important; color: #135fce !important; box-shadow: inset 0 0 0 1px #cfe2ff; }
.sider-menu :deep(.n-menu-item-content--selected .n-menu-item-content__icon) { color: #135fce; }
.sider-menu :deep(.n-submenu-children) { margin: 2px 0 4px; }
.sider-menu :deep(.n-submenu-children .n-menu-item-content) { padding-left: 28px !important; }
.dashboard-header { height: 48px; background: linear-gradient(90deg, #48a8ff 0%, #6bb7ff 100%); color: #f7fbff; display: flex; align-items: center; justify-content: space-between; padding: 0 12px; border-bottom: 1px solid #8cc7ff; }
.header-left { display: flex; align-items: center; gap: 10px; }
.header-hamburger { font-size: 18px; cursor: pointer; user-select: none; }
.header-welcome { font-size: 14px; }
.header-right { display: flex; align-items: center; gap: 12px; }
.company-select { width: 240px; }
.header-icon { font-size: 14px; color: #f4f9ff; }
.header-user,.logout-link { color: #f7fbff; font-size: 13px; text-decoration: none; }
.dashboard-content { padding: 8px; }
.page-breadcrumb { height: 30px; line-height: 30px; color: #1b61bb; border-bottom: 1px solid #e6e6e6; margin-bottom: 8px; }
</style>
