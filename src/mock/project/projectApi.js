const STATUS_OPTIONS = ['启用', '停用', '草稿']
const FLOW_OPTIONS = ['草稿', '审批中', '审批通过', '审批驳回']
const BOOLEAN_OPTIONS = ['是', '否']
const DOC_TYPE_OPTIONS = ['立项文档', '过程文档', '验收文档', '变更文档']

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

const MODULE_MODAL = {
  'project-info': { ...DEFAULT_MODAL, width: 1180, columns: 2, okText: '保存' },
  'project-change': { ...DEFAULT_MODAL, width: 980, columns: 2, okText: '保存' },
  'project-suspend': { ...DEFAULT_MODAL, width: 900, columns: 2, okText: '保存' },
  'project-termination': { ...DEFAULT_MODAL, width: 980, columns: 2, okText: '保存' },
  'project-document': { ...DEFAULT_MODAL, width: 980, columns: 2, okText: '保存' },
  'project-collection-config': { ...DEFAULT_MODAL, width: 920, columns: 2, okText: '保存' },
  'project-stage-config': { ...DEFAULT_MODAL, width: 880, columns: 1, okText: '保存' },
  'project-stage-change-apply': { ...DEFAULT_MODAL, width: 920, columns: 2, okText: '提交申请', cancelText: '取消', okFirst: false },
  'summary-summary': { ...DEFAULT_MODAL, width: 1020, columns: 2, okText: '保存' },
  'summary-book': { ...DEFAULT_MODAL, width: 1080, columns: 2, okText: '保存' },
  'expense-personnellabor': { ...DEFAULT_MODAL, width: 1080, columns: 2, okText: '保存' },
  'expense-directinvestment': { ...DEFAULT_MODAL, width: 1080, columns: 2, okText: '保存' },
  'expense-depreciationandspread': { ...DEFAULT_MODAL, width: 1080, columns: 2, okText: '保存' },
  'expense-intangible-assets-share': { ...DEFAULT_MODAL, width: 1080, columns: 2, okText: '保存' },
  'expense-news-product-design': { ...DEFAULT_MODAL, width: 1080, columns: 2, okText: '保存' },
  'expense-equipment-adjustment': { ...DEFAULT_MODAL, width: 1080, columns: 2, okText: '保存' },
  'expense-other-expense': { ...DEFAULT_MODAL, width: 1080, columns: 2, okText: '保存' },
  'expense-entrusted-research': { ...DEFAULT_MODAL, width: 1080, columns: 2, okText: '保存' },
  'expense-offsetting-research': { ...DEFAULT_MODAL, width: 1080, columns: 2, okText: '保存' },
  'expense-audit-adjustments': { ...DEFAULT_MODAL, width: 1080, columns: 2, okText: '保存' },
  'expense-accounting-vouchers-import': { ...DEFAULT_MODAL, width: 1080, columns: 2, okText: '保存' },
  'expense-develop-and-expenses-file': { ...DEFAULT_MODAL, width: 1080, columns: 2, okText: '保存' },
  'statements-research-expenses': { ...DEFAULT_MODAL, width: 1080, columns: 2, okText: '保存' },
  'statements-keep-information': { ...DEFAULT_MODAL, width: 1020, columns: 2, okText: '保存' },
  'statements-research-deducted': { ...DEFAULT_MODAL, width: 1040, columns: 2, okText: '保存' },
  'statements-high-tech-reports': { ...DEFAULT_MODAL, width: 1040, columns: 2, okText: '保存' },
  'statements-statistics-reports': { ...DEFAULT_MODAL, width: 1080, columns: 2, okText: '保存' },
  'flow-process-model': { ...DEFAULT_MODAL, width: 980, columns: 2, okText: '保存' },
  'flow-business-form': { ...DEFAULT_MODAL, width: 1040, columns: 2, okText: '保存' },
  'flow-process-apply': { ...DEFAULT_MODAL, width: 980, columns: 2, okText: '提交申请', cancelText: '取消', okFirst: false },
  'config-electricity-price-mode': { ...DEFAULT_MODAL, width: 980, columns: 2, okText: '保存' },
  'config-project-stage': { ...DEFAULT_MODAL, width: 920, columns: 2, okText: '保存' },
  'config-project-collection': { ...DEFAULT_MODAL, width: 980, columns: 2, okText: '保存' },
  'config-expense-allocation': { ...DEFAULT_MODAL, width: 980, columns: 2, okText: '保存' },
  'config-working-hours-input': { ...DEFAULT_MODAL, width: 920, columns: 2, okText: '保存' },
  'config-workflow': { ...DEFAULT_MODAL, width: 980, columns: 2, okText: '保存' },
  'system-depart': { ...DEFAULT_MODAL, width: 980, columns: 2, okText: '保存' },
  'system-position': { ...DEFAULT_MODAL, width: 920, columns: 2, okText: '保存' }
}

