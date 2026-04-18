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
  'statements-statistics-reports': { ...DEFAULT_MODAL, width: 1080, columns: 2, okText: '保存' }
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
