import { createRouter, createWebHistory } from 'vue-router'

import LoginPage from '../modules/auth/pages/LoginPage.vue'
import DashboardLayout from '../layouts/DashboardLayout.vue'
import DashboardAnalysisPage from '../modules/dashboard/pages/AnalysisPage.vue'
import CompanyListPage from '../modules/company/pages/ListPage.vue'
import CompanyDetailPage from '../modules/company/pages/DetailPage.vue'
import CompanyCreatePage from '../modules/company/pages/CreatePage.vue'
import ProjectListPage from '../modules/project/pages/ListPage.vue'
import ProjectDetailPage from '../modules/project/pages/DetailPage.vue'
import ProcessListPage from '../modules/process/pages/ListPage.vue'
import ProcessDetailPage from '../modules/process/pages/DetailPage.vue'
import FlowListPage from '../modules/flow/pages/ListPage.vue'
import FlowDetailPage from '../modules/flow/pages/DetailPage.vue'
import ExpenseListPage from '../modules/expense/pages/ListPage.vue'
import ExpenseDetailPage from '../modules/expense/pages/DetailPage.vue'
import MaterialListPage from '../modules/material/pages/ListPage.vue'
import MaterialDetailPage from '../modules/material/pages/DetailPage.vue'
import MaterialCreatePage from '../modules/material/pages/CreatePage.vue'
import SummaryListPage from '../modules/summary/pages/ListPage.vue'
import SummaryDetailPage from '../modules/summary/pages/DetailPage.vue'
import StatementsListPage from '../modules/statements/pages/ListPage.vue'
import StatementsDetailPage from '../modules/statements/pages/DetailPage.vue'
import TaskListPage from '../modules/task/pages/ListPage.vue'
import TaskDetailPage from '../modules/task/pages/DetailPage.vue'
import SystemListPage from '../modules/system/pages/ListPage.vue'
import SystemDetailPage from '../modules/system/pages/DetailPage.vue'

const companyModules = [
  { path: 'company/basic-info', title: '基本信息', key: 'basic-info' },
  { path: 'company/holiday-settings', title: '假期设置', key: 'holiday-settings' },
  { path: 'company/personnel-file', title: '人员档案', key: 'personnel-file' },
  { path: 'company/intellectual-property', title: '知识产权', key: 'intellectual-property' },
  { path: 'company/intangible-assets', title: '无形资产', key: 'intangible-assets' },
  { path: 'company/fixed-assets', title: '固定资产', key: 'fixed-assets' },
  { path: 'company/leased-assets', title: '经营租赁资产', key: 'leased-assets' },
  { path: 'company/accounting-code', title: '会计科目对照表', key: 'accounting-code' }
]

const companyRoutes = companyModules.flatMap((m) => [
  { path: m.path, component: CompanyListPage, meta: { breadcrumb: `公司档案 / ${m.title}`, moduleKey: m.key } },
  { path: `${m.path}/create`, component: CompanyCreatePage, meta: { breadcrumb: `公司档案 / ${m.title} / 新增`, moduleKey: m.key } },
  { path: `${m.path}/detail/:id`, component: CompanyDetailPage, meta: { breadcrumb: `公司档案 / ${m.title} / 详情`, moduleKey: m.key } }
])

const projectModules = [
  { path: 'project/project-info', title: '项目立项', key: 'project-info' },
  { path: 'project/project-collection-config', title: '任务分配', key: 'project-collection-config' },
  { path: 'project/project-suspend', title: '项目暂停/恢复', key: 'project-suspend' },
  { path: 'project/project-termination', title: '项目终止', key: 'project-termination' },
  { path: 'project/project-stage-change-apply', title: '项目结项', key: 'project-stage-change-apply' },
  { path: 'project/project-change', title: '项目变更', key: 'project-change' },
  { path: 'project/project-document', title: '项目文档管理', key: 'project-document' }
]

const projectRoutes = projectModules.flatMap((m) => [
  { path: m.path, component: ProjectListPage, meta: { breadcrumb: `项目管理 / ${m.title}`, moduleKey: m.key, listPath: `/${m.path}` } },
  { path: `${m.path}/detail/:id`, component: ProjectDetailPage, meta: { breadcrumb: `项目管理 / ${m.title} / 详情`, moduleKey: m.key, listPath: `/${m.path}` } }
])