const MODULES = {
  'project-info': {
    title: '项目信息',
    prefix: 'PI',
    toolbar: { ...DEFAULT_TOOLBAR },
    columns: [
      { title: '项目编号', key: 'projectCode', sortable: true, width: 180 },
      { title: '项目名称', key: 'projectName', width: 260 },
      { title: '开始日期', key: 'startDate', sortable: true, width: 120 },
      { title: '结束日期', key: 'endDate', sortable: true, width: 120 },
      { title: '研发类型', key: 'researchType', width: 120 },
      { title: '项目类型', key: 'projectType', width: 120 },
      { title: '研发属性', key: 'projectStageType', width: 120 },
      { title: '项目阶段', key: 'projectStage', width: 120 },
      { title: '项目状态', key: 'projectStatus', width: 120 },
      { title: '技术来源', key: 'technologySource', width: 120 },
      { title: '审批渠道', key: 'needApprove', width: 120 },
      { title: '流程状态', key: 'actStatus', width: 120 },
      { title: '更新日期', key: 'updatedAt', sortable: true, width: 120 }
    ],
    querySchema: [
      { key: 'projectCode', label: '项目编号', type: 'input', match: 'fuzzy', placeholder: '请输入项目编号' },
      { key: 'projectName', label: '项目名称', type: 'input', match: 'fuzzy', placeholder: '请输入项目名称' },
      { key: 'researchType', label: '研发类型', type: 'select', match: 'exact', options: ['自主研发', '合作研发', '委托研发'] },
      { key: 'projectType', label: '项目类型', type: 'select', match: 'exact', options: ['新产品开发', '工艺改进', '技术预研'] },
      { key: 'monthVal', label: '结束月份', type: 'input', match: 'fuzzy', placeholder: 'YYYY-MM' }
    ],
    formSchema: [
      { key: 'projectCode', label: '项目编号', type: 'input', required: true, requiredMessage: '请输入项目编号', min: 6, max: 32, pattern: '^[A-Z0-9-]+$', patternMessage: '项目编号仅支持大写字母、数字、短横线' },
      { key: 'projectName', label: '项目名称', type: 'input', required: true, requiredMessage: '请输入项目名称', min: 2, max: 120 },
      { key: 'startDate', label: '开始日期', type: 'date', required: true, requiredMessage: '请选择开始日期' },
      { key: 'endDate', label: '结束日期', type: 'date', required: true, requiredMessage: '请选择结束日期' },
      { key: 'researchType', label: '研发类型', type: 'select', options: ['自主研发', '合作研发', '委托研发'], required: true, requiredMessage: '请选择研发类型' },
      { key: 'projectType', label: '项目类型', type: 'select', options: ['新产品开发', '工艺改进', '技术预研'], required: true, requiredMessage: '请选择项目类型' },
      { key: 'projectStageType', label: '研发属性', type: 'input', required: true, requiredMessage: '请输入研发属性', min: 2, max: 30 },
      { key: 'projectStage', label: '项目阶段', type: 'input', required: true, requiredMessage: '请输入项目阶段', min: 2, max: 30 },
      { key: 'projectStatus', label: '项目状态', type: 'select', options: ['立项中', '研发中', '已结项', '已终止'], required: true, requiredMessage: '请选择项目状态' },
      { key: 'technologySource', label: '技术来源', type: 'select', options: ['自主', '外购', '合作引进'], required: true, requiredMessage: '请选择技术来源' },
      { key: 'needApprove', label: '审批渠道', type: 'select', options: ['系统审批', '外部审结'], required: true, requiredMessage: '请选择审批渠道' },
      { key: 'projectManagers', label: '项目经理', type: 'input', required: true, requiredMessage: '请输入项目经理', min: 2, max: 30, pattern: '^[\\u4e00-\\u9fa5A-Za-z·]{2,30}$', patternMessage: '项目经理姓名格式不正确' },
      { key: 'actStatus', label: '流程状态', type: 'select', options: FLOW_OPTIONS, required: true, requiredMessage: '请选择流程状态' },
      { key: 'status', label: '状态', type: 'select', options: STATUS_OPTIONS, required: true, requiredMessage: '请选择状态' }
    ],
    rows: [
      {
        id: 'PI001',
        projectCode: 'RD-PJT-2026-001',
        projectName: '新一代智能配电控制器研发',
        startDate: '2026-01-01',
        endDate: '2026-12-31',
        researchType: '自主研发',
        projectType: '新产品开发',
        projectStageType: '产品研发类',
        projectStage: '样机验证',
        projectStatus: '研发中',
        technologySource: '自主',
        needApprove: '系统审批',
        projectManagers: '易君召',
        actStatus: '审批通过',
        status: '启用',
        updatedAt: '2026-04-16'
      }
    ]
  },
  'project-change': {
    title: '项目变更信息',
    prefix: 'PC',
    toolbar: { ...DEFAULT_TOOLBAR },
    columns: [
      { title: '项目编号', key: 'projectCode', sortable: true, width: 180 },
      { title: '项目名称', key: 'projectName', width: 220 },
      { title: '变更原因', key: 'reason', width: 280 },
      { title: '变更时间', key: 'createTime', sortable: true, width: 120 },
      { title: '流程状态', key: 'actStatus', width: 120 },
      { title: '项目经理', key: 'projectManagers', width: 120 },
      { title: '变更人', key: 'createBy', width: 120 },
      { title: '更新日期', key: 'updatedAt', sortable: true, width: 120 }
    ],
    querySchema: [
      { key: 'projectCode', label: '项目编号', type: 'input', match: 'fuzzy' },
      { key: 'projectName', label: '项目名称', type: 'input', match: 'fuzzy' },
      { key: 'changeTime', label: '变更日期', type: 'input', match: 'fuzzy', placeholder: 'YYYY-MM-DD' },
      { key: 'keyword', label: '关键字', type: 'input', match: 'fuzzy', placeholder: '变更原因/变更人' }
    ],
    formSchema: [
      { key: 'projectCode', label: '项目编号', type: 'input', required: true, requiredMessage: '请输入项目编号', min: 6, max: 32, pattern: '^[A-Z0-9-]+$', patternMessage: '项目编号格式不正确' },
      { key: 'projectName', label: '项目名称', type: 'input', required: true, requiredMessage: '请输入项目名称', min: 2, max: 120 },
      { key: 'reason', label: '变更原因', type: 'textarea', required: true, requiredMessage: '请输入变更原因', min: 4, max: 500 },
      { key: 'createTime', label: '变更时间', type: 'date', required: true, requiredMessage: '请选择变更时间' },
      { key: 'projectManagers', label: '项目经理', type: 'input', required: true, requiredMessage: '请输入项目经理', min: 2, max: 30 },
      { key: 'createBy', label: '变更人', type: 'input', required: true, requiredMessage: '请输入变更人', min: 2, max: 30 },
      { key: 'actStatus', label: '流程状态', type: 'select', options: FLOW_OPTIONS, required: true, requiredMessage: '请选择流程状态' },
      { key: 'status', label: '状态', type: 'select', options: STATUS_OPTIONS, required: true, requiredMessage: '请选择状态' }
    ],
    rows: [
      {
        id: 'PC001',
        projectCode: 'RD-PJT-2026-001',
        projectName: '新一代智能配电控制器研发',
        reason: '增加 EMC 可靠性测试子课题',
        createTime: '2026-03-12',
        actStatus: '审批通过',
        projectManagers: '易君召',
        createBy: '张敏',
        status: '启用',
        updatedAt: '2026-03-13'
      }
    ]
  },
  'project-suspend': {
    title: '项目暂停/恢复',
    prefix: 'PS',
    toolbar: { ...DEFAULT_TOOLBAR },
    columns: [
      { title: '项目编号', key: 'projectCode', sortable: true, width: 180 },
      { title: '项目名称', key: 'projectName', width: 220 },
      { title: '项目暂停/恢复原因', key: 'reason', width: 280 },
      { title: '项目暂停/恢复日期', key: 'suspendDate', sortable: true, width: 140 },
      { title: '操作类型', key: 'operationType', width: 100 },
      { title: '附件', key: 'filePath', width: 180 },
      { title: '流程状态', key: 'actStatus', width: 120 },
      { title: '更新日期', key: 'updatedAt', sortable: true, width: 120 }
    ],
    querySchema: [
      { key: 'projectCode', label: '项目编号', type: 'input', match: 'fuzzy' },
      { key: 'projectName', label: '项目名称', type: 'input', match: 'fuzzy' },
      { key: 'suspendDate', label: '项目暂停/恢复日期', type: 'input', match: 'fuzzy' },
      { key: 'operationType', label: '操作类型', type: 'select', match: 'exact', options: ['暂停', '恢复'] }
    ],
    formSchema: [
      { key: 'projectName', label: '项目名称', type: 'input', required: true, requiredMessage: '请选择项目' },
      { key: 'projectCode', label: '项目编号', type: 'input', required: true, requiredMessage: '项目编号不能为空', min: 6, max: 32, pattern: '^[A-Z0-9-]+$', patternMessage: '项目编号格式不正确' },
      { key: 'operationType', label: '操作类型', type: 'select', options: ['暂停', '恢复'], required: true, requiredMessage: '请选择操作类型' },
      { key: 'reason', label: '项目暂停/恢复原因', type: 'textarea', required: true, requiredMessage: '请输入项目暂停/恢复原因', min: 4, max: 500 },
      { key: 'suspendDate', label: '项目暂停/恢复日期', type: 'date', required: true, requiredMessage: '请选择项目暂停/恢复日期' },
      { key: 'filePath', label: '附件', type: 'input', required: true, requiredMessage: '请上传附件', min: 5, max: 200 },
      { key: 'actStatus', label: '流程状态', type: 'select', options: FLOW_OPTIONS, required: true, requiredMessage: '请选择流程状态' },
      { key: 'status', label: '状态', type: 'select', options: STATUS_OPTIONS, required: true, requiredMessage: '请选择状态' }
    ],
    rows: [
      {
        id: 'PS001',
        projectCode: 'RD-PJT-2026-003',
        projectName: '电机驱动算法升级项目',
        reason: '外协实验环境故障，项目暂停两周',
        suspendDate: '2026-04-01',
        operationType: '暂停',
        filePath: 'https://example.com/project_suspend_001.pdf',
        actStatus: '审批中',
        status: '启用',
        updatedAt: '2026-04-01'
      }
    ]
  },
  'project-termination': {
    title: '项目终止表',
    prefix: 'PT',
    toolbar: { ...DEFAULT_TOOLBAR },
    columns: [
      { title: '项目编号', key: 'projectCode', sortable: true, width: 180 },
      { title: '项目名称', key: 'projectName', width: 220 },
      { title: '项目实施情况说明', key: 'projectImplementationDesc', width: 220 },
      { title: '项目终止原因', key: 'projectTerminationReason', width: 220 },
      { title: '项目终止日期', key: 'projectTerminationData', sortable: true, width: 140 },
      { title: '附件', key: 'filePath', width: 180 },
      { title: '备注', key: 'remark', width: 200 },
      { title: '流程状态', key: 'actStatus', width: 120 },
      { title: '更新日期', key: 'updatedAt', sortable: true, width: 120 }
    ],
    querySchema: [
      { key: 'projectCode', label: '项目编号', type: 'input', match: 'fuzzy' },
      { key: 'projectName', label: '项目名称', type: 'input', match: 'fuzzy' },
      { key: 'projectTerminationData', label: '项目终止日期', type: 'input', match: 'fuzzy' }
    ],
    formSchema: [
      { key: 'projectName', label: '项目名称', type: 'input', required: true, requiredMessage: '请选择项目' },
      { key: 'projectCode', label: '项目编号', type: 'input', required: true, requiredMessage: '项目编号不能为空', min: 6, max: 32, pattern: '^[A-Z0-9-]+$', patternMessage: '项目编号格式不正确' },
      { key: 'projectImplementationDesc', label: '项目实施情况说明', type: 'textarea', required: false, max: 1000 },
      { key: 'projectTerminationReason', label: '项目终止原因', type: 'textarea', required: true, requiredMessage: '请输入项目终止原因', min: 4, max: 500 },
      { key: 'projectTerminationData', label: '项目终止日期', type: 'date', required: true, requiredMessage: '请输入项目终止日期' },
      { key: 'filePath', label: '附件', type: 'input', required: true, requiredMessage: '请上传附件', min: 5, max: 200 },
      { key: 'remark', label: '备注', type: 'textarea', required: false, max: 300 },
      { key: 'actStatus', label: '流程状态', type: 'select', options: FLOW_OPTIONS, required: true, requiredMessage: '请选择流程状态' },
      { key: 'status', label: '状态', type: 'select', options: STATUS_OPTIONS, required: true, requiredMessage: '请选择状态' }
    ],
    rows: [
      {
        id: 'PT001',
        projectCode: 'RD-PJT-2024-010',
        projectName: '旧版工业网关改造项目',
        projectImplementationDesc: '完成预研后评估投入产出比偏低，建议终止。',
        projectTerminationReason: '与市场战略调整不匹配，资源转投重点项目',
        projectTerminationData: '2026-02-18',
        filePath: 'https://example.com/project_termination_001.pdf',
        remark: '经项目评审委员会确认',
        actStatus: '审批通过',
        status: '停用',
        updatedAt: '2026-02-20'
      }
    ]
  },
  'project-document': {
    title: '项目文档管理',
    prefix: 'PD',
    toolbar: { ...DEFAULT_TOOLBAR, batchExportLabel: '批量导出附件' },
    columns: [
      { title: '项目编号', key: 'projectCode', sortable: true, width: 150 },
      { title: '项目名称', key: 'projectName', width: 180 },
      { title: '项目阶段', key: 'projectStage', width: 120 },
      { title: '文档类型', key: 'documentType', width: 120 },
      { title: '文档名称', key: 'documentName', width: 180 },
      { title: '文档分类', key: 'documentCategory', width: 120 },
      { title: '文件', key: 'filePath', width: 180 },
      { title: '创建时间', key: 'createTime', sortable: true, width: 140 },
      { title: '备注', key: 'remark', width: 200 },
      { title: '更新日期', key: 'updatedAt', sortable: true, width: 120 }
    ],
    querySchema: [
      { key: 'projectCode', label: '项目编号', type: 'input', match: 'fuzzy' },
      { key: 'projectName', label: '项目名称', type: 'input', match: 'fuzzy' },
      { key: 'createDate', label: '创建日期', type: 'input', match: 'fuzzy', placeholder: 'YYYY-MM-DD' },
      { key: 'documentType', label: '文档类型', type: 'select', match: 'exact', options: DOC_TYPE_OPTIONS },
      { key: 'documentCategory', label: '文档分类', type: 'input', match: 'fuzzy' }
    ],
    formSchema: [
      { key: 'projectName', label: '项目名称', type: 'input', required: true, requiredMessage: '请选择项目名称' },
      { key: 'projectCode', label: '项目编号', type: 'input', required: true, requiredMessage: '项目编号不能为空', min: 6, max: 32, pattern: '^[A-Z0-9-]+$', patternMessage: '项目编号格式不正确' },
      { key: 'projectStage', label: '项目阶段', type: 'input', required: true, requiredMessage: '请选择项目阶段', min: 2, max: 30 },
      { key: 'documentType', label: '文档类型', type: 'select', options: DOC_TYPE_OPTIONS, required: true, requiredMessage: '请选择文档类型' },
      { key: 'documentName', label: '文档名称', type: 'input', required: true, requiredMessage: '请输入文档名称', min: 2, max: 120 },
      { key: 'documentCategory', label: '文档分类', type: 'input', required: false, max: 60 },
      { key: 'filePath', label: '文件', type: 'input', required: true, requiredMessage: '请上传文件', min: 5, max: 200 },
      { key: 'createTime', label: '创建时间', type: 'date', required: true, requiredMessage: '请选择创建时间' },
      { key: 'remark', label: '备注', type: 'textarea', required: false, max: 300 },
      { key: 'status', label: '状态', type: 'select', options: STATUS_OPTIONS, required: true, requiredMessage: '请选择状态' }
    ],
    rows: [
      {
        id: 'PD001',
        projectCode: 'RD-PJT-2026-001',
        projectName: '新一代智能配电控制器研发',
        projectStage: '样机验证',
        documentType: '过程文档',
        documentName: '样机测试记录V2',
        documentCategory: '测试记录',
        filePath: 'https://example.com/doc_001.pdf',
        createTime: '2026-04-10',
        remark: '第三轮测试完成',
        status: '启用',
        updatedAt: '2026-04-10'
      }
    ]
  },
  'project-collection-config': {
    title: '项目归集配置',
    prefix: 'PCC',
    toolbar: { ...DEFAULT_TOOLBAR, downloadTemplateLabel: '下载模版' },
    columns: [
      { title: '项目编号', key: 'projectCode', sortable: true, width: 140 },
      { title: '项目名称', key: 'projectName', width: 220 },
      { title: '项目起止日期', key: 'startEndTime', width: 220 },
      { title: '是否计入高新认定归集', key: 'highTechImputation', width: 170 },
      { title: '是否计入加计扣除归集', key: 'additionalDeductionImputation', width: 180 },
      { title: '是否计入IPO监管归集', key: 'ipoRegulatoryImputation', width: 170 },
      { title: '备注', key: 'remark', width: 220 },
      { title: '更新日期', key: 'updatedAt', sortable: true, width: 120 }
    ],
    querySchema: [
      { key: 'projectCode', label: '项目名称', type: 'input', match: 'fuzzy', placeholder: '项目编号/名称' },
      { key: 'highTechImputation', label: '是否计入高新认定归集', type: 'select', match: 'exact', options: BOOLEAN_OPTIONS },
      { key: 'additionalDeductionImputation', label: '是否计入加计扣除归集', type: 'select', match: 'exact', options: BOOLEAN_OPTIONS },
      { key: 'ipoRegulatoryImputation', label: '是否计入IPO监管归集', type: 'select', match: 'exact', options: BOOLEAN_OPTIONS }
    ],
    formSchema: [
      { key: 'projectCode', label: '项目编号', type: 'input', required: true, requiredMessage: '请选择项目', min: 6, max: 32, pattern: '^[A-Z0-9-]+$', patternMessage: '项目编号格式不正确' },
      { key: 'projectName', label: '项目名称', type: 'input', required: true, requiredMessage: '请输入项目名称', min: 2, max: 120 },
      { key: 'startEndTime', label: '项目起止日期', type: 'input', required: true, requiredMessage: '请输入项目起止日期', min: 8, max: 40, pattern: '^\\d{4}-\\d{2}-\\d{2}\\s*至\\s*\\d{4}-\\d{2}-\\d{2}$', patternMessage: '请使用 YYYY-MM-DD 至 YYYY-MM-DD 格式' },
      { key: 'highTechImputation', label: '是否计入高新认定归集', type: 'select', options: BOOLEAN_OPTIONS, required: true, requiredMessage: '请选择是否计入高新认定归集' },
      { key: 'additionalDeductionImputation', label: '是否计入加计扣除归集', type: 'select', options: BOOLEAN_OPTIONS, required: true, requiredMessage: '请选择是否计入加计扣除归集' },
      { key: 'ipoRegulatoryImputation', label: '是否计入IPO监管归集', type: 'select', options: BOOLEAN_OPTIONS, required: true, requiredMessage: '请选择是否计入IPO监管归集' },
      { key: 'remark', label: '备注', type: 'textarea', required: false, max: 300 },
      { key: 'status', label: '状态', type: 'select', options: STATUS_OPTIONS, required: true, requiredMessage: '请选择状态' }
    ],
    rows: [
      {
        id: 'PCC001',
        projectCode: 'RD-PJT-2026-001',
        projectName: '新一代智能配电控制器研发',
        startEndTime: '2026-01-01 至 2026-12-31',
        highTechImputation: '是',
        additionalDeductionImputation: '是',
        ipoRegulatoryImputation: '否',
        remark: '核心项目，纳入重点归集',
        status: '启用',
        updatedAt: '2026-04-05'
      }
    ]
  },
  'project-stage-config': {
    title: '项目阶段配置',
    prefix: 'PSC',
    toolbar: { ...DEFAULT_TOOLBAR },
    columns: [
      { title: '编码', key: 'code', sortable: true, width: 140 },
      { title: '研发属性', key: 'name', width: 200 },
      { title: '是否启用', key: 'isEnabled', width: 120 },
      { title: '阶段明细', key: 'stageItems', width: 420 },
      { title: '更新日期', key: 'updatedAt', sortable: true, width: 120 }
    ],
    querySchema: [
      { key: 'name', label: '研发属性', type: 'input', match: 'fuzzy' }
    ],
    formSchema: [
      { key: 'code', label: '编码', type: 'input', required: true, requiredMessage: '编码不能为空', min: 2, max: 30, pattern: '^[A-Z0-9_-]+$', patternMessage: '编码仅支持大写字母、数字、下划线、短横线' },
      { key: 'name', label: '研发属性', type: 'input', required: true, requiredMessage: '研发属性不能为空', min: 2, max: 30 },
      { key: 'isEnabled', label: '是否启用', type: 'select', options: BOOLEAN_OPTIONS, required: true, requiredMessage: '请选择是否启用' },
      { key: 'stageItems', label: '阶段明细', type: 'textarea', required: true, requiredMessage: '请填写项目阶段明细', min: 4, max: 500, pattern: '^[\\u4e00-\\u9fa5A-Za-z0-9\\-、,，\\s]+$', patternMessage: '阶段明细包含非法字符' },
      { key: 'status', label: '状态', type: 'select', options: STATUS_OPTIONS, required: true, requiredMessage: '请选择状态' }
    ],
    rows: [
      {
        id: 'PSC001',
        code: 'PROD_RD',
        name: '产品研发类',
        isEnabled: '是',
        stageItems: '立项评审、方案设计、样机验证、小批试产、结项验收',
        status: '启用',
        updatedAt: '2026-03-30'
      }
    ]
  },
  'project-stage-change-apply': {
    title: '项目阶段转换申请',
    prefix: 'PSA',
    toolbar: { ...DEFAULT_TOOLBAR },
    columns: [
      { title: '项目编号', key: 'projectCode', sortable: true, width: 150 },
      { title: '项目名称', key: 'projectName', width: 180 },
      { title: '研发属性', key: 'projectStage', width: 120 },
      { title: '当前阶段', key: 'currentStep', width: 120 },
      { title: '下一阶段', key: 'nextStep', width: 120 },
      { title: '项目成果附件', key: 'projectFiles', width: 180 },
      { title: '流程状态', key: 'flowStatus', width: 120 },
      { title: '当前阶段结束时间', key: 'currentStageEndTime', width: 140 },
      { title: '下一阶段开始时间', key: 'nextStageStartTime', width: 140 },
      { title: '更新日期', key: 'updatedAt', sortable: true, width: 120 }
    ],
    querySchema: [
      { key: 'projectCode', label: '项目编号', type: 'input', match: 'fuzzy' },
      { key: 'projectName', label: '项目名称', type: 'input', match: 'fuzzy' },
      { key: 'flowStatus', label: '流程状态', type: 'select', match: 'exact', options: FLOW_OPTIONS }
    ],
    formSchema: [
      { key: 'projectName', label: '项目名称', type: 'input', required: true, requiredMessage: '请选择项目名称' },
      { key: 'projectCode', label: '项目编号', type: 'input', required: true, requiredMessage: '项目编号不能为空', min: 6, max: 32, pattern: '^[A-Z0-9-]+$', patternMessage: '项目编号格式不正确' },
      { key: 'projectStage', label: '研发属性', type: 'input', required: true, requiredMessage: '请选择研发属性', min: 2, max: 30 },
      { key: 'currentStep', label: '当前阶段', type: 'input', required: true, requiredMessage: '请选择当前阶段', min: 2, max: 30 },
      { key: 'nextStep', label: '下一阶段', type: 'input', required: true, requiredMessage: '请选择下一阶段', min: 2, max: 30 },
      { key: 'currentStageEndTime', label: '当前阶段结束日期', type: 'date', required: true, requiredMessage: '请选择当前阶段结束日期' },
      { key: 'nextStageStartTime', label: '下一阶段开始日期', type: 'date', required: true, requiredMessage: '请选择下一阶段开始日期' },
      { key: 'projectFiles', label: '项目成果附件', type: 'input', required: true, requiredMessage: '请上传项目成果附件', min: 5, max: 200 },
      { key: 'flowStatus', label: '流程状态', type: 'select', options: FLOW_OPTIONS, required: true, requiredMessage: '请选择流程状态' },
      { key: 'status', label: '状态', type: 'select', options: STATUS_OPTIONS, required: true, requiredMessage: '请选择状态' }
    ],
    rows: [
      {
        id: 'PSA001',
        projectCode: 'RD-PJT-2026-001',
        projectName: '新一代智能配电控制器研发',
        projectStage: '产品研发类',
        currentStep: '样机验证',
        nextStep: '小批试产',
        projectFiles: 'https://example.com/stage_change_001.zip',
        flowStatus: '审批中',
        currentStageEndTime: '2026-05-20',
        nextStageStartTime: '2026-05-21',
        status: '启用',
        updatedAt: '2026-04-15'
      }
    ]
  },
  'summary-summary': {
    title: '支出分配汇总',
    prefix: 'SUM',
    toolbar: { ...DEFAULT_TOOLBAR },
    columns: [
      { title: '统计期间', key: 'period', sortable: true, width: 120 },
      { title: '项目编号', key: 'projectCode', sortable: true, width: 150 },
      { title: '项目名称', key: 'projectName', width: 220 },
      { title: '支出分配总额(元)', key: 'allocationTotal', sortable: true, width: 150 },
      { title: '人工费用(元)', key: 'laborExpense', width: 130 },
      { title: '直接投入(元)', key: 'directInputExpense', width: 130 },
      { title: '折旧摊销(元)', key: 'depreciationExpense', width: 130 },
      { title: '设计试验费用(元)', key: 'designTestingExpense', width: 150 },
      { title: '委托外部研发费用(元)', key: 'entrustedExpense', width: 170 },
      { title: '其他费用(元)', key: 'otherExpense', width: 130 },
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
      { key: 'allocationTotal', label: '支出分配总额(元)', type: 'number', required: true, requiredMessage: '请输入支出分配总额', minValue: 0, maxValue: 999999999 },
      { key: 'laborExpense', label: '人工费用(元)', type: 'number', required: true, requiredMessage: '请输入人工费用', minValue: 0, maxValue: 999999999 },
      { key: 'directInputExpense', label: '直接投入(元)', type: 'number', required: true, requiredMessage: '请输入直接投入费用', minValue: 0, maxValue: 999999999 },
      { key: 'depreciationExpense', label: '折旧摊销(元)', type: 'number', required: true, requiredMessage: '请输入折旧摊销费用', minValue: 0, maxValue: 999999999 },
      { key: 'designTestingExpense', label: '设计试验费用(元)', type: 'number', required: true, requiredMessage: '请输入设计试验费用', minValue: 0, maxValue: 999999999 },
      { key: 'entrustedExpense', label: '委托外部研发费用(元)', type: 'number', required: true, requiredMessage: '请输入委托外部研发费用', minValue: 0, maxValue: 999999999 },
      { key: 'otherExpense', label: '其他费用(元)', type: 'number', required: true, requiredMessage: '请输入其他费用', minValue: 0, maxValue: 999999999 },
      { key: 'flowStatus', label: '流程状态', type: 'select', options: FLOW_OPTIONS, required: true, requiredMessage: '请选择流程状态' },
      { key: 'status', label: '状态', type: 'select', options: STATUS_OPTIONS, required: true, requiredMessage: '请选择状态' }
    ],
    rows: [
      {
        id: 'SUM001',
        period: '2026-03',
        projectCode: 'RD-PJT-2026-001',
        projectName: '新一代智能配电控制器研发',
        allocationTotal: 485620,
        laborExpense: 198500,
        directInputExpense: 132400,
        depreciationExpense: 45620,
        designTestingExpense: 38900,
        entrustedExpense: 52200,
        otherExpense: 18000,
        flowStatus: '审批通过',
        status: '启用',
        updatedAt: '2026-04-16'
      }
    ]
  },
  'summary-book': {
    title: '支出分配台账',
    prefix: 'SAB',
    toolbar: { ...DEFAULT_TOOLBAR, exportLabel: '导出台账' },
    columns: [
      { title: '台账编号', key: 'ledgerCode', sortable: true, width: 150 },
      { title: '期间', key: 'period', sortable: true, width: 110 },
      { title: '项目编号', key: 'projectCode', sortable: true, width: 150 },
      { title: '项目名称', key: 'projectName', width: 220 },
      { title: '费用类型', key: 'expenseType', width: 130 },
      { title: '原始金额(元)', key: 'originalAmount', sortable: true, width: 130 },
      { title: '分配比例(%)', key: 'allocationRatio', sortable: true, width: 120 },
      { title: '分配金额(元)', key: 'allocationAmount', sortable: true, width: 130 },
      { title: '分配规则', key: 'allocationRule', width: 150 },
      { title: '备注', key: 'remark', width: 180 },
      { title: '流程状态', key: 'flowStatus', width: 120 },
      { title: '更新日期', key: 'updatedAt', sortable: true, width: 120 }
    ],
    querySchema: [
      { key: 'period', label: '期间', type: 'input', match: 'fuzzy', placeholder: 'YYYY-MM' },
      { key: 'ledgerCode', label: '台账编号', type: 'input', match: 'fuzzy' },
      { key: 'projectCode', label: '项目编号', type: 'input', match: 'fuzzy' },
      { key: 'expenseType', label: '费用类型', type: 'select', match: 'exact', options: ['人工费用', '直接投入', '折旧摊销', '设计试验费用', '委托外部研发费用', '其他费用'] },
      { key: 'flowStatus', label: '流程状态', type: 'select', match: 'exact', options: FLOW_OPTIONS }
    ],
    formSchema: [
      { key: 'ledgerCode', label: '台账编号', type: 'input', required: true, requiredMessage: '请输入台账编号', min: 4, max: 32, pattern: '^[A-Z0-9-]+$', patternMessage: '台账编号格式不正确' },
      { key: 'period', label: '期间', type: 'input', required: true, requiredMessage: '请输入期间', pattern: '^\\d{4}-\\d{2}$', patternMessage: '请输入 YYYY-MM 格式' },
      { key: 'projectCode', label: '项目编号', type: 'input', required: true, requiredMessage: '请输入项目编号', min: 6, max: 32, pattern: '^[A-Z0-9-]+$', patternMessage: '项目编号格式不正确' },
      { key: 'projectName', label: '项目名称', type: 'input', required: true, requiredMessage: '请输入项目名称', min: 2, max: 120 },
      { key: 'expenseType', label: '费用类型', type: 'select', options: ['人工费用', '直接投入', '折旧摊销', '设计试验费用', '委托外部研发费用', '其他费用'], required: true, requiredMessage: '请选择费用类型' },
      { key: 'originalAmount', label: '原始金额(元)', type: 'number', required: true, requiredMessage: '请输入原始金额', minValue: 0, maxValue: 999999999 },
      { key: 'allocationRatio', label: '分配比例(%)', type: 'number', required: true, requiredMessage: '请输入分配比例', minValue: 0, maxValue: 100 },
      { key: 'allocationAmount', label: '分配金额(元)', type: 'number', required: true, requiredMessage: '请输入分配金额', minValue: 0, maxValue: 999999999 },
      { key: 'allocationRule', label: '分配规则', type: 'input', required: true, requiredMessage: '请输入分配规则', min: 2, max: 120 },
      { key: 'remark', label: '备注', type: 'textarea', required: false, max: 300 },
      { key: 'flowStatus', label: '流程状态', type: 'select', options: FLOW_OPTIONS, required: true, requiredMessage: '请选择流程状态' },
      { key: 'status', label: '状态', type: 'select', options: STATUS_OPTIONS, required: true, requiredMessage: '请选择状态' }
    ],
    rows: [
      {
        id: 'SAB001',
        ledgerCode: 'AL-2026-0001',
        period: '2026-03',
        projectCode: 'RD-PJT-2026-001',
        projectName: '新一代智能配电控制器研发',
        expenseType: '人工费用',
        originalAmount: 252000,
        allocationRatio: 78.77,
        allocationAmount: 198500,
        allocationRule: '按研发工时比例分配',
        remark: '研发中心-一部',
        flowStatus: '审批通过',
        status: '启用',
        updatedAt: '2026-04-16'
      }
    ]
  }
}

const PROCESS_MODULE_SPECS = [
  { key: 'process-cost-center', title: '成本中心', prefix: 'PCC' },
  { key: 'process-original-attendance-file', title: '原始考勤文件', prefix: 'POA' },
  { key: 'process-attendance', title: '人员考勤', prefix: 'PAT' },
  { key: 'process-personnel-working-hours', title: '人员工时填报', prefix: 'PWH' },
  { key: 'process-fixed-assets-working-hours', title: '固定资产工时', prefix: 'PFH' },
  { key: 'process-intangible-assets-working-hours', title: '无形资产工时', prefix: 'PIH' },
  { key: 'process-leased-assets-working-hours', title: '租赁资产工时', prefix: 'PLH' },
  { key: 'process-personnel-input-working-form', title: '人员投入工时分配表', prefix: 'PPI' },
  { key: 'process-assets-input-working-form', title: '资产投入工时分配表', prefix: 'PAI' },
  { key: 'process-doc-appraisal-report', title: '项目立项报告', prefix: 'PDA' },
  { key: 'process-doc-changes-document', title: '项目变更书', prefix: 'PDC' },
  { key: 'process-doc-final-acceptance-report', title: '项目验收报告', prefix: 'PDF' },
  { key: 'process-doc-meeting-record', title: '项目会议纪要', prefix: 'PDM' },
  { key: 'process-doc-other-report', title: '其他过程资料', prefix: 'PDO' },
  { key: 'process-doc-test-report', title: '测试报告', prefix: 'PDT' },
  { key: 'process-files', title: '研发过程资料归档', prefix: 'PFL' },
  { key: 'process-export', title: '研发过程导出', prefix: 'PEX' },
  { key: 'process-research-export', title: '研发过程汇总导出', prefix: 'PRX' }
]