const processModules = [
  { path: 'process/intangible-assets-working-hours', title: '无形资产工时表', key: 'process-intangible-assets-working-hours' },
  { path: 'process/fixed-assets-working-hours', title: '固定资产工时表', key: 'process-fixed-assets-working-hours' },
  { path: 'process/leased-assets-working-hours', title: '经营租赁资产工时表', key: 'process-leased-assets-working-hours' },
  { path: 'process/export', title: '研发过程文档导出', key: 'process-export' }
]

const processRoutes = processModules.flatMap((m) => [
  { path: m.path, component: ProcessListPage, meta: { breadcrumb: `研发过程 / ${m.title}`, moduleKey: m.key, listPath: `/${m.path}` } },
  { path: `${m.path}/detail/:id`, component: ProcessDetailPage, meta: { breadcrumb: `研发过程 / ${m.title} / 详情`, moduleKey: m.key, listPath: `/${m.path}` } }
])

const flowModules = [
  { path: 'flowable/model/modelDesigner', title: '流程模型', key: 'flow-process-model' }
]

const flowRoutes = flowModules.flatMap((m) => [
  { path: m.path, component: FlowListPage, meta: { breadcrumb: `流程管理 / ${m.title}`, moduleKey: m.key, listPath: `/${m.path}` } },
  { path: `${m.path}/detail/:id`, component: FlowDetailPage, meta: { breadcrumb: `流程管理 / ${m.title} / 详情`, moduleKey: m.key, listPath: `/${m.path}` } }
])

const expenseModules = [
  { path: 'expense/personnellabor', title: '人员人工费用', key: 'expense-personnellabor' },
  { path: 'expense/directinvestment', title: '直接投入费用', key: 'expense-directinvestment' },
  { path: 'expense/depreciationandspread', title: '折旧与长期待摊费用', key: 'expense-depreciationandspread' },
  { path: 'compliance/expense/cmexintangibleassetsshare/cmexIntangibleAssetsShareList', title: '无形资产摊销费用', key: 'expense-intangible-assets-share' },
  { path: 'compliance/expense/cmexequipmentadjustment/cmexEquipmentAdjustmentList', title: '装配调试费用', key: 'expense-equipment-adjustment' },
  { path: 'compliance/expense/cmexotherexpense/cmexOtherExpenseList', title: '其他相关费用', key: 'expense-other-expense' },
  { path: 'compliance/expense/cmexentrustedresearch/cmexEntrustedResearchList', title: '委托研发费用', key: 'expense-entrusted-research' },
  { path: 'compliance/expense/cmexoffsettingresearch/cmexOffsettingResearchList', title: '应冲减研发费用', key: 'expense-offsetting-research' },
  { path: 'compliance/expense/cmexauditadjustments/cmexAuditAdjustmentsList', title: '审计调整研发费用', key: 'expense-audit-adjustments' },
  { path: 'compliance/expense/cmexaccountingvouchersimport/cmexAccountingVouchersImportList', title: '会计凭证导入', key: 'expense-accounting-vouchers-import' }
]

const expenseRoutes = expenseModules.flatMap((m) => [
  { path: m.path, component: ExpenseListPage, meta: { breadcrumb: `研发支出 / ${m.title}`, moduleKey: m.key, listPath: `/${m.path}` } },
  { path: `${m.path}/detail/:id`, component: ExpenseDetailPage, meta: { breadcrumb: `研发支出 / ${m.title} / 详情`, moduleKey: m.key, listPath: `/${m.path}` } }
])

const materialModules = [
  { path: 'material/material-archive', title: '物料档案', key: 'material-archive' }
]

const materialRoutes = materialModules.flatMap((m) => [
  { path: m.path, component: MaterialListPage, meta: { breadcrumb: `样品及其他管理 / ${m.title}`, moduleKey: m.key } },
  { path: `${m.path}/create`, component: MaterialCreatePage, meta: { breadcrumb: `样品及其他管理 / ${m.title} / 新增`, moduleKey: m.key } },
  { path: `${m.path}/detail/:id`, component: MaterialDetailPage, meta: { breadcrumb: `样品及其他管理 / ${m.title} / 详情`, moduleKey: m.key } }
])

const summaryModules = [
  { path: 'summary/summary', title: '支出分配汇总', key: 'summary-summary' },
  { path: 'summary/book', title: '支出分配台账', key: 'summary-book' }
]