function createProcessModule(spec) {
  return {
    title: spec.title,
    prefix: spec.prefix,
    toolbar: { ...DEFAULT_TOOLBAR },
    columns: [
      { title: '记录编号', key: 'recordCode', sortable: true, width: 170 },
      { title: '记录名称', key: 'recordName', width: 260 },
      { title: '关联项目编号', key: 'projectCode', width: 170 },
      { title: '关联项目名称', key: 'projectName', width: 220 },
      { title: '归属期间', key: 'period', sortable: true, width: 120 },
      { title: '填报人', key: 'owner', width: 120 },
      { title: '流程状态', key: 'flowStatus', width: 120 },
      { title: '备注', key: 'remark', width: 220 },
      { title: '更新日期', key: 'updatedAt', sortable: true, width: 120 }
    ],
    querySchema: [
      { key: 'recordCode', label: '记录编号', type: 'input', match: 'fuzzy', placeholder: '请输入记录编号' },
      { key: 'recordName', label: '记录名称', type: 'input', match: 'fuzzy', placeholder: '请输入记录名称' },
      { key: 'projectCode', label: '关联项目编号', type: 'input', match: 'fuzzy', placeholder: '请输入项目编号' },
      { key: 'period', label: '归属期间', type: 'input', match: 'fuzzy', placeholder: 'YYYY-MM' },
      { key: 'flowStatus', label: '流程状态', type: 'select', match: 'exact', options: FLOW_OPTIONS }
    ],
    formSchema: [
      { key: 'recordCode', label: '记录编号', type: 'input', required: true, requiredMessage: '请输入记录编号', min: 4, max: 32, pattern: '^[A-Z0-9-]+$', patternMessage: '记录编号仅支持大写字母、数字、短横线' },
      { key: 'recordName', label: '记录名称', type: 'input', required: true, requiredMessage: '请输入记录名称', min: 2, max: 120 },
      { key: 'projectCode', label: '关联项目编号', type: 'input', required: true, requiredMessage: '请输入项目编号', min: 6, max: 32, pattern: '^[A-Z0-9-]+$', patternMessage: '项目编号格式不正确' },
      { key: 'projectName', label: '关联项目名称', type: 'input', required: true, requiredMessage: '请输入项目名称', min: 2, max: 120 },
      { key: 'period', label: '归属期间', type: 'input', required: true, requiredMessage: '请输入归属期间', pattern: '^\\d{4}-\\d{2}$', patternMessage: '请输入 YYYY-MM 格式' },
      { key: 'owner', label: '填报人', type: 'input', required: true, requiredMessage: '请输入填报人', min: 2, max: 30 },
      { key: 'flowStatus', label: '流程状态', type: 'select', options: FLOW_OPTIONS, required: true, requiredMessage: '请选择流程状态' },
      { key: 'remark', label: '备注', type: 'textarea', required: false, max: 300 },
      { key: 'status', label: '状态', type: 'select', options: STATUS_OPTIONS, required: true, requiredMessage: '请选择状态' }
    ],
    rows: [
      {
        id: `${spec.prefix}001`,
        recordCode: `${spec.prefix}-2026-001`,
        recordName: `${spec.title}示例记录`,
        projectCode: 'RD-PJT-2026-001',
        projectName: '新一代智能配电控制器研发',
        period: '2026-03',
        owner: '易君召',
        flowStatus: '审批通过',
        remark: '系统初始化示例数据',
        status: '启用',
        updatedAt: '2026-04-17'
      }
    ]
  }
}

PROCESS_MODULE_SPECS.forEach((spec) => {
  MODULES[spec.key] = createProcessModule(spec)
})

const FLOW_MODULE_SPECS = [
  { key: 'flow-process-model', title: '流程模型', prefix: 'FLM' },
  { key: 'flow-business-form', title: '业务表单', prefix: 'FLF' },
  { key: 'flow-process-apply', title: '流程申请', prefix: 'FLA' }
]

function createFlowModule(spec) {
  return {
    title: spec.title,
    prefix: spec.prefix,
    toolbar: { ...DEFAULT_TOOLBAR, exportLabel: '导出模板' },
    columns: [
      { title: '流程编号', key: 'flowCode', sortable: true, width: 170 },
      { title: '流程名称', key: 'flowName', width: 220 },
      { title: '流程分类', key: 'flowCategory', width: 120 },
      { title: '流程版本', key: 'flowVersion', width: 110 },
      { title: '关联业务类型', key: 'businessType', width: 170 },
      { title: '申请人', key: 'applicant', width: 120 },
      { title: '申请日期', key: 'applyDate', sortable: true, width: 120 },
      { title: '流程状态', key: 'flowStatus', width: 120 },
      { title: '备注', key: 'remark', width: 220 },
      { title: '更新日期', key: 'updatedAt', sortable: true, width: 120 }
    ],
    querySchema: [
      { key: 'flowCode', label: '流程编号', type: 'input', match: 'fuzzy', placeholder: '请输入流程编号' },
      { key: 'flowName', label: '流程名称', type: 'input', match: 'fuzzy', placeholder: '请输入流程名称' },
      { key: 'flowCategory', label: '流程分类', type: 'input', match: 'fuzzy', placeholder: '请输入流程分类' },
      { key: 'businessType', label: '业务类型', type: 'input', match: 'fuzzy', placeholder: '请输入业务类型' },
      { key: 'flowStatus', label: '流程状态', type: 'select', match: 'exact', options: FLOW_OPTIONS }
    ],
    formSchema: [
      { key: 'flowCode', label: '流程编号', type: 'input', required: true, requiredMessage: '请输入流程编号', min: 4, max: 32, pattern: '^[A-Z0-9-]+$', patternMessage: '流程编号仅支持大写字母、数字、短横线' },
      { key: 'flowName', label: '流程名称', type: 'input', required: true, requiredMessage: '请输入流程名称', min: 2, max: 120 },
      { key: 'flowCategory', label: '流程分类', type: 'input', required: true, requiredMessage: '请输入流程分类', min: 2, max: 60 },
      { key: 'flowVersion', label: '流程版本', type: 'input', required: true, requiredMessage: '请输入流程版本', pattern: '^V\\d+(\\.\\d+)?$', patternMessage: '请输入类似 V1 或 V1.1 的版本号' },
      { key: 'businessType', label: '关联业务类型', type: 'input', required: true, requiredMessage: '请输入业务类型', min: 2, max: 80 },
      { key: 'applicant', label: '申请人', type: 'input', required: true, requiredMessage: '请输入申请人', min: 2, max: 30 },
      { key: 'applyDate', label: '申请日期', type: 'date', required: true, requiredMessage: '请选择申请日期' },
      { key: 'flowStatus', label: '流程状态', type: 'select', options: FLOW_OPTIONS, required: true, requiredMessage: '请选择流程状态' },
      { key: 'remark', label: '备注', type: 'textarea', required: false, max: 300 },
      { key: 'status', label: '状态', type: 'select', options: STATUS_OPTIONS, required: true, requiredMessage: '请选择状态' }
    ],
    rows: [
      {
        id: `${spec.prefix}001`,
        flowCode: `${spec.prefix}-2026-001`,
        flowName: `${spec.title}示例流程`,
        flowCategory: spec.title.includes('模型') ? '模型管理' : spec.title.includes('表单') ? '表单管理' : '流程申请',
        flowVersion: 'V1.0',
        businessType: spec.title,
        applicant: '易君召',
        applyDate: '2026-04-17',
        flowStatus: '审批通过',
        remark: '系统初始化示例数据',
        status: '启用',
        updatedAt: '2026-04-17'
      }
    ]
  }
}

FLOW_MODULE_SPECS.forEach((spec) => {
  MODULES[spec.key] = createFlowModule(spec)
})

const EXPENSE_MODULE_SPECS = [
  { key: 'expense-personnellabor', title: '人员人工费用', prefix: 'EPL' },
  { key: 'expense-directinvestment', title: '直接投入费用', prefix: 'EDI' },
  { key: 'expense-depreciationandspread', title: '折旧与长期待摊费用', prefix: 'EDS' },
  { key: 'expense-intangible-assets-share', title: '无形资产摊销费用', prefix: 'EIA' },
  { key: 'expense-news-product-design', title: '新产品设计费等', prefix: 'ENP' },
  { key: 'expense-equipment-adjustment', title: '装备调试费用', prefix: 'EEA' },
  { key: 'expense-other-expense', title: '其他相关费用', prefix: 'EOE' },
  { key: 'expense-entrusted-research', title: '委托研发费用', prefix: 'EER' },
  { key: 'expense-offsetting-research', title: '应冲减研发费用', prefix: 'EOR' },
  { key: 'expense-audit-adjustments', title: '审计调整研发费用', prefix: 'EAA' },
  { key: 'expense-accounting-vouchers-import', title: '会计凭证导入', prefix: 'EAV' },
  { key: 'expense-develop-and-expenses-file', title: '研发材料报废单及盘点表', prefix: 'EDF' }
]

const STATEMENT_MODULE_SPECS = [
  { key: 'statements-research-expenses', title: '研发支出多口径报表', prefix: 'SRE' },
  { key: 'statements-keep-information', title: '加计扣除留存备查资料', prefix: 'SKI' },
  { key: 'statements-research-deducted', title: '加计扣除相关报表', prefix: 'SRD' },
  { key: 'statements-high-tech-reports', title: '高新技术企业相关报表', prefix: 'SHT' },
  { key: 'statements-statistics-reports', title: '研发活动统计报表', prefix: 'SST' }
]

const TASK_MODULE_SPECS = [
  { key: 'task-allprocess', title: '所有任务', prefix: 'TAP' },
  { key: 'task-myprocess', title: '我的任务', prefix: 'TMP' },
  { key: 'task-todo', title: '待办任务', prefix: 'TTD' },
  { key: 'task-finished', title: '已办任务', prefix: 'TFN' },
  { key: 'task-flow-cc', title: '抄送我的', prefix: 'TCC' },
  { key: 'task-my-cc', title: '我的抄送', prefix: 'TMC' }
]

const SYSTEM_MODULE_SPECS = [
  {
    key: 'system-depart',
    title: '部门管理',
    prefix: 'SDP',
    columns: [
      { title: '部门编码', key: 'departCode', sortable: true, width: 150 },
      { title: '部门名称', key: 'departName', width: 170 },
      { title: '上级部门', key: 'parentDepart', width: 150 },
      { title: '负责人', key: 'manager', width: 120 },
      { title: '联系电话', key: 'phone', width: 140 },
      { title: '在编人数', key: 'memberCount', sortable: true, width: 100 },
      { title: '备注', key: 'remark', width: 220 },
      { title: '更新日期', key: 'updatedAt', sortable: true, width: 120 }
    ],
    querySchema: [
      { key: 'departCode', label: '部门编码', type: 'input', match: 'fuzzy', placeholder: '请输入部门编码' },
      { key: 'departName', label: '部门名称', type: 'input', match: 'fuzzy', placeholder: '请输入部门名称' },
      { key: 'manager', label: '负责人', type: 'input', match: 'fuzzy', placeholder: '请输入负责人' },
      { key: 'status', label: '状态', type: 'select', match: 'exact', options: STATUS_OPTIONS }
    ],
    formSchema: [
      { key: 'departCode', label: '部门编码', type: 'input', required: true, requiredMessage: '请输入部门编码', min: 2, max: 32, pattern: '^[A-Z0-9-]+$', patternMessage: '部门编码仅支持大写字母、数字、短横线' },
      { key: 'departName', label: '部门名称', type: 'input', required: true, requiredMessage: '请输入部门名称', min: 2, max: 60 },
      { key: 'parentDepart', label: '上级部门', type: 'input', required: true, requiredMessage: '请输入上级部门', min: 2, max: 60 },
      { key: 'manager', label: '负责人', type: 'input', required: true, requiredMessage: '请输入负责人', min: 2, max: 30 },
      { key: 'phone', label: '联系电话', type: 'input', required: true, requiredMessage: '请输入联系电话', pattern: '^1\\d{10}$', patternMessage: '请输入11位手机号' },
      { key: 'memberCount', label: '在编人数', type: 'number', required: true, requiredMessage: '请输入在编人数', minValue: 1, maxValue: 9999 },
      { key: 'remark', label: '备注', type: 'textarea', required: false, max: 300 },
      { key: 'status', label: '状态', type: 'select', options: STATUS_OPTIONS, required: true, requiredMessage: '请选择状态' }
    ],
    row: {
      id: 'SDP001',
      departCode: 'RD-ORG-001',
      departName: '研发管理部',
      parentDepart: '总部',
      manager: '易君召',
      phone: '13795362420',
      memberCount: 26,
      remark: '负责研发项目统筹、预算与过程管理',
      status: '启用',
      updatedAt: '2026-04-18'
    }
  },
  {
    key: 'system-position',
    title: '职务管理',
    prefix: 'SPM',
    columns: [
      { title: '职务编码', key: 'positionCode', sortable: true, width: 150 },
      { title: '职务名称', key: 'positionName', width: 170 },
      { title: '所属部门', key: 'departName', width: 170 },
      { title: '职级', key: 'rankLevel', width: 120 },
      { title: '编制数', key: 'quota', sortable: true, width: 100 },
      { title: '负责人', key: 'owner', width: 120 },
      { title: '流程状态', key: 'flowStatus', width: 120 },
      { title: '备注', key: 'remark', width: 220 },
      { title: '更新日期', key: 'updatedAt', sortable: true, width: 120 }
    ],
    querySchema: [
      { key: 'positionCode', label: '职务编码', type: 'input', match: 'fuzzy', placeholder: '请输入职务编码' },
      { key: 'positionName', label: '职务名称', type: 'input', match: 'fuzzy', placeholder: '请输入职务名称' },
      { key: 'departName', label: '所属部门', type: 'input', match: 'fuzzy', placeholder: '请输入所属部门' },
      { key: 'flowStatus', label: '流程状态', type: 'select', match: 'exact', options: FLOW_OPTIONS }
    ],
    formSchema: [
      { key: 'positionCode', label: '职务编码', type: 'input', required: true, requiredMessage: '请输入职务编码', min: 2, max: 32, pattern: '^[A-Z0-9-]+$', patternMessage: '职务编码仅支持大写字母、数字、短横线' },
      { key: 'positionName', label: '职务名称', type: 'input', required: true, requiredMessage: '请输入职务名称', min: 2, max: 60 },
      { key: 'departName', label: '所属部门', type: 'input', required: true, requiredMessage: '请输入所属部门', min: 2, max: 60 },
      { key: 'rankLevel', label: '职级', type: 'select', options: ['专员', '主管', '经理', '总监'], required: true, requiredMessage: '请选择职级' },
      { key: 'quota', label: '编制数', type: 'number', required: true, requiredMessage: '请输入编制数', minValue: 1, maxValue: 9999 },
      { key: 'owner', label: '负责人', type: 'input', required: true, requiredMessage: '请输入负责人', min: 2, max: 30 },
      { key: 'flowStatus', label: '流程状态', type: 'select', options: FLOW_OPTIONS, required: true, requiredMessage: '请选择流程状态' },
      { key: 'remark', label: '备注', type: 'textarea', required: false, max: 300 },
      { key: 'status', label: '状态', type: 'select', options: STATUS_OPTIONS, required: true, requiredMessage: '请选择状态' }
    ],
    row: {
      id: 'SPM001',
      positionCode: 'POST-RD-001',
      positionName: '研发项目经理',
      departName: '研发管理部',
      rankLevel: '经理',
      quota: 6,
      owner: '易君召',
      flowStatus: '审批通过',
      remark: '负责项目计划、里程碑管理及跨部门协作',
      status: '启用',
      updatedAt: '2026-04-18'
    }
  }
]