const summaryRoutes = summaryModules.flatMap((m) => [
  { path: m.path, component: SummaryListPage, meta: { breadcrumb: `支出分配 / ${m.title}`, moduleKey: m.key, listPath: `/${m.path}` } },
  { path: `${m.path}/detail/:id`, component: SummaryDetailPage, meta: { breadcrumb: `支出分配 / ${m.title} / 详情`, moduleKey: m.key, listPath: `/${m.path}` } }
])

const statementModules = [
  { path: 'statements/research-expenses', title: '研发支出多口径报表', key: 'statements-research-expenses' }
]

const statementRoutes = statementModules.flatMap((m) => [
  { path: m.path, component: StatementsListPage, meta: { breadcrumb: `报表生成及查询 / ${m.title}`, moduleKey: m.key, listPath: `/${m.path}` } },
  { path: `${m.path}/detail/:id`, component: StatementsDetailPage, meta: { breadcrumb: `报表生成及查询 / ${m.title} / 详情`, moduleKey: m.key, listPath: `/${m.path}` } }
])

const taskModules = [
  { path: 'flowable/task/allprocess/index', title: '所有任务', key: 'task-allprocess' },
  { path: 'flowable/task/myprocess/index', title: '我的任务', key: 'task-myprocess' },
  { path: 'flowable/task/todo/index', title: '待办任务', key: 'task-todo' },
  { path: 'flowable/task/finished/index', title: '已办任务', key: 'task-finished' }
]

const taskRoutes = taskModules.flatMap((m) => [
  { path: m.path, component: TaskListPage, meta: { breadcrumb: `任务管理 / ${m.title}`, moduleKey: m.key, listPath: `/${m.path}` } },
  { path: `${m.path}/detail/:id`, component: TaskDetailPage, meta: { breadcrumb: `任务管理 / ${m.title} / 详情`, moduleKey: m.key, listPath: `/${m.path}` } }
])

const systemModules = [
  { path: 'system/depart', title: '部门管理', key: 'system-depart' },
  { path: 'system/position', title: '职务管理', key: 'system-position' }
]

const systemRoutes = systemModules.flatMap((m) => [
  { path: m.path, component: SystemListPage, meta: { breadcrumb: `系统管理 / ${m.title}`, moduleKey: m.key, listPath: `/${m.path}` } },
  { path: `${m.path}/detail/:id`, component: SystemDetailPage, meta: { breadcrumb: `系统管理 / ${m.title} / 详情`, moduleKey: m.key, listPath: `/${m.path}` } }
])

const configModules = [
  {
    path: 'compliance/config/cmcfelectricitypriceconfig/cmcfElectricityPriceConfigList',
    title: '电费归集模式配置',
    key: 'config-electricity-price-mode'
  },
  {
    path: 'compliance/config/cmcfprojectstageconfig/cmcfProjectStageConfigList',
    title: '项目阶段配置',
    key: 'config-project-stage'
  },
  {
    path: 'compliance/config/cmcfprojectcollectionconfig/cmcfProjectCollectionConfigList',
    title: '项目归集配置',
    key: 'config-project-collection'
  },
  {
    path: 'compliance/config/cmcfexpenseallocationconfig/cmcfExpenseAllocationConfigList',
    title: '支出分配配置',
    key: 'config-expense-allocation'
  },
  {
    path: 'compliance/config/cmcfworkinghoursinputconfig/cmcfWorkingHoursInputConfigList',
    title: '工时录入配置',
    key: 'config-working-hours-input'
  },
  {
    path: 'compliance/config/cmcfworkflowconfig/cmcfWorkFlowConfigList',
    title: '流程配置',
    key: 'config-workflow'
  }
]

const configRoutes = configModules.flatMap((m) => [
  { path: m.path, component: ProjectListPage, meta: { breadcrumb: `配置中心 / ${m.title}`, moduleKey: m.key, listPath: `/${m.path}` } },
  { path: `${m.path}/detail/:id`, component: ProjectDetailPage, meta: { breadcrumb: `配置中心 / ${m.title} / 详情`, moduleKey: m.key, listPath: `/${m.path}` } }
])

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: LoginPage },
    {
      path: '/',
      component: DashboardLayout,
      children: [
        { path: 'dashboard/analysis', component: DashboardAnalysisPage, meta: { breadcrumb: '首页' } },
        ...companyRoutes,
        ...projectRoutes,
        ...processRoutes,
        ...flowRoutes,
        ...expenseRoutes,
        ...materialRoutes,
        ...summaryRoutes,
        ...statementRoutes,
        ...taskRoutes,
        ...systemRoutes,
        ...configRoutes
      ]
    }
  ]
})

export default router