const CONFIG_MODULE_SPECS = [
  {
    key: 'config-electricity-price-mode',
    title: '电费归集模式配置',
    prefix: 'CEM',
    columns: [
      { title: '模式编号', key: 'modeCode', sortable: true, width: 140 },
      { title: '模式名称', key: 'modeName', width: 170 },
      { title: '电压等级', key: 'voltageLevel', width: 120 },
      { title: '归集规则', key: 'collectionRule', width: 160 },
      { title: '单价(元/度)', key: 'unitPrice', sortable: true, width: 120 },
      { title: '税率(%)', key: 'taxRate', sortable: true, width: 100 },
      { title: '生效日期', key: 'effectiveDate', sortable: true, width: 120 },
      { title: '填报人', key: 'owner', width: 120 },
      { title: '流程状态', key: 'flowStatus', width: 120 },
      { title: '更新日期', key: 'updatedAt', sortable: true, width: 120 }
    ],
    querySchema: [
      { key: 'modeCode', label: '模式编号', type: 'input', match: 'fuzzy', placeholder: '请输入模式编号' },
      { key: 'modeName', label: '模式名称', type: 'input', match: 'fuzzy', placeholder: '请输入模式名称' },
      { key: 'voltageLevel', label: '电压等级', type: 'select', match: 'exact', options: ['高压', '中压', '低压'] },
      { key: 'effectiveDate', label: '生效日期', type: 'input', match: 'fuzzy', placeholder: 'YYYY-MM-DD' }
    ],
    formSchema: [
      { key: 'modeCode', label: '模式编号', type: 'input', required: true, requiredMessage: '请输入模式编号', min: 4, max: 32, pattern: '^[A-Z0-9-]+$', patternMessage: '模式编号仅支持大写字母、数字、短横线' },
      { key: 'modeName', label: '模式名称', type: 'input', required: true, requiredMessage: '请输入模式名称', min: 2, max: 60 },
      { key: 'voltageLevel', label: '电压等级', type: 'select', options: ['高压', '中压', '低压'], required: true, requiredMessage: '请选择电压等级' },
      { key: 'collectionRule', label: '归集规则', type: 'select', options: ['按项目电表归集', '按面积比例归集', '按工时比例归集'], required: true, requiredMessage: '请选择归集规则' },
      { key: 'unitPrice', label: '单价(元/度)', type: 'number', required: true, requiredMessage: '请输入电费单价', minValue: 0, maxValue: 9999 },
      { key: 'taxRate', label: '税率(%)', type: 'number', required: true, requiredMessage: '请输入税率', minValue: 0, maxValue: 100 },
      { key: 'effectiveDate', label: '生效日期', type: 'date', required: true, requiredMessage: '请选择生效日期' },
      { key: 'owner', label: '填报人', type: 'input', required: true, requiredMessage: '请输入填报人', min: 2, max: 30 },
      { key: 'flowStatus', label: '流程状态', type: 'select', options: FLOW_OPTIONS, required: true, requiredMessage: '请选择流程状态' },
      { key: 'status', label: '状态', type: 'select', options: STATUS_OPTIONS, required: true, requiredMessage: '请选择状态' }
    ],
    row: {
      id: 'CEM001',
      modeCode: 'ELEC-MODE-001',
      modeName: '研发线体电费归集模式',
      voltageLevel: '中压',
      collectionRule: '按工时比例归集',
      unitPrice: 0.86,
      taxRate: 13,
      effectiveDate: '2026-01-01',
      owner: '易君召',
      flowStatus: '审批通过',
      status: '启用',
      updatedAt: '2026-04-17'
    }
  },
  {
    key: 'config-project-stage',
    title: '项目阶段配置',
    prefix: 'CPS',
    columns: [
      { title: '阶段编号', key: 'stageCode', sortable: true, width: 130 },
      { title: '阶段名称', key: 'stageName', width: 160 },
      { title: '阶段类型', key: 'stageType', width: 130 },
      { title: '开始节点', key: 'startNode', width: 140 },
      { title: '结束节点', key: 'endNode', width: 140 },
      { title: '是否必经', key: 'requiredPass', width: 100 },
      { title: '填报人', key: 'owner', width: 120 },
      { title: '流程状态', key: 'flowStatus', width: 120 },
      { title: '更新日期', key: 'updatedAt', sortable: true, width: 120 }
    ],
    querySchema: [
      { key: 'stageCode', label: '阶段编号', type: 'input', match: 'fuzzy', placeholder: '请输入阶段编号' },
      { key: 'stageName', label: '阶段名称', type: 'input', match: 'fuzzy', placeholder: '请输入阶段名称' },
      { key: 'stageType', label: '阶段类型', type: 'select', match: 'exact', options: ['立项', '研发', '测试', '验收'] }
    ],
    formSchema: [
      { key: 'stageCode', label: '阶段编号', type: 'input', required: true, requiredMessage: '请输入阶段编号', min: 4, max: 32, pattern: '^[A-Z0-9-]+$', patternMessage: '阶段编号仅支持大写字母、数字、短横线' },
      { key: 'stageName', label: '阶段名称', type: 'input', required: true, requiredMessage: '请输入阶段名称', min: 2, max: 60 },
      { key: 'stageType', label: '阶段类型', type: 'select', options: ['立项', '研发', '测试', '验收'], required: true, requiredMessage: '请选择阶段类型' },
      { key: 'startNode', label: '开始节点', type: 'input', required: true, requiredMessage: '请输入开始节点', min: 2, max: 60 },
      { key: 'endNode', label: '结束节点', type: 'input', required: true, requiredMessage: '请输入结束节点', min: 2, max: 60 },
      { key: 'requiredPass', label: '是否必经', type: 'select', options: BOOLEAN_OPTIONS, required: true, requiredMessage: '请选择是否必经' },
      { key: 'owner', label: '填报人', type: 'input', required: true, requiredMessage: '请输入填报人', min: 2, max: 30 },
      { key: 'flowStatus', label: '流程状态', type: 'select', options: FLOW_OPTIONS, required: true, requiredMessage: '请选择流程状态' },
      { key: 'status', label: '状态', type: 'select', options: STATUS_OPTIONS, required: true, requiredMessage: '请选择状态' }
    ],
    row: {
      id: 'CPS001',
      stageCode: 'STAGE-001',
      stageName: '方案设计',
      stageType: '研发',
      startNode: '需求评审',
      endNode: '方案评审',
      requiredPass: '是',
      owner: '易君召',
      flowStatus: '审批通过',
      status: '启用',
      updatedAt: '2026-04-17'
    }
  },
  {
    key: 'config-project-collection',
    title: '项目归集配置',
    prefix: 'CPC',
    columns: [
      { title: '归集编号', key: 'collectionCode', sortable: true, width: 140 },
      { title: '归集名称', key: 'collectionName', width: 180 },
      { title: '费用类别', key: 'expenseCategory', width: 130 },
      { title: '分摊规则', key: 'allocationRule', width: 170 },
      { title: '会计科目', key: 'accountCode', width: 140 },
      { title: '是否资本化', key: 'capitalized', width: 100 },
      { title: '生效日期', key: 'effectiveDate', sortable: true, width: 120 },
      { title: '填报人', key: 'owner', width: 120 },
      { title: '流程状态', key: 'flowStatus', width: 120 },
      { title: '更新日期', key: 'updatedAt', sortable: true, width: 120 }
    ],
    querySchema: [
      { key: 'collectionCode', label: '归集编号', type: 'input', match: 'fuzzy', placeholder: '请输入归集编号' },
      { key: 'collectionName', label: '归集名称', type: 'input', match: 'fuzzy', placeholder: '请输入归集名称' },
      { key: 'expenseCategory', label: '费用类别', type: 'select', match: 'exact', options: ['人工', '材料', '折旧', '设计'] }
    ],
    formSchema: [
      { key: 'collectionCode', label: '归集编号', type: 'input', required: true, requiredMessage: '请输入归集编号', min: 4, max: 32, pattern: '^[A-Z0-9-]+$', patternMessage: '归集编号仅支持大写字母、数字、短横线' },
      { key: 'collectionName', label: '归集名称', type: 'input', required: true, requiredMessage: '请输入归集名称', min: 2, max: 80 },
      { key: 'expenseCategory', label: '费用类别', type: 'select', options: ['人工', '材料', '折旧', '设计'], required: true, requiredMessage: '请选择费用类别' },
      { key: 'allocationRule', label: '分摊规则', type: 'select', options: ['按项目工时', '按项目人数', '按预算比例'], required: true, requiredMessage: '请选择分摊规则' },
      { key: 'accountCode', label: '会计科目', type: 'input', required: true, requiredMessage: '请输入会计科目', min: 4, max: 32, pattern: '^[0-9-]+$', patternMessage: '会计科目格式不正确' },
      { key: 'capitalized', label: '是否资本化', type: 'select', options: BOOLEAN_OPTIONS, required: true, requiredMessage: '请选择是否资本化' },
      { key: 'effectiveDate', label: '生效日期', type: 'date', required: true, requiredMessage: '请选择生效日期' },
      { key: 'owner', label: '填报人', type: 'input', required: true, requiredMessage: '请输入填报人', min: 2, max: 30 },
      { key: 'flowStatus', label: '流程状态', type: 'select', options: FLOW_OPTIONS, required: true, requiredMessage: '请选择流程状态' },
      { key: 'status', label: '状态', type: 'select', options: STATUS_OPTIONS, required: true, requiredMessage: '请选择状态' }
    ],
    row: {
      id: 'CPC001',
      collectionCode: 'COLL-001',
      collectionName: '研发材料费归集',
      expenseCategory: '材料',
      allocationRule: '按项目工时',
      accountCode: '6602-04',
      capitalized: '否',
      effectiveDate: '2026-01-01',
      owner: '易君召',
      flowStatus: '审批通过',
      status: '启用',
      updatedAt: '2026-04-17'
    }
  },
  {
    key: 'config-expense-allocation',
    title: '支出分配配置',
    prefix: 'CEA',
    columns: [
      { title: '分配编号', key: 'allocationCode', sortable: true, width: 140 },
      { title: '分配名称', key: 'allocationName', width: 180 },
      { title: '分配维度', key: 'dimension', width: 130 },
      { title: '分配规则', key: 'ruleName', width: 170 },
      { title: '四舍五入', key: 'roundingPolicy', width: 110 },
      { title: '允许手工调整', key: 'manualAdjust', width: 120 },
      { title: '生效日期', key: 'effectiveDate', sortable: true, width: 120 },
      { title: '填报人', key: 'owner', width: 120 },
      { title: '流程状态', key: 'flowStatus', width: 120 },
      { title: '更新日期', key: 'updatedAt', sortable: true, width: 120 }
    ],
    querySchema: [
      { key: 'allocationCode', label: '分配编号', type: 'input', match: 'fuzzy', placeholder: '请输入分配编号' },
      { key: 'allocationName', label: '分配名称', type: 'input', match: 'fuzzy', placeholder: '请输入分配名称' },
      { key: 'dimension', label: '分配维度', type: 'select', match: 'exact', options: ['项目', '部门', '费用类型'] }
    ],
    formSchema: [
      { key: 'allocationCode', label: '分配编号', type: 'input', required: true, requiredMessage: '请输入分配编号', min: 4, max: 32, pattern: '^[A-Z0-9-]+$', patternMessage: '分配编号仅支持大写字母、数字、短横线' },
      { key: 'allocationName', label: '分配名称', type: 'input', required: true, requiredMessage: '请输入分配名称', min: 2, max: 80 },
      { key: 'dimension', label: '分配维度', type: 'select', options: ['项目', '部门', '费用类型'], required: true, requiredMessage: '请选择分配维度' },
      { key: 'ruleName', label: '分配规则', type: 'select', options: ['按工时占比', '按预算占比', '按实际发生额'], required: true, requiredMessage: '请选择分配规则' },
      { key: 'roundingPolicy', label: '四舍五入', type: 'select', options: ['保留2位小数', '保留4位小数'], required: true, requiredMessage: '请选择四舍五入策略' },
      { key: 'manualAdjust', label: '允许手工调整', type: 'select', options: BOOLEAN_OPTIONS, required: true, requiredMessage: '请选择是否允许手工调整' },
      { key: 'effectiveDate', label: '生效日期', type: 'date', required: true, requiredMessage: '请选择生效日期' },
      { key: 'owner', label: '填报人', type: 'input', required: true, requiredMessage: '请输入填报人', min: 2, max: 30 },
      { key: 'flowStatus', label: '流程状态', type: 'select', options: FLOW_OPTIONS, required: true, requiredMessage: '请选择流程状态' },
      { key: 'status', label: '状态', type: 'select', options: STATUS_OPTIONS, required: true, requiredMessage: '请选择状态' }
    ],
    row: {
      id: 'CEA001',
      allocationCode: 'ALLOC-001',
      allocationName: '研发支出月度分配规则',
      dimension: '项目',
      ruleName: '按工时占比',
      roundingPolicy: '保留2位小数',
      manualAdjust: '是',
      effectiveDate: '2026-01-01',
      owner: '易君召',
      flowStatus: '审批通过',
      status: '启用',
      updatedAt: '2026-04-17'
    }
  },
  {
    key: 'config-working-hours-input',
    title: '工时录入配置',
    prefix: 'CWH',
    columns: [
      { title: '配置编号', key: 'configCode', sortable: true, width: 140 },
      { title: '配置名称', key: 'configName', width: 180 },
      { title: '人员类型', key: 'personnelType', width: 120 },
      { title: '最小工时', key: 'minHours', sortable: true, width: 100 },
      { title: '最大工时', key: 'maxHours', sortable: true, width: 100 },
      { title: '填报截止日', key: 'deadlineDay', width: 110 },
      { title: '审批要求', key: 'approvalRequired', width: 100 },
      { title: '填报人', key: 'owner', width: 120 },
      { title: '流程状态', key: 'flowStatus', width: 120 },
      { title: '更新日期', key: 'updatedAt', sortable: true, width: 120 }
    ],
    querySchema: [
      { key: 'configCode', label: '配置编号', type: 'input', match: 'fuzzy', placeholder: '请输入配置编号' },
      { key: 'configName', label: '配置名称', type: 'input', match: 'fuzzy', placeholder: '请输入配置名称' },
      { key: 'personnelType', label: '人员类型', type: 'select', match: 'exact', options: ['研发人员', '管理人员', '测试人员'] }
    ],
    formSchema: [
      { key: 'configCode', label: '配置编号', type: 'input', required: true, requiredMessage: '请输入配置编号', min: 4, max: 32, pattern: '^[A-Z0-9-]+$', patternMessage: '配置编号仅支持大写字母、数字、短横线' },
      { key: 'configName', label: '配置名称', type: 'input', required: true, requiredMessage: '请输入配置名称', min: 2, max: 80 },
      { key: 'personnelType', label: '人员类型', type: 'select', options: ['研发人员', '管理人员', '测试人员'], required: true, requiredMessage: '请选择人员类型' },
      { key: 'minHours', label: '最小工时', type: 'number', required: true, requiredMessage: '请输入最小工时', minValue: 0, maxValue: 744 },
      { key: 'maxHours', label: '最大工时', type: 'number', required: true, requiredMessage: '请输入最大工时', minValue: 0, maxValue: 744 },
      { key: 'deadlineDay', label: '填报截止日', type: 'number', required: true, requiredMessage: '请输入填报截止日', minValue: 1, maxValue: 31 },
      { key: 'approvalRequired', label: '审批要求', type: 'select', options: BOOLEAN_OPTIONS, required: true, requiredMessage: '请选择审批要求' },
      { key: 'owner', label: '填报人', type: 'input', required: true, requiredMessage: '请输入填报人', min: 2, max: 30 },
      { key: 'flowStatus', label: '流程状态', type: 'select', options: FLOW_OPTIONS, required: true, requiredMessage: '请选择流程状态' },
      { key: 'status', label: '状态', type: 'select', options: STATUS_OPTIONS, required: true, requiredMessage: '请选择状态' }
    ],
    row: {
      id: 'CWH001',
      configCode: 'WH-INPUT-001',
      configName: '研发人员月度工时填报策略',
      personnelType: '研发人员',
      minHours: 0,
      maxHours: 186,
      deadlineDay: 5,
      approvalRequired: '是',
      owner: '易君召',
      flowStatus: '审批通过',
      status: '启用',
      updatedAt: '2026-04-17'
    }
  },
  {
    key: 'config-workflow',
    title: '流程配置',
    prefix: 'CWF',
    columns: [
      { title: '流程编号', key: 'workflowCode', sortable: true, width: 140 },
      { title: '流程名称', key: 'workflowName', width: 200 },
      { title: '业务类型', key: 'bizType', width: 130 },
      { title: '发起角色', key: 'startRole', width: 120 },
      { title: '审批角色', key: 'approveRole', width: 120 },
      { title: '超时(小时)', key: 'timeoutHours', sortable: true, width: 110 },
      { title: '启用版本', key: 'versionNo', width: 100 },
      { title: '填报人', key: 'owner', width: 120 },
      { title: '流程状态', key: 'flowStatus', width: 120 },
      { title: '更新日期', key: 'updatedAt', sortable: true, width: 120 }
    ],
    querySchema: [
      { key: 'workflowCode', label: '流程编号', type: 'input', match: 'fuzzy', placeholder: '请输入流程编号' },
      { key: 'workflowName', label: '流程名称', type: 'input', match: 'fuzzy', placeholder: '请输入流程名称' },
      { key: 'bizType', label: '业务类型', type: 'select', match: 'exact', options: ['项目管理', '费用归集', '工时填报', '报表发布'] }
    ],
    formSchema: [
      { key: 'workflowCode', label: '流程编号', type: 'input', required: true, requiredMessage: '请输入流程编号', min: 4, max: 32, pattern: '^[A-Z0-9-]+$', patternMessage: '流程编号仅支持大写字母、数字、短横线' },
      { key: 'workflowName', label: '流程名称', type: 'input', required: true, requiredMessage: '请输入流程名称', min: 2, max: 80 },
      { key: 'bizType', label: '业务类型', type: 'select', options: ['项目管理', '费用归集', '工时填报', '报表发布'], required: true, requiredMessage: '请选择业务类型' },
      { key: 'startRole', label: '发起角色', type: 'input', required: true, requiredMessage: '请输入发起角色', min: 2, max: 40 },
      { key: 'approveRole', label: '审批角色', type: 'input', required: true, requiredMessage: '请输入审批角色', min: 2, max: 40 },
      { key: 'timeoutHours', label: '超时(小时)', type: 'number', required: true, requiredMessage: '请输入超时时间', minValue: 1, maxValue: 720 },
      { key: 'versionNo', label: '启用版本', type: 'input', required: true, requiredMessage: '请输入版本号', min: 2, max: 20 },
      { key: 'owner', label: '填报人', type: 'input', required: true, requiredMessage: '请输入填报人', min: 2, max: 30 },
      { key: 'flowStatus', label: '流程状态', type: 'select', options: FLOW_OPTIONS, required: true, requiredMessage: '请选择流程状态' },
      { key: 'status', label: '状态', type: 'select', options: STATUS_OPTIONS, required: true, requiredMessage: '请选择状态' }
    ],
    row: {
      id: 'CWF001',
      workflowCode: 'WF-CONFIG-001',
      workflowName: '研发费用归集审批流程',
      bizType: '费用归集',
      startRole: '项目会计',
      approveRole: '财务经理',
      timeoutHours: 48,
      versionNo: 'v1.0.0',
      owner: '易君召',
      flowStatus: '审批通过',
      status: '启用',
      updatedAt: '2026-04-17'
    }
  }
]

function createExpenseModule(spec) {
  return {
    title: spec.title,
    prefix: spec.prefix,
    toolbar: { ...DEFAULT_TOOLBAR },
    columns: [
      { title: '单据编号', key: 'billCode', sortable: true, width: 170 },
      { title: '费用归属月份', key: 'period', sortable: true, width: 120 },
      { title: '项目编号', key: 'projectCode', width: 160 },
      { title: '项目名称', key: 'projectName', width: 220 },
      { title: '费用类型', key: 'expenseType', width: 140 },
      { title: '金额(元)', key: 'expenseAmount', sortable: true, width: 130 },
      { title: '填报人', key: 'owner', width: 120 },
      { title: '流程状态', key: 'flowStatus', width: 120 },
      { title: '备注', key: 'remark', width: 220 },
      { title: '更新日期', key: 'updatedAt', sortable: true, width: 120 }
    ],
    querySchema: [
      { key: 'billCode', label: '单据编号', type: 'input', match: 'fuzzy', placeholder: '请输入单据编号' },
      { key: 'period', label: '费用归属月份', type: 'input', match: 'fuzzy', placeholder: 'YYYY-MM' },
      { key: 'projectCode', label: '项目编号', type: 'input', match: 'fuzzy', placeholder: '请输入项目编号' },
      { key: 'projectName', label: '项目名称', type: 'input', match: 'fuzzy', placeholder: '请输入项目名称' },
      { key: 'flowStatus', label: '流程状态', type: 'select', match: 'exact', options: FLOW_OPTIONS }
    ],
    formSchema: [
      { key: 'billCode', label: '单据编号', type: 'input', required: true, requiredMessage: '请输入单据编号', min: 4, max: 32, pattern: '^[A-Z0-9-]+$', patternMessage: '单据编号仅支持大写字母、数字、短横线' },
      { key: 'period', label: '费用归属月份', type: 'input', required: true, requiredMessage: '请输入费用归属月份', pattern: '^\\d{4}-\\d{2}$', patternMessage: '请输入 YYYY-MM 格式' },
      { key: 'projectCode', label: '项目编号', type: 'input', required: true, requiredMessage: '请输入项目编号', min: 6, max: 32, pattern: '^[A-Z0-9-]+$', patternMessage: '项目编号格式不正确' },
      { key: 'projectName', label: '项目名称', type: 'input', required: true, requiredMessage: '请输入项目名称', min: 2, max: 120 },
      { key: 'expenseType', label: '费用类型', type: 'input', required: true, requiredMessage: '请输入费用类型', min: 2, max: 50 },
      { key: 'expenseAmount', label: '金额(元)', type: 'number', required: true, requiredMessage: '请输入金额', minValue: 0, maxValue: 999999999 },
      { key: 'owner', label: '填报人', type: 'input', required: true, requiredMessage: '请输入填报人', min: 2, max: 30 },
      { key: 'flowStatus', label: '流程状态', type: 'select', options: FLOW_OPTIONS, required: true, requiredMessage: '请选择流程状态' },
      { key: 'remark', label: '备注', type: 'textarea', required: false, max: 300 },
      { key: 'status', label: '状态', type: 'select', options: STATUS_OPTIONS, required: true, requiredMessage: '请选择状态' }
    ],
    rows: [
      {
        id: `${spec.prefix}001`,
        billCode: `${spec.prefix}-2026-001`,
        period: '2026-03',
        projectCode: 'RD-PJT-2026-001',
        projectName: '新一代智能配电控制器研发',
        expenseType: spec.title,
        expenseAmount: 152000,
        owner: '易君召',
        flowStatus: '审批通过',
        remark: '系统初始化示例数据',
        status: '启用',
        updatedAt: '2026-04-17'
      }
    ]
  }
}

EXPENSE_MODULE_SPECS.forEach((spec) => {
  MODULES[spec.key] = createExpenseModule(spec)
})

function createStatementModule(spec) {
  return {
    title: spec.title,
    prefix: spec.prefix,
    toolbar: { ...DEFAULT_TOOLBAR, exportLabel: '导出报表' },
    columns: [
      { title: '报表编号', key: 'reportCode', sortable: true, width: 170 },
      { title: '报表名称', key: 'reportName', width: 260 },
      { title: '统计年度', key: 'taxYear', sortable: true, width: 100 },
      { title: '所属期间', key: 'period', sortable: true, width: 120 },
      { title: '生成日期', key: 'generateDate', sortable: true, width: 120 },
      { title: '填报人', key: 'owner', width: 120 },
      { title: '流程状态', key: 'flowStatus', width: 120 },
      { title: '备注', key: 'remark', width: 220 },
      { title: '更新日期', key: 'updatedAt', sortable: true, width: 120 }
    ],
    querySchema: [
      { key: 'reportCode', label: '报表编号', type: 'input', match: 'fuzzy', placeholder: '请输入报表编号' },
      { key: 'reportName', label: '报表名称', type: 'input', match: 'fuzzy', placeholder: '请输入报表名称' },
      { key: 'taxYear', label: '统计年度', type: 'input', match: 'fuzzy', placeholder: 'YYYY' },
      { key: 'period', label: '所属期间', type: 'input', match: 'fuzzy', placeholder: 'YYYY-MM' },
      { key: 'flowStatus', label: '流程状态', type: 'select', match: 'exact', options: FLOW_OPTIONS }
    ],
    formSchema: [
      { key: 'reportCode', label: '报表编号', type: 'input', required: true, requiredMessage: '请输入报表编号', min: 4, max: 32, pattern: '^[A-Z0-9-]+$', patternMessage: '报表编号仅支持大写字母、数字、短横线' },
      { key: 'reportName', label: '报表名称', type: 'input', required: true, requiredMessage: '请输入报表名称', min: 2, max: 120 },
      { key: 'taxYear', label: '统计年度', type: 'input', required: true, requiredMessage: '请输入统计年度', pattern: '^\\d{4}$', patternMessage: '请输入 YYYY 格式' },
      { key: 'period', label: '所属期间', type: 'input', required: true, requiredMessage: '请输入所属期间', pattern: '^\\d{4}-\\d{2}$', patternMessage: '请输入 YYYY-MM 格式' },
      { key: 'generateDate', label: '生成日期', type: 'date', required: true, requiredMessage: '请选择生成日期' },
      { key: 'owner', label: '填报人', type: 'input', required: true, requiredMessage: '请输入填报人', min: 2, max: 30 },
      { key: 'flowStatus', label: '流程状态', type: 'select', options: FLOW_OPTIONS, required: true, requiredMessage: '请选择流程状态' },
      { key: 'remark', label: '备注', type: 'textarea', required: false, max: 300 },
      { key: 'status', label: '状态', type: 'select', options: STATUS_OPTIONS, required: true, requiredMessage: '请选择状态' }
    ],
    rows: [
      {
        id: `${spec.prefix}001`,
        reportCode: `${spec.prefix}-2026-001`,
        reportName: `${spec.title}示例记录`,
        taxYear: '2026',
        period: '2026-03',
        generateDate: '2026-04-16',
        owner: '易君召',
        flowStatus: '审批通过',
        remark: '系统初始化示例数据',
        status: '启用',
        updatedAt: '2026-04-17'
      }
    ]
  }
}

STATEMENT_MODULE_SPECS.forEach((spec) => {
  MODULES[spec.key] = createStatementModule(spec)
})

const TASK_PROJECT_POOL = [
  { code: 'RD-PJT-2026-001', name: '新一代智能配电控制器研发' },
  { code: 'RD-PJT-2026-002', name: '电机驱动算法升级项目' },
  { code: 'RD-PJT-2026-003', name: '工业网关可靠性提升项目' },
  { code: 'RD-PJT-2026-004', name: '高压柜温升优化项目' },
  { code: 'RD-PJT-2026-005', name: '边缘计算采集终端研发' },
  { code: 'RD-PJT-2026-006', name: '储能BMS通信协议适配项目' }
]

const TASK_PROCESS_POOL = [
  { name: '项目立项审批流程', bizPrefix: 'APR', titlePrefix: '项目立项审批' },
  { name: '项目变更审批流程', bizPrefix: 'CHG', titlePrefix: '项目变更申请审批' },
  { name: '研发工时填报审核流程', bizPrefix: 'HRS', titlePrefix: '月度工时填报审核' },
  { name: '研发费用归集审批流程', bizPrefix: 'EXP', titlePrefix: '研发费用归集单审批' },
  { name: '项目阶段转换审批流程', bizPrefix: 'STG', titlePrefix: '项目阶段转换审批' },
  { name: '项目文档归档审批流程', bizPrefix: 'DOC', titlePrefix: '项目文档归档审批' }
]

const TASK_STARTER_POOL = ['易君召', '张敏', '王磊', '李娜', '周强', '陈杰', '赵婷', '孙浩']
const TASK_ASSIGNEE_POOL = ['易君召', '刘洋', '吴迪', '郑楠', '冯倩', '郭凯', '王磊', '李娜']
const TASK_CC_POOL = ['易君召', '王磊', '李娜', '张敏', '赵婷', '刘洋']
const TASK_PRIORITY_POOL = ['高', '中', '中', '低']
const TASK_FLOW_POOL = ['审批中', '审批通过', '审批中', '审批驳回', '审批通过', '草稿']
const TASK_STATUS_POOL = ['启用', '启用', '启用', '草稿', '停用']

const TASK_DUE_DATES = [
  '2026-04-19', '2026-04-20', '2026-04-21', '2026-04-22', '2026-04-23', '2026-04-24',
  '2026-04-25', '2026-04-26', '2026-04-27', '2026-04-28', '2026-04-29', '2026-04-30',
  '2026-05-06', '2026-05-08', '2026-05-10', '2026-05-12'
]

const TASK_UPDATED_DATES = [
  '2026-04-08', '2026-04-09', '2026-04-10', '2026-04-11', '2026-04-12', '2026-04-13',
  '2026-04-14', '2026-04-15', '2026-04-16', '2026-04-17', '2026-04-18'
]

function pad3(n) {
  return String(n).padStart(3, '0')
}

function buildTaskMasterRows() {
  const rows = []
  for (let i = 1; i <= 42; i++) {
    const project = TASK_PROJECT_POOL[(i - 1) % TASK_PROJECT_POOL.length]
    const process = TASK_PROCESS_POOL[(i - 1) % TASK_PROCESS_POOL.length]
    const priority = TASK_PRIORITY_POOL[(i - 1) % TASK_PRIORITY_POOL.length]
    let flowStatus = TASK_FLOW_POOL[(i - 1) % TASK_FLOW_POOL.length]
    const starter = TASK_STARTER_POOL[(i + 1) % TASK_STARTER_POOL.length]
    let assignee = TASK_ASSIGNEE_POOL[(i + 2) % TASK_ASSIGNEE_POOL.length]
    const ccUser = TASK_CC_POOL[(i + 3) % TASK_CC_POOL.length]
    const dueDate = TASK_DUE_DATES[(i - 1) % TASK_DUE_DATES.length]
    const updatedAt = TASK_UPDATED_DATES[(i - 1) % TASK_UPDATED_DATES.length]

    if (i % 5 === 0 || i % 7 === 0) {
      assignee = '易君召'
    }
    if (i % 6 === 0) {
      flowStatus = '审批中'
    }
    if (i % 8 === 0) {
      flowStatus = '审批通过'
    }
    if (i % 11 === 0) {
      flowStatus = '审批驳回'
    }

    rows.push({
      id: `TASK${pad3(i)}`,
      taskCode: `TK-2026-${pad3(i)}`,
      taskTitle: `${process.titlePrefix} - ${project.name}`,
      processName: process.name,
      businessCode: `BIZ-${process.bizPrefix}-2026-${pad3(i)}`,
      projectCode: project.code,
      projectName: project.name,
      starter,
      assignee,
      ccUser,
      priority,
      dueDate,
      flowStatus,
      remark: `${project.code} / 当前节点：${flowStatus === '审批中' ? '部门负责人审批' : flowStatus === '审批通过' ? '流程结束' : flowStatus === '审批驳回' ? '发起人修订' : '待提交'}`,
      status: TASK_STATUS_POOL[(i - 1) % TASK_STATUS_POOL.length],
      updatedAt
    })
  }
  return rows
}

function pickTaskRowsByModule(moduleKey, prefix) {
  const master = buildTaskMasterRows()
  let picked = []

  if (moduleKey === 'task-allprocess') {
    picked = master.slice(0, 26)
  } else if (moduleKey === 'task-myprocess') {
    picked = master.filter((row) => row.starter === '易君召').slice(0, 18)
  } else if (moduleKey === 'task-todo') {
    picked = master
      .filter((row) => row.assignee === '易君召' && row.flowStatus === '审批中')
      .map((row) => ({ ...row, priority: row.priority === '低' ? '中' : row.priority }))
      .slice(0, 16)
  } else if (moduleKey === 'task-finished') {
    picked = master
      .filter((row) => row.assignee === '易君召' && (row.flowStatus === '审批通过' || row.flowStatus === '审批驳回'))
      .slice(0, 16)
  } else if (moduleKey === 'task-flow-cc') {
    picked = master
      .filter((row) => row.ccUser === '易君召' && row.starter !== '易君召')
      .map((row) => ({ ...row, remark: `${row.remark}，抄送对象：易君召` }))
      .slice(0, 16)
  } else if (moduleKey === 'task-my-cc') {
    picked = master
      .filter((row) => row.starter === '易君召' && row.ccUser !== '易君召')
      .map((row) => ({ ...row, remark: `${row.remark}，我发起并抄送：${row.ccUser}` }))
      .slice(0, 16)
  }

  if (picked.length < 16) {
    picked = master.slice(0, 16)
  }

  return picked.map((row, idx) => ({
    ...row,
    id: `${prefix}${pad3(idx + 1)}`
  }))
}

function createTaskModule(spec) {
  return {
    title: spec.title,
    prefix: spec.prefix,
    toolbar: { ...DEFAULT_TOOLBAR, exportLabel: '导出任务' },
    columns: [
      { title: '任务编号', key: 'taskCode', sortable: true, width: 170 },
      { title: '任务标题', key: 'taskTitle', width: 260 },
      { title: '流程名称', key: 'processName', width: 170 },
      { title: '业务单号', key: 'businessCode', sortable: true, width: 170 },
      { title: '发起人', key: 'starter', width: 120 },
      { title: '当前处理人', key: 'assignee', width: 120 },
      { title: '优先级', key: 'priority', width: 100 },
      { title: '截止日期', key: 'dueDate', sortable: true, width: 120 },
      { title: '流程状态', key: 'flowStatus', width: 120 },
      { title: '更新日期', key: 'updatedAt', sortable: true, width: 120 }
    ],
    querySchema: [
      { key: 'taskCode', label: '任务编号', type: 'input', match: 'fuzzy', placeholder: '请输入任务编号' },
      { key: 'taskTitle', label: '任务标题', type: 'input', match: 'fuzzy', placeholder: '请输入任务标题' },
      { key: 'processName', label: '流程名称', type: 'input', match: 'fuzzy', placeholder: '请输入流程名称' },
      { key: 'assignee', label: '当前处理人', type: 'input', match: 'fuzzy', placeholder: '请输入处理人' },
      { key: 'flowStatus', label: '流程状态', type: 'select', match: 'exact', options: FLOW_OPTIONS }
    ],
    formSchema: [
      { key: 'taskCode', label: '任务编号', type: 'input', required: true, requiredMessage: '请输入任务编号', min: 4, max: 32, pattern: '^[A-Z0-9-]+$', patternMessage: '任务编号仅支持大写字母、数字、短横线' },
      { key: 'taskTitle', label: '任务标题', type: 'input', required: true, requiredMessage: '请输入任务标题', min: 2, max: 120 },
      { key: 'processName', label: '流程名称', type: 'input', required: true, requiredMessage: '请输入流程名称', min: 2, max: 80 },
      { key: 'businessCode', label: '业务单号', type: 'input', required: true, requiredMessage: '请输入业务单号', min: 4, max: 40, pattern: '^[A-Z0-9-]+$', patternMessage: '业务单号格式不正确' },
      { key: 'starter', label: '发起人', type: 'input', required: true, requiredMessage: '请输入发起人', min: 2, max: 30 },
      { key: 'assignee', label: '当前处理人', type: 'input', required: true, requiredMessage: '请输入当前处理人', min: 2, max: 30 },
      { key: 'priority', label: '优先级', type: 'select', options: ['高', '中', '低'], required: true, requiredMessage: '请选择优先级' },
      { key: 'dueDate', label: '截止日期', type: 'date', required: true, requiredMessage: '请选择截止日期' },
      { key: 'flowStatus', label: '流程状态', type: 'select', options: FLOW_OPTIONS, required: true, requiredMessage: '请选择流程状态' },
      { key: 'remark', label: '备注', type: 'textarea', required: false, max: 300 },
      { key: 'status', label: '状态', type: 'select', options: STATUS_OPTIONS, required: true, requiredMessage: '请选择状态' }
    ],
    rows: pickTaskRowsByModule(spec.key, spec.prefix)
  }
}

TASK_MODULE_SPECS.forEach((spec) => {
  MODULES[spec.key] = createTaskModule(spec)
})

function createConfigModule(spec) {
  return {
    title: spec.title,
    prefix: spec.prefix,
    toolbar: { ...DEFAULT_TOOLBAR },
    columns: spec.columns,
    querySchema: spec.querySchema,
    formSchema: spec.formSchema,
    rows: [{ ...spec.row }]
  }
}

SYSTEM_MODULE_SPECS.forEach((spec) => {
  MODULES[spec.key] = createConfigModule(spec)
})

CONFIG_MODULE_SPECS.forEach((spec) => {
  MODULES[spec.key] = createConfigModule(spec)
})

const PROJECT_NAME_POOL = ['张敏', '王磊', '李娜', '周强', '陈杰', '刘洋', '赵婷', '孙浩', '吴迪', '郑楠', '冯倩', '郭凯']
const PROJECT_TITLE_POOL = [
  '新一代智能配电控制器研发',
  '电机驱动算法升级项目',
  '工业网关可靠性提升项目',
  '高压柜温升优化项目',
  '边缘计算采集终端研发'
]

function p2(n) {
  return String(n).padStart(2, '0')
}

function shiftIsoDay(isoDate, offsetDays) {
  const t = Date.parse(isoDate)
  if (!Number.isFinite(t)) return isoDate
  const d = new Date(t + offsetDays * 24 * 60 * 60 * 1000)
  return `${d.getFullYear()}-${p2(d.getMonth() + 1)}-${p2(d.getDate())}`
}

function shiftIsoMonth(yyyyMm, offsetMonths) {
  const m = String(yyyyMm || '').match(/^(\d{4})-(\d{2})$/)
  if (!m) return yyyyMm
  const y = Number(m[1])
  const mm = Number(m[2]) - 1
  const d = new Date(y, mm + offsetMonths, 1)
  return `${d.getFullYear()}-${p2(d.getMonth() + 1)}`
}

function seqCode(raw, seq) {
  const s = String(raw || '')
  if (!s) return s
  if (/^[A-Z]+-\d{4}-\d+$/i.test(s)) return s.replace(/\d+$/, String(seq).padStart(3, '0'))
  if (/[A-Z]+-\d+$/i.test(s)) return s.replace(/\d+$/, String(seq).padStart(3, '0'))
  if (/^\w+\d+$/.test(s)) return s.replace(/\d+$/, String(seq).padStart(3, '0'))
  if (/^\d+$/.test(s)) return `${s.slice(0, Math.max(0, s.length - 3))}${String(seq).padStart(3, '0')}`
  return `${s}-${String(seq).padStart(2, '0')}`
}

function enrichProjectRow(baseRow, seq) {
  const row = { ...baseRow }
  const dayOffset = seq * 3
  const monthOffset = seq % 10

  Object.keys(row).forEach((key) => {
    const value = row[key]
    if (key === 'id') return

    if (key === 'status') {
      row[key] = STATUS_OPTIONS[(seq - 1) % STATUS_OPTIONS.length]
      return
    }
    if (key === 'flowStatus' || key === 'actStatus') {
      row[key] = FLOW_OPTIONS[(seq - 1) % FLOW_OPTIONS.length]
      return
    }
    if (key === 'projectName' || key === 'recordName' || key === 'reportName') {
      const title = PROJECT_TITLE_POOL[(seq - 1) % PROJECT_TITLE_POOL.length]
      row[key] = key === 'projectName' ? title : `${title}-${String(seq).padStart(2, '0')}`
      return
    }
    if (key === 'owner' || key === 'projectManagers' || key === 'createBy') {
      row[key] = PROJECT_NAME_POOL[(seq - 1) % PROJECT_NAME_POOL.length]
      return
    }
    if (key === 'taxYear') {
      row[key] = String(2024 + (seq % 3))
      return
    }

    if (typeof value === 'number') {
      const delta = Math.max(1, Math.round(Math.abs(value) * 0.04))
      row[key] = Number((value + seq * delta).toFixed(2))
      return
    }

    if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
      row[key] = shiftIsoDay(value, dayOffset)
      return
    }

    if (typeof value === 'string' && /^\d{4}-\d{2}$/.test(value)) {
      row[key] = shiftIsoMonth(value, monthOffset)
      return
    }

    if (typeof value === 'string') {
      const lk = key.toLowerCase()
      if (
        lk.includes('code') ||
        lk.includes('no') ||
        lk.includes('bill') ||
        lk.includes('record') ||
        lk.includes('ledger') ||
        lk.includes('report')
      ) {
        row[key] = seqCode(value, seq)
      }
    }
  })

  return row
}

function expandProjectModuleRows(modules) {
  const entries = Object.entries(modules)
  entries.forEach(([moduleKey, moduleCfg], moduleIndex) => {
    const baseRows = Array.isArray(moduleCfg.rows) ? moduleCfg.rows : []
    if (!baseRows.length) return

    const targetSize = 12 + (moduleIndex % 5) // 12-16
    const rows = baseRows.map((r) => ({ ...r }))
    let cursor = 0

    while (rows.length < targetSize) {
      const template = baseRows[cursor % baseRows.length]
      const seq = rows.length + 1
      const next = enrichProjectRow(template, seq)
      next.id = `${moduleCfg.prefix}${String(seq).padStart(3, '0')}`
      rows.push(next)
      cursor++
    }

    modules[moduleKey].rows = rows
  })
}

expandProjectModuleRows(MODULES)

const db = Object.fromEntries(Object.entries(MODULES).map(([k, v]) => [k, v.rows.map((row) => ({ ...row }))]))

function delay(ms = 220) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function clone(data) {
  return JSON.parse(JSON.stringify(data))
}

function today() {
  return new Date().toISOString().slice(0, 10)
}

function nextId(prefix, rows) {
  const max = rows.reduce((acc, row) => {
    const n = Number(String(row.id || '').replace(prefix, ''))
    return Number.isFinite(n) ? Math.max(acc, n) : acc
  }, 0)
  return `${prefix}${String(max + 1).padStart(3, '0')}`
}

function applyFilters(rows, schema, filters) {
  return rows.filter((row) => {
    return schema.every((field) => {
      const val = filters?.[field.key]
      if (val === undefined || val === null || val === '') return true

      if (field.match === 'fuzzy') {
        const raw = [row[field.key], row.projectName, row.projectCode, row.reason, row.createBy].filter(Boolean).join(' ')
        return String(raw).toLowerCase().includes(String(val).toLowerCase())
      }

      return String(row[field.key] || '') === String(val)
    })
  })
}

function sortRows(rows, sortKey, sortOrder) {
  if (!sortKey || !sortOrder) return rows
  const sorted = [...rows].sort((a, b) => {
    const av = a?.[sortKey]
    const bv = b?.[sortKey]
    if (av === bv) return 0
    return av > bv ? 1 : -1
  })
  return sortOrder === 'descend' ? sorted.reverse() : sorted
}

export async function fetchProjectModuleMeta(moduleKey) {
  await delay()
  const cfg = MODULES[moduleKey]
  if (!cfg) throw new Error('模块不存在')
  return clone({
    title: cfg.title,
    columns: cfg.columns,
    querySchema: cfg.querySchema,
    formSchema: cfg.formSchema,
    toolbar: cfg.toolbar || DEFAULT_TOOLBAR,
    modal: MODULE_MODAL[moduleKey] || DEFAULT_MODAL
  })
}

export async function fetchProjectList({ moduleKey, filters, page = 1, pageSize = 10, sortKey = '', sortOrder = '' }) {
  await delay()
  const cfg = MODULES[moduleKey]
  if (!cfg) throw new Error('模块不存在')
  const rows = db[moduleKey] || []
  const filtered = applyFilters(rows, cfg.querySchema, filters)
  const sorted = sortRows(filtered, sortKey, sortOrder)
  const start = (page - 1) * pageSize
  const list = sorted.slice(start, start + pageSize)
  return clone({ list, total: sorted.length })
}

export async function fetchProjectDetail({ moduleKey, id }) {
  await delay()
  const rows = db[moduleKey] || []
  return clone(rows.find((r) => r.id === id) || null)
}

export async function saveProjectRecord({ moduleKey, record }) {
  await delay()
  const cfg = MODULES[moduleKey]
  if (!cfg) throw new Error('模块不存在')
  const rows = db[moduleKey]

  const idx = rows.findIndex((r) => r.id === record.id)
  if (idx >= 0) {
    rows[idx] = { ...rows[idx], ...record, updatedAt: today() }
    return clone(rows[idx])
  }

  const row = { id: nextId(cfg.prefix, rows), status: '启用', updatedAt: today(), ...record }
  rows.unshift(row)
  return clone(row)
}

export async function deleteProjectRecord({ moduleKey, id }) {
  await delay(180)
  const rows = db[moduleKey] || []
  const idx = rows.findIndex((r) => r.id === id)
  if (idx >= 0) rows.splice(idx, 1)
  return { success: idx >= 0 }
}

export async function batchDeleteProjectRecords({ moduleKey, ids }) {
  await delay(220)
  const rows = db[moduleKey] || []
  const before = rows.length
  const idSet = new Set(ids || [])
  db[moduleKey] = rows.filter((r) => !idSet.has(r.id))
  return { success: true, removed: before - db[moduleKey].length }
}

export async function exportProjectRecords({ moduleKey, filters, ids }) {
  await delay(260)
  const cfg = MODULES[moduleKey]
  if (!cfg) throw new Error('模块不存在')
  let rows = applyFilters(db[moduleKey] || [], cfg.querySchema, filters)
  if (Array.isArray(ids) && ids.length) {
    const idSet = new Set(ids)
    rows = rows.filter((r) => idSet.has(r.id))
  }
  return {
    filename: `${moduleKey}-${Date.now()}`,
    rows: clone(rows)
  }
}

export async function importProjectRecords({ moduleKey, records }) {
  await delay(260)
  const cfg = MODULES[moduleKey]
  if (!cfg) throw new Error('模块不存在')
  if (!Array.isArray(records)) throw new Error('导入数据格式错误，需为数组')

  let inserted = 0
  let updated = 0
  for (const record of records) {
    if (!record || typeof record !== 'object') continue
    const idx = db[moduleKey].findIndex((r) => r.id === record.id && record.id)
    if (idx >= 0) {
      db[moduleKey][idx] = { ...db[moduleKey][idx], ...record, updatedAt: today() }
      updated++
    } else {
      db[moduleKey].unshift({ id: nextId(cfg.prefix, db[moduleKey]), status: '启用', updatedAt: today(), ...record })
      inserted++
    }
  }
  return { success: true, inserted, updated }
}
