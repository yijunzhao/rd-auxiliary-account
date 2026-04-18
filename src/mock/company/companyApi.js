const STATUS_OPTIONS = ['启用', '停用', '草稿']
const BOOLEAN_OPTIONS = ['是', '否']

const MODULES = {
  'basic-info': {
    title: '企业基本信息',
    prefix: 'BI',
    columns: [
      { title: '公司名称', key: 'name', sortable: true },
      { title: '统一社会信用代码', key: 'creditCode', sortable: true },
      { title: '法定代表人', key: 'legalRepresentative' },
      { title: '企业类型', key: 'enterpriseType' },
      { title: '纳税人资质', key: 'taxpayerQualification' },
      { title: '联系电话', key: 'companyPhone' },
      { title: '更新日期', key: 'updatedAt', sortable: true }
    ],
    querySchema: [
      { key: 'keyword', label: '关键字', type: 'input', placeholder: '公司名称/信用代码/法人', match: 'fuzzy' },
      { key: 'enterpriseType', label: '企业类型', type: 'select', match: 'exact', options: ['有限责任公司', '股份有限公司', '国有企业'] },
      { key: 'taxpayerQualification', label: '纳税人资质', type: 'select', match: 'exact', options: ['一般纳税人', '小规模纳税人'] },
      { key: 'highTechFieldIf', label: '高新企业', type: 'select', match: 'exact', options: BOOLEAN_OPTIONS },
      { key: 'status', label: '状态', type: 'select', match: 'exact', options: STATUS_OPTIONS }
    ],
    formSchema: [
      { key: 'ispId', label: '服务商', type: 'input', required: true, min: 2, max: 40 },
      { key: 'name', label: '公司名称', type: 'input', required: true, min: 2, max: 80 },
      { key: 'creditCode', label: '统一社会信用代码', type: 'input', required: true, min: 18, max: 18, pattern: '^[0-9A-Z]{18}$', patternMessage: '统一社会信用代码需为18位大写字母或数字' },
      { key: 'legalRepresentative', label: '法定代表人', type: 'input', required: false, min: 2, max: 20, pattern: '^[\\u4e00-\\u9fa5A-Za-z·]{2,20}$', patternMessage: '法定代表人格式不正确' },
      { key: 'establishmentDate', label: '成立日期', type: 'date', required: false },
      { key: 'enterpriseType', label: '企业类型', type: 'select', options: ['有限责任公司', '股份有限公司', '国有企业'], required: false },
      { key: 'taxpayerQualification', label: '纳税人资质', type: 'select', options: ['一般纳税人', '小规模纳税人'], required: false },
      { key: 'companySize', label: '人员规模', type: 'select', options: ['1-49人', '50-99人', '100-499人', '500人以上'], required: false },
      { key: 'insuredNumber', label: '参保人数', type: 'number', required: false, minValue: 0, maxValue: 99999 },
      { key: 'companyPhone', label: '联系电话', type: 'input', required: false, min: 7, max: 20, pattern: '^(1[3-9]\\d{9}|0\\d{2,3}-?\\d{7,8})$', patternMessage: '联系电话格式不正确' },
      { key: 'provinceCity', label: '省市', type: 'input', required: false, min: 2, max: 40 },
      { key: 'nationalIndustry', label: '国标行业', type: 'input', required: false, min: 2, max: 60 },
      { key: 'registeredAddress', label: '注册地址', type: 'input', required: false, min: 4, max: 120 },
      { key: 'mailAddress', label: '通讯地址', type: 'input', required: false, min: 4, max: 120 },
      { key: 'businessScope', label: '经营范围', type: 'textarea', required: true, min: 5, max: 500 },
      { key: 'attendanceMethod', label: '考勤方式', type: 'select', options: ['标准工时制', '综合工时制', '不定时工时制'], required: false },
      { key: 'fullAttendanceDuration', label: '人员每天满勤时长', type: 'number', required: true, minValue: 0, maxValue: 24 },
      { key: 'assetsRunningTime', label: '资产每天运行时长', type: 'number', required: true, minValue: 0, maxValue: 24 },
      { key: 'highTechField', label: '高新技术领域', type: 'input', required: false, min: 2, max: 50 },
      { key: 'highTechFieldIf', label: '是否高新技术企业', type: 'select', options: BOOLEAN_OPTIONS, required: false },
      { key: 'smallTechFieldIf', label: '是否科技中小企业', type: 'select', options: BOOLEAN_OPTIONS, required: false },
      { key: 'useAbsenceWorkingHours', label: '是否使用缺勤未扣薪时长', type: 'select', options: BOOLEAN_OPTIONS, required: false },
      { key: 'beginDate', label: '数据起始日期', type: 'date', required: false },
      { key: 'endDate', label: '数据截止日期', type: 'date', required: false },
      { key: 'amount', label: '研发费用上限(万元)', type: 'number', required: false, minValue: 0, maxValue: 9999999 },
      { key: 'status', label: '状态', type: 'select', options: STATUS_OPTIONS, required: true }
    ],
    rows: [
      {
        id: 'BI001',
        ispId: '华东服务商A',
        name: '江苏荣泽信息科技股份有限公司',
        creditCode: '91320100724407033B',
        legalRepresentative: '王建国',
        establishmentDate: '2014-06-10',
        enterpriseType: '有限责任公司',
        taxpayerQualification: '一般纳税人',
        companySize: '100-499人',
        insuredNumber: 236,
        companyPhone: '025-86668888',
        provinceCity: '江苏省,南京市',
        nationalIndustry: 'C382 输配电及控制设备制造',
        registeredAddress: '江苏省南京市江宁区秣陵街道研发大道88号',
        mailAddress: '江苏省南京市江宁区研发大道88号A座',
        businessScope: '输配电控制设备、工业自动化设备研发、生产及销售。',
        attendanceMethod: '标准工时制',
        fullAttendanceDuration: 8,
        assetsRunningTime: 12,
        highTechField: '电子信息技术',
        highTechFieldIf: '是',
        smallTechFieldIf: '否',
        useAbsenceWorkingHours: '是',
        beginDate: '2026-01-01',
        endDate: '2026-12-31',
        amount: 1800,
        status: '启用',
        updatedAt: '2026-04-12'
      }
    ]
  },
  'bank-account': {
    title: '银行账户',
    prefix: 'BA',
    columns: [
      { title: '账户编码', key: 'code', sortable: true },
      { title: '开户行', key: 'bank' },
      { title: '账号', key: 'account' },
      { title: '开户名称', key: 'accountName' },
      { title: '账户用途', key: 'accountUse' },
      { title: '更新日期', key: 'updatedAt', sortable: true }
    ],
    querySchema: [
      { key: 'keyword', label: '关键字', type: 'input', placeholder: '开户行/账号/开户名称', match: 'fuzzy' },
      { key: 'accountUse', label: '账户用途', type: 'select', match: 'exact', options: ['基本户', '一般户', '专用户'] },
      { key: 'status', label: '状态', type: 'select', match: 'exact', options: STATUS_OPTIONS }
    ],
    formSchema: [
      { key: 'code', label: '账户编码', type: 'input', required: true, min: 4, max: 32, pattern: '^[A-Z0-9-]+$', patternMessage: '账户编码仅支持大写字母、数字、短横线' },
      { key: 'bank', label: '开户行', type: 'input', required: true, min: 4, max: 100 },
      { key: 'account', label: '账号', type: 'input', required: true, min: 8, max: 32, pattern: '^\\d{8,32}$', patternMessage: '账号必须为8-32位数字' },
      { key: 'accountName', label: '开户名称', type: 'input', required: true, min: 2, max: 80 },
      { key: 'accountUse', label: '账户用途', type: 'select', options: ['基本户', '一般户', '专用户'], required: true },
      { key: 'remarks', label: '备注', type: 'textarea', required: false, max: 200 },
      { key: 'status', label: '状态', type: 'select', options: STATUS_OPTIONS, required: true }
    ],
    rows: [
      {
        id: 'BA001',
        code: 'BANK-001',
        bank: '中国银行南京江宁支行',
        account: '320101888899990001',
        accountName: '江苏荣泽信息科技股份有限公司',
        accountUse: '基本户',
        remarks: '主结算账户',
        status: '启用',
        updatedAt: '2026-04-08'
      },
      {
        id: 'BA002',
        code: 'BANK-002',
        bank: '工商银行南京分行',
        account: '320101777766660002',
        accountName: '江苏荣泽信息科技股份有限公司',
        accountUse: '一般户',
        remarks: '研发项目专用回款',
        status: '草稿',
        updatedAt: '2026-03-19'
      }
    ]
  },
  'fixed-assets': {
    title: '固定资产',
    prefix: 'FA',
    columns: [
      { title: '资产编码', key: 'assetsCode', sortable: true },
      { title: '资产名称', key: 'assetsName' },
      { title: '资产类型', key: 'fixAssetsType' },
      { title: '规格型号', key: 'fixAssetsModel' },
      { title: '使用人工号', key: 'userAccount' },
      { title: '使用人姓名', key: 'userName' },
      { title: '使用部门', key: 'useDepartment' },
      { title: '资产产研性质', key: 'productionResearchNature' },
      { title: '资产每天运行时长', key: 'assetsRunningTime' },
      { title: '参与研发活动最高比例(%)', key: 'participationRatio' },
      { title: '功率(kW)', key: 'power' },
      { title: '更新日期', key: 'updatedAt', sortable: true }
    ],
    querySchema: [
      { key: 'assetsCode', label: '资产编码', type: 'input', match: 'fuzzy' },
      { key: 'assetsName', label: '资产名称', type: 'input', match: 'fuzzy' },
      { key: 'fixAssetsType', label: '资产类型', type: 'select', match: 'exact', options: ['检测设备', '生产设备', '办公设备'] },
      { key: 'useDepartment', label: '使用部门', type: 'input', match: 'fuzzy' },
      { key: 'productionResearchNature', label: '资产产研性质', type: 'select', match: 'exact', options: ['研发专用', '研发与生产共用', '生产专用'] },
      { key: 'status', label: '状态', type: 'select', match: 'exact', options: STATUS_OPTIONS }
    ],
    formSchema: [
      { key: 'assetsCode', label: '资产编码', type: 'input', required: true, min: 4, max: 32, pattern: '^[A-Z0-9-]+$', patternMessage: '资产编码仅支持大写字母、数字、短横线' },
      { key: 'assetsName', label: '资产名称', type: 'input', required: true, min: 2, max: 80 },
      { key: 'fixAssetsType', label: '资产类型', type: 'select', options: ['检测设备', '生产设备', '办公设备'], required: true },
      { key: 'productionResearchNature', label: '资产产研性质', type: 'select', options: ['研发专用', '研发与生产共用', '生产专用'], required: true },
      { key: 'fixAssetsModel', label: '规格型号', type: 'input', required: false, max: 60 },
      { key: 'userAccount', label: '使用人工号', type: 'input', required: false, max: 30, pattern: '^[A-Z0-9-]+$', patternMessage: '使用人工号格式不正确' },
      { key: 'userName', label: '使用人姓名', type: 'input', required: false, max: 20, pattern: '^[\\u4e00-\\u9fa5A-Za-z·]{2,20}$', patternMessage: '使用人姓名格式不正确' },
      { key: 'useDepartment', label: '使用部门', type: 'input', required: false, max: 40 },
      { key: 'assetsRunningTime', label: '资产每天运行时长', type: 'number', required: false, minValue: 0, maxValue: 24 },
      { key: 'participationRatio', label: '参与研发活动最高比例(%)', type: 'number', required: true, minValue: 0, maxValue: 100 },
      { key: 'unparticipationType', label: '未参与研发活动归属项目类型', type: 'select', options: ['研发公共类项目', '管理费用类项目', '生产成本类项目'], required: true },
      { key: 'power', label: '功率(kW)', type: 'number', required: false, minValue: 0, maxValue: 99999 },
      { key: 'fixAssetsAttachment', label: '资产附件', type: 'input', required: false, max: 200 },
      { key: 'status', label: '状态', type: 'select', options: STATUS_OPTIONS, required: true }
    ],
    rows: [
      {
        id: 'FA001',
        assetsCode: 'FA-2026-001',
        assetsName: '示波器 DSOX3054T',
        fixAssetsType: '检测设备',
        productionResearchNature: '研发专用',
        fixAssetsModel: 'DSOX3054T',
        userAccount: 'EMP-1001',
        userName: '易君召',
        useDepartment: '研发测试部',
        assetsRunningTime: 10,
        participationRatio: 90,
        unparticipationType: '研发公共类项目',
        power: 1.2,
        fixAssetsAttachment: 'https://example.com/fa001.pdf',
        status: '启用',
        updatedAt: '2026-04-03'
      }
    ]
  },
  'accounting-code': {
    title: '会计科目',
    prefix: 'AC',
    columns: [
      { title: '一级费用类型', key: 'firstLevelExpense' },
      { title: '二级费用类型', key: 'secondLevelExpense' },
      { title: '对应最末级科目代码', key: 'accountingCode' },
      { title: '对应最末级会计科目名称', key: 'accountingName' },
      { title: '备注', key: 'remark' },
      { title: '更新日期', key: 'updatedAt', sortable: true }
    ],
    querySchema: [
      { key: 'firstLevelExpense', label: '一级费用类型', type: 'input', match: 'fuzzy' },
      { key: 'secondLevelExpense', label: '二级费用类型', type: 'input', match: 'fuzzy' },
      { key: 'accountingCode', label: '会计科目代码', type: 'input', match: 'fuzzy' },
      { key: 'accountingName', label: '会计科目名称', type: 'input', match: 'fuzzy' },
      { key: 'status', label: '状态', type: 'select', match: 'exact', options: STATUS_OPTIONS }
    ],
    formSchema: [
      { key: 'firstLevelExpense', label: '一级费用类型', type: 'input', required: true, min: 2, max: 30 },
      { key: 'secondLevelExpense', label: '二级费用类型', type: 'input', required: true, min: 2, max: 30 },
      { key: 'accountingCode', label: '对应最末级科目代码', type: 'textarea', required: true, min: 4, max: 200, pattern: '^\\d+(,\\d+)*$', patternMessage: '会计科目代码仅支持数字，多个值请用英文逗号分隔' },
      { key: 'accountingName', label: '对应最末级会计科目名称', type: 'textarea', required: true, min: 2, max: 200, pattern: '^[\\u4e00-\\u9fa5A-Za-z0-9()（）\\-、,，\\s]+$', patternMessage: '会计科目名称包含非法字符' },
      { key: 'remark', label: '备注', type: 'textarea', required: false, max: 300 },
      { key: 'status', label: '状态', type: 'select', options: STATUS_OPTIONS, required: true }
    ],
    rows: [
      {
        id: 'AC001',
        firstLevelExpense: '人工费用',
        secondLevelExpense: '工资薪金',
        accountingCode: '660201,660202',
        accountingName: '研发支出-费用化支出,研发支出-资本化支出',
        remark: '用于研发人员工资归集',
        status: '启用',
        updatedAt: '2026-04-07'
      }
    ]
  },
  'holiday-settings': {
    title: '节假日设置',
    prefix: 'HS',
    columns: [
      { title: '日期', key: 'specialDates', sortable: true },
      { title: '工时计算类型', key: 'calculationType' },
      { title: '备注说明', key: 'remark' },
      { title: '更新日期', key: 'updatedAt', sortable: true }
    ],
    querySchema: [
      { key: 'year', label: '年份', type: 'input', match: 'exact', placeholder: '如 2026' },
      { key: 'calculationType', label: '工时计算类型', type: 'select', match: 'exact', options: ['节假日', '调休日', '工作日'] },
      { key: 'status', label: '状态', type: 'select', match: 'exact', options: STATUS_OPTIONS }
    ],
    formSchema: [
      { key: 'specialDates', label: '日期', type: 'date', required: true },
      { key: 'calculationType', label: '工时计算类型', type: 'select', options: ['节假日', '调休日', '工作日'], required: true },
      { key: 'remark', label: '备注说明', type: 'textarea', required: true, min: 2, max: 30 },
      { key: 'status', label: '状态', type: 'select', options: STATUS_OPTIONS, required: true }
    ],
    rows: [
      { id: 'HS001', specialDates: '2026-02-14', calculationType: '节假日', remark: '春节假期第一天', status: '启用', updatedAt: '2026-01-03', year: '2026' },
      { id: 'HS002', specialDates: '2026-02-22', calculationType: '调休日', remark: '春节调休补班', status: '草稿', updatedAt: '2026-03-11', year: '2026' }
    ]
  },
  'intangible-assets': {
    title: '无形资产',
    prefix: 'IA',
    columns: [
      { title: '资产编码', key: 'assetsCode', sortable: true },
      { title: '资产名称', key: 'assetsName' },
      { title: '资产类型', key: 'assetsType' },
      { title: '资产来源', key: 'assetsSource' },
      { title: '使用人工号', key: 'userAccount' },
      { title: '使用人姓名', key: 'userName' },
      { title: '使用部门', key: 'useDepartment' },
      { title: '资产产研性质', key: 'productionResearchNature' },
      { title: '资产每天运行时长', key: 'assetsRunningTime' },
      { title: '参与研发活动最高比例(%)', key: 'participationRatio' },
      { title: '未参与研发活动归属项目类型', key: 'unparticipationType' },
      { title: '更新日期', key: 'updatedAt', sortable: true }
    ],
    querySchema: [
      { key: 'assetsCode', label: '资产编码', type: 'input', match: 'fuzzy' },
      { key: 'assetsName', label: '资产名称', type: 'input', match: 'fuzzy' },
      { key: 'assetsType', label: '资产类型', type: 'select', match: 'exact', options: ['软件著作权', '专利权', '软件资产'] },
      { key: 'useDepartment', label: '使用部门', type: 'input', match: 'fuzzy' },
      { key: 'productionResearchNature', label: '资产产研性质', type: 'select', match: 'exact', options: ['研发专用', '研发与生产共用', '生产专用'] },
      { key: 'status', label: '状态', type: 'select', match: 'exact', options: STATUS_OPTIONS }
    ],
    formSchema: [
      { key: 'assetsCode', label: '资产编码', type: 'input', required: true, min: 4, max: 32, pattern: '^[A-Z0-9-]+$', patternMessage: '资产编码仅支持大写字母、数字、短横线' },
      { key: 'assetsName', label: '资产名称', type: 'input', required: true, min: 2, max: 80 },
      { key: 'assetsType', label: '资产类型', type: 'select', options: ['软件著作权', '专利权', '软件资产'], required: true },
      { key: 'productionResearchNature', label: '资产产研性质', type: 'select', options: ['研发专用', '研发与生产共用', '生产专用'], required: true },
      { key: 'assetsSource', label: '资产来源', type: 'select', options: ['自主研发', '外购', '受赠'], required: true },
      { key: 'userAccount', label: '使用人工号', type: 'input', required: false, max: 30, pattern: '^[A-Z0-9-]+$', patternMessage: '使用人工号格式不正确' },
      { key: 'userName', label: '使用人姓名', type: 'input', required: false, max: 20, pattern: '^[\\u4e00-\\u9fa5A-Za-z·]{2,20}$', patternMessage: '使用人姓名格式不正确' },
      { key: 'useDepartment', label: '使用部门', type: 'input', required: false, max: 40 },
      { key: 'assetsRunningTime', label: '资产每天运行时长', type: 'number', required: false, minValue: 0, maxValue: 24 },
      { key: 'participationRatio', label: '参与研发活动最高比例(%)', type: 'number', required: true, minValue: 0, maxValue: 100 },
      { key: 'unparticipationType', label: '未参与研发活动归属项目类型', type: 'select', options: ['研发公共类项目', '管理费用类项目', '生产成本类项目'], required: true },
      { key: 'assetsAttachment', label: '资产附件', type: 'input', required: false, max: 200 },
      { key: 'status', label: '状态', type: 'select', options: STATUS_OPTIONS, required: true }
    ],
    rows: [
      {
        id: 'IA001',
        assetsCode: 'IA-2026-001',
        assetsName: '研发管理平台软件',
        assetsType: '软件著作权',
        productionResearchNature: '研发专用',
        assetsSource: '自主研发',
        userAccount: 'EMP-1001',
        userName: '易君召',
        useDepartment: '信息化部',
        assetsRunningTime: 16,
        participationRatio: 100,
        unparticipationType: '研发公共类项目',
        assetsAttachment: 'https://example.com/ia001.pdf',
        status: '启用',
        updatedAt: '2026-04-02'
      }
    ]
  },
  'intellectual-property': {
    title: '知识产权',
    prefix: 'IP',
    columns: [
      { title: '证书号码', key: 'certificateNo', sortable: true },
      { title: '名称', key: 'propertyName' },
      { title: '类型', key: 'propertyType' },
      { title: '状态', key: 'propertyStatus' },
      { title: '更新日期', key: 'updatedAt', sortable: true }
    ],
    querySchema: [
      { key: 'propertyName', label: '名称', type: 'input', match: 'fuzzy' },
      { key: 'propertyType', label: '类型', type: 'select', match: 'exact', options: ['发明专利', '实用新型', '软件著作权'] },
      { key: 'propertyStatus', label: '状态', type: 'select', match: 'exact', options: ['已授权', '受理中', '驳回', '失效'] },
      { key: 'status', label: '启停状态', type: 'select', match: 'exact', options: STATUS_OPTIONS }
    ],
    formSchema: [
      { key: 'certificateNo', label: '证书号码', type: 'input', required: true, min: 6, max: 60, pattern: '^[A-Za-z0-9\\-\\u4e00-\\u9fa5]+$', patternMessage: '证书号码格式不正确' },
      { key: 'propertyName', label: '名称', type: 'input', required: true, min: 2, max: 120 },
      { key: 'propertyType', label: '类型', type: 'select', options: ['发明专利', '实用新型', '软件著作权'], required: true },
      { key: 'propertyStatus', label: '状态', type: 'select', options: ['已授权', '受理中', '驳回', '失效'], required: true },
      { key: 'certificate', label: '证书附件', type: 'input', required: false, max: 200 },
      { key: 'status', label: '启停状态', type: 'select', options: STATUS_OPTIONS, required: true }
    ],
    rows: [
      {
        id: 'IP001',
        certificateNo: 'CN202610123456',
        propertyName: '一种配电柜温升监测方法',
        propertyType: '发明专利',
        propertyStatus: '已授权',
        certificate: 'https://example.com/ip001.pdf',
        status: '启用',
        updatedAt: '2026-04-11'
      }
    ]
  },
  'personnel-file': {
    title: '人员档案',
    prefix: 'PF',
    columns: [
      { title: '员工工号', key: 'employeeAccount', sortable: true },
      { title: '员工姓名', key: 'employeeName' },
      { title: '所属部门', key: 'sysDepart' },
      { title: '手机号码', key: 'phone' },
      { title: '身份证号码', key: 'identityNumber' },
      { title: '性别', key: 'gender' },
      { title: '入职日期', key: 'joinedDate', sortable: true },
      { title: '离职日期', key: 'terminationDate' },
      { title: '职务', key: 'duties' },
      { title: '岗位', key: 'position' },
      { title: '学历', key: 'education' },
      { title: '专业', key: 'speciality' },
      { title: '聘用方式', key: 'employmentMethod' },
      { title: '参与研发活动最高比例(%)', key: 'participationRatio' },
      { title: '未参与研发活动归属项目类型', key: 'unparticipationType' },
      { title: '年龄', key: 'age' },
      { title: '职称', key: 'professionalTitle' },
      { title: '研发类型', key: 'employeeResearchType' },
      { title: '代填人', key: 'agentName' },
      { title: '是否为管理人员', key: 'managerSign' },
      { title: '更新日期', key: 'updatedAt', sortable: true }
    ],
    querySchema: [
      { key: 'employeeName', label: '姓名', type: 'input', match: 'fuzzy' },
      { key: 'employeeAccount', label: '员工工号', type: 'input', match: 'fuzzy' },
      { key: 'phone', label: '手机号', type: 'input', match: 'fuzzy' },
      { key: 'sysDepart', label: '所属部门', type: 'input', match: 'fuzzy' },
      { key: 'employmentMethod', label: '聘用方式', type: 'select', match: 'exact', options: ['劳动合同', '劳务外包', '兼职聘用'] },
      { key: 'position', label: '岗位', type: 'input', match: 'fuzzy' },
      { key: 'status', label: '状态', type: 'select', match: 'exact', options: STATUS_OPTIONS }
    ],
    formSchema: [
      { key: 'sysDepart', label: '所属部门', type: 'input', required: true, min: 2, max: 40 },
      { key: 'employeeAccount', label: '员工工号', type: 'input', required: true, min: 2, max: 30, pattern: '^[A-Z0-9_-]+$', patternMessage: '员工工号仅支持大写字母、数字、下划线、短横线' },
      { key: 'employeeName', label: '员工姓名', type: 'input', required: true, min: 2, max: 20, pattern: '^[\\u4e00-\\u9fa5A-Za-z·]{2,20}$', patternMessage: '员工姓名格式不正确' },
      { key: 'phone', label: '手机号码', type: 'input', required: true, min: 11, max: 11, pattern: '^1[3-9]\\d{9}$', patternMessage: '请输入正确的手机号码' },
      { key: 'managerSign', label: '是否为管理人员', type: 'select', options: BOOLEAN_OPTIONS, required: false },
      { key: 'identityNumber', label: '身份证号码', type: 'input', required: false, min: 15, max: 18, pattern: '^(\\d{15}|\\d{17}[0-9Xx])$', patternMessage: '身份证号码格式不正确' },
      { key: 'gender', label: '性别', type: 'select', options: ['男', '女'], required: false },
      { key: 'joinedDate', label: '入职日期', type: 'date', required: true },
      { key: 'terminationDate', label: '离职日期', type: 'date', required: false },
      { key: 'duties', label: '职务', type: 'input', required: false, max: 40 },
      { key: 'position', label: '岗位', type: 'input', required: true, min: 2, max: 40 },
      { key: 'education', label: '学历', type: 'input', required: true, min: 2, max: 20 },
      { key: 'speciality', label: '专业', type: 'input', required: false, max: 40 },
      { key: 'employmentMethod', label: '聘用方式', type: 'select', options: ['劳动合同', '劳务外包', '兼职聘用'], required: true },
      { key: 'participationRatio', label: '参与研发活动最高比例(%)', type: 'number', required: true, minValue: 0, maxValue: 100 },
      { key: 'unparticipationType', label: '未参与研发活动归属项目类型', type: 'select', options: ['研发公共类项目', '管理费用类项目', '生产成本类项目'], required: true },
      { key: 'age', label: '年龄', type: 'number', required: false, minValue: 16, maxValue: 80 },
      { key: 'professionalTitle', label: '职称', type: 'input', required: false, max: 40 },
      { key: 'employeeResearchType', label: '研发类型', type: 'select', options: ['全职', '兼职'], required: true },
      { key: 'agentAccount', label: '代填人工号', type: 'input', required: false, max: 30, pattern: '^[A-Z0-9_-]+$', patternMessage: '代填人工号格式不正确' },
      { key: 'agentName', label: '代填人', type: 'input', required: false, max: 20, pattern: '^[\\u4e00-\\u9fa5A-Za-z·]{2,20}$', patternMessage: '代填人姓名格式不正确' },
      { key: 'remark', label: '备注', type: 'textarea', required: false, max: 300 },
      { key: 'status', label: '状态', type: 'select', options: STATUS_OPTIONS, required: true }
    ],
    rows: [
      {
        id: 'PF001',
        sysDepart: '研发中心',
        employeeAccount: 'EMP-1001',
        employeeName: '易君召',
        phone: '13688889999',
        managerSign: '是',
        identityNumber: '320102199103163258',
        gender: '男',
        joinedDate: '2022-03-01',
        terminationDate: '',
        duties: '研发经理',
        position: '研发经理',
        education: '硕士',
        speciality: '电气工程',
        employmentMethod: '劳动合同',
        participationRatio: 80,
        unparticipationType: '管理费用类项目',
        age: 35,
        professionalTitle: '高级工程师',
        employeeResearchType: '兼职',
        agentAccount: 'EMP-9001',
        agentName: '人事专员',
        remark: '负责新产品研发统筹',
        status: '启用',
        updatedAt: '2026-04-09'
      },
      {
        id: 'PF002',
        sysDepart: '算法组',
        employeeAccount: 'EMP-1032',
        employeeName: '李安',
        phone: '13900001111',
        managerSign: '否',
        identityNumber: '320102199401215734',
        gender: '男',
        joinedDate: '2023-07-10',
        terminationDate: '',
        duties: '算法工程师',
        position: '高级工程师',
        education: '本科',
        speciality: '计算机科学',
        employmentMethod: '劳动合同',
        participationRatio: 100,
        unparticipationType: '研发公共类项目',
        age: 31,
        professionalTitle: '工程师',
        employeeResearchType: '全职',
        agentAccount: '',
        agentName: '',
        remark: '',
        status: '启用',
        updatedAt: '2026-04-01'
      }
    ]
  },
  'material-archive': {
    title: '物料档案',
    prefix: 'MA',
    columns: [
      { title: '物料编码', key: 'materialCode', sortable: true },
      { title: '物料名称', key: 'materialName' },
      { title: '物料类型', key: 'materialType' },
      { title: '计量单位', key: 'unit' },
      { title: '规格型号', key: 'specModel' },
      { title: '来源方式', key: 'sourceType' },
      { title: '更新日期', key: 'updatedAt', sortable: true }
    ],
    querySchema: [
      { key: 'materialCode', label: '物料编码', type: 'input', match: 'fuzzy' },
      { key: 'materialName', label: '物料名称', type: 'input', match: 'fuzzy' },
      { key: 'materialType', label: '物料类型', type: 'select', match: 'exact', options: ['样品材料', '辅料', '包装物', '废料'] },
      { key: 'status', label: '状态', type: 'select', match: 'exact', options: STATUS_OPTIONS }
    ],
    formSchema: [
      { key: 'materialCode', label: '物料编码', type: 'input', required: true, min: 4, max: 30, pattern: '^[A-Z0-9-]+$', patternMessage: '物料编码仅支持大写字母、数字、短横线' },
      { key: 'materialName', label: '物料名称', type: 'input', required: true, min: 2, max: 80 },
      { key: 'materialType', label: '物料类型', type: 'select', options: ['样品材料', '辅料', '包装物', '废料'], required: true },
      { key: 'unit', label: '计量单位', type: 'select', options: ['件', '个', '千克', '米', '套'], required: true },
      { key: 'specModel', label: '规格型号', type: 'input', required: false, max: 80 },
      { key: 'sourceType', label: '来源方式', type: 'select', options: ['外购', '自制', '委外加工'], required: true },
      { key: 'safetyStock', label: '安全库存', type: 'number', required: false, minValue: 0, maxValue: 999999 },
      { key: 'remark', label: '备注', type: 'textarea', required: false, max: 200 },
      { key: 'status', label: '状态', type: 'select', options: STATUS_OPTIONS, required: true }
    ],
    rows: [
      { id: 'MA001', materialCode: 'MAT-0001', materialName: '高频采样电阻', materialType: '样品材料', unit: '个', specModel: '1R/1%/0805', sourceType: '外购', safetyStock: 200, remark: '用于主控板样品焊接', status: '启用', updatedAt: '2026-04-10' },
      { id: 'MA002', materialCode: 'MAT-0002', materialName: '绝缘云母片', materialType: '辅料', unit: '件', specModel: '30*30*0.2mm', sourceType: '外购', safetyStock: 1000, remark: '', status: '启用', updatedAt: '2026-04-08' }
    ]
  },
  'material-flow-detail': {
    title: '物料流转明细',
    prefix: 'MF',
    columns: [
      { title: '单据编号', key: 'billNo', sortable: true },
      { title: '物料编码', key: 'materialCode' },
      { title: '物料名称', key: 'materialName' },
      { title: '流转类型', key: 'flowType' },
      { title: '数量', key: 'quantity' },
      { title: '业务日期', key: 'bizDate', sortable: true },
      { title: '关联项目', key: 'projectName' },
      { title: '更新日期', key: 'updatedAt', sortable: true }
    ],
    querySchema: [
      { key: 'billNo', label: '单据编号', type: 'input', match: 'fuzzy' },
      { key: 'materialCode', label: '物料编码', type: 'input', match: 'fuzzy' },
      { key: 'flowType', label: '流转类型', type: 'select', match: 'exact', options: ['样品入库', '样品出库', '废料入库', '废料出库'] },
      { key: 'projectName', label: '关联项目', type: 'input', match: 'fuzzy' },
      { key: 'status', label: '状态', type: 'select', match: 'exact', options: STATUS_OPTIONS }
    ],
    formSchema: [
      { key: 'billNo', label: '单据编号', type: 'input', required: true, min: 6, max: 40 },
      { key: 'materialCode', label: '物料编码', type: 'input', required: true, min: 4, max: 30 },
      { key: 'materialName', label: '物料名称', type: 'input', required: true, min: 2, max: 80 },
      { key: 'flowType', label: '流转类型', type: 'select', options: ['样品入库', '样品出库', '废料入库', '废料出库'], required: true },
      { key: 'quantity', label: '数量', type: 'number', required: true, minValue: 0.001, maxValue: 99999999 },
      { key: 'unit', label: '计量单位', type: 'select', options: ['件', '个', '千克', '米', '套'], required: true },
      { key: 'bizDate', label: '业务日期', type: 'date', required: true },
      { key: 'projectName', label: '关联项目', type: 'input', required: false, max: 80 },
      { key: 'remark', label: '备注', type: 'textarea', required: false, max: 200 },
      { key: 'status', label: '状态', type: 'select', options: STATUS_OPTIONS, required: true }
    ],
    rows: [
      { id: 'MF001', billNo: 'FLOW-202604-001', materialCode: 'MAT-0001', materialName: '高频采样电阻', flowType: '样品入库', quantity: 500, unit: '个', bizDate: '2026-04-05', projectName: '新一代智能配电终端', remark: '', status: '启用', updatedAt: '2026-04-05' },
      { id: 'MF002', billNo: 'FLOW-202604-014', materialCode: 'MAT-0002', materialName: '绝缘云母片', flowType: '样品出库', quantity: 80, unit: '件', bizDate: '2026-04-12', projectName: '高压柜温升优化项目', remark: '试制领用', status: '草稿', updatedAt: '2026-04-12' }
    ]
  },
  'origin-stock-file': {
    title: '期初库存文件',
    prefix: 'OS',
    columns: [
      { title: '文件编号', key: 'fileNo', sortable: true },
      { title: '仓库', key: 'warehouse' },
      { title: '期间', key: 'period' },
      { title: '导入时间', key: 'importedAt', sortable: true },
      { title: '导入人', key: 'importer' },
      { title: '记录数', key: 'recordCount' },
      { title: '更新日期', key: 'updatedAt', sortable: true }
    ],
    querySchema: [
      { key: 'fileNo', label: '文件编号', type: 'input', match: 'fuzzy' },
      { key: 'warehouse', label: '仓库', type: 'input', match: 'fuzzy' },
      { key: 'period', label: '期间', type: 'input', match: 'fuzzy' },
      { key: 'status', label: '状态', type: 'select', match: 'exact', options: STATUS_OPTIONS }
    ],
    formSchema: [
      { key: 'fileNo', label: '文件编号', type: 'input', required: true, min: 6, max: 40 },
      { key: 'warehouse', label: '仓库', type: 'input', required: true, min: 2, max: 60 },
      { key: 'period', label: '期间', type: 'input', required: true, min: 6, max: 20, placeholder: '如 2026-01' },
      { key: 'importedAt', label: '导入时间', type: 'date', required: true },
      { key: 'importer', label: '导入人', type: 'input', required: true, min: 2, max: 20 },
      { key: 'recordCount', label: '记录数', type: 'number', required: true, minValue: 1, maxValue: 999999 },
      { key: 'attachment', label: '附件地址', type: 'input', required: false, max: 200 },
      { key: 'remark', label: '备注', type: 'textarea', required: false, max: 200 },
      { key: 'status', label: '状态', type: 'select', options: STATUS_OPTIONS, required: true }
    ],
    rows: [
      { id: 'OS001', fileNo: 'INIT-STOCK-202601', warehouse: '研发样品库', period: '2026-01', importedAt: '2026-01-03', importer: '易君召', recordCount: 146, attachment: 'https://example.com/init-stock-202601.xlsx', remark: '', status: '启用', updatedAt: '2026-01-03' }
    ]
  },
  'sample-stock-in': {
    title: '样品入库',
    prefix: 'SI',
    columns: [
      { title: '入库单号', key: 'inNo', sortable: true },
      { title: '物料编码', key: 'materialCode' },
      { title: '物料名称', key: 'materialName' },
      { title: '入库数量', key: 'quantity' },
      { title: '入库日期', key: 'inDate', sortable: true },
      { title: '仓库', key: 'warehouse' },
      { title: '更新日期', key: 'updatedAt', sortable: true }
    ],
    querySchema: [
      { key: 'inNo', label: '入库单号', type: 'input', match: 'fuzzy' },
      { key: 'materialCode', label: '物料编码', type: 'input', match: 'fuzzy' },
      { key: 'warehouse', label: '仓库', type: 'input', match: 'fuzzy' },
      { key: 'status', label: '状态', type: 'select', match: 'exact', options: STATUS_OPTIONS }
    ],
    formSchema: [
      { key: 'inNo', label: '入库单号', type: 'input', required: true, min: 6, max: 40 },
      { key: 'materialCode', label: '物料编码', type: 'input', required: true, min: 4, max: 30 },
      { key: 'materialName', label: '物料名称', type: 'input', required: true, min: 2, max: 80 },
      { key: 'quantity', label: '入库数量', type: 'number', required: true, minValue: 0.001, maxValue: 99999999 },
      { key: 'unit', label: '计量单位', type: 'select', options: ['件', '个', '千克', '米', '套'], required: true },
      { key: 'inDate', label: '入库日期', type: 'date', required: true },
      { key: 'warehouse', label: '仓库', type: 'input', required: true, min: 2, max: 60 },
      { key: 'supplier', label: '供应商', type: 'input', required: false, max: 80 },
      { key: 'remark', label: '备注', type: 'textarea', required: false, max: 200 },
      { key: 'status', label: '状态', type: 'select', options: STATUS_OPTIONS, required: true }
    ],
    rows: [
      { id: 'SI001', inNo: 'SI-202604-001', materialCode: 'MAT-0001', materialName: '高频采样电阻', quantity: 500, unit: '个', inDate: '2026-04-05', warehouse: '研发样品库', supplier: '南京元芯电子', remark: '', status: '启用', updatedAt: '2026-04-05' }
    ]
  },
  'scrap-stock-in': {
    title: '废料入库',
    prefix: 'RI',
    columns: [
      { title: '入库单号', key: 'inNo', sortable: true },
      { title: '废料编码', key: 'materialCode' },
      { title: '废料名称', key: 'materialName' },
      { title: '入库重量(kg)', key: 'quantity' },
      { title: '入库日期', key: 'inDate', sortable: true },
      { title: '仓库', key: 'warehouse' },
      { title: '更新日期', key: 'updatedAt', sortable: true }
    ],
    querySchema: [
      { key: 'inNo', label: '入库单号', type: 'input', match: 'fuzzy' },
      { key: 'materialName', label: '废料名称', type: 'input', match: 'fuzzy' },
      { key: 'warehouse', label: '仓库', type: 'input', match: 'fuzzy' },
      { key: 'status', label: '状态', type: 'select', match: 'exact', options: STATUS_OPTIONS }
    ],
    formSchema: [
      { key: 'inNo', label: '入库单号', type: 'input', required: true, min: 6, max: 40 },
      { key: 'materialCode', label: '废料编码', type: 'input', required: true, min: 4, max: 30 },
      { key: 'materialName', label: '废料名称', type: 'input', required: true, min: 2, max: 80 },
      { key: 'quantity', label: '入库重量(kg)', type: 'number', required: true, minValue: 0.001, maxValue: 99999999 },
      { key: 'inDate', label: '入库日期', type: 'date', required: true },
      { key: 'warehouse', label: '仓库', type: 'input', required: true, min: 2, max: 60 },
      { key: 'processor', label: '处理人', type: 'input', required: false, max: 20 },
      { key: 'remark', label: '备注', type: 'textarea', required: false, max: 200 },
      { key: 'status', label: '状态', type: 'select', options: STATUS_OPTIONS, required: true }
    ],
    rows: [
      { id: 'RI001', inNo: 'RI-202604-003', materialCode: 'SCRAP-001', materialName: '线路板边角料', quantity: 12.6, inDate: '2026-04-11', warehouse: '废料暂存区', processor: '张工', remark: '', status: '启用', updatedAt: '2026-04-11' }
    ]
  },
  'sample-stock-out': {
    title: '样品出库',
    prefix: 'SO',
    columns: [
      { title: '出库单号', key: 'outNo', sortable: true },
      { title: '物料编码', key: 'materialCode' },
      { title: '物料名称', key: 'materialName' },
      { title: '出库数量', key: 'quantity' },
      { title: '出库日期', key: 'outDate', sortable: true },
      { title: '领用项目', key: 'projectName' },
      { title: '更新日期', key: 'updatedAt', sortable: true }
    ],
    querySchema: [
      { key: 'outNo', label: '出库单号', type: 'input', match: 'fuzzy' },
      { key: 'materialCode', label: '物料编码', type: 'input', match: 'fuzzy' },
      { key: 'projectName', label: '领用项目', type: 'input', match: 'fuzzy' },
      { key: 'status', label: '状态', type: 'select', match: 'exact', options: STATUS_OPTIONS }
    ],
    formSchema: [
      { key: 'outNo', label: '出库单号', type: 'input', required: true, min: 6, max: 40 },
      { key: 'materialCode', label: '物料编码', type: 'input', required: true, min: 4, max: 30 },
      { key: 'materialName', label: '物料名称', type: 'input', required: true, min: 2, max: 80 },
      { key: 'quantity', label: '出库数量', type: 'number', required: true, minValue: 0.001, maxValue: 99999999 },
      { key: 'unit', label: '计量单位', type: 'select', options: ['件', '个', '千克', '米', '套'], required: true },
      { key: 'outDate', label: '出库日期', type: 'date', required: true },
      { key: 'projectName', label: '领用项目', type: 'input', required: true, min: 2, max: 80 },
      { key: 'receiver', label: '领用人', type: 'input', required: false, max: 20 },
      { key: 'remark', label: '备注', type: 'textarea', required: false, max: 200 },
      { key: 'status', label: '状态', type: 'select', options: STATUS_OPTIONS, required: true }
    ],
    rows: [
      { id: 'SO001', outNo: 'SO-202604-009', materialCode: 'MAT-0001', materialName: '高频采样电阻', quantity: 120, unit: '个', outDate: '2026-04-12', projectName: '高压柜温升优化项目', receiver: '易君召', remark: '', status: '启用', updatedAt: '2026-04-12' }
    ]
  },
  'scrap-stock-out': {
    title: '废料出库',
    prefix: 'RO',
    columns: [
      { title: '出库单号', key: 'outNo', sortable: true },
      { title: '废料编码', key: 'materialCode' },
      { title: '废料名称', key: 'materialName' },
      { title: '出库重量(kg)', key: 'quantity' },
      { title: '出库日期', key: 'outDate', sortable: true },
      { title: '处理方式', key: 'processType' },
      { title: '更新日期', key: 'updatedAt', sortable: true }
    ],
    querySchema: [
      { key: 'outNo', label: '出库单号', type: 'input', match: 'fuzzy' },
      { key: 'materialName', label: '废料名称', type: 'input', match: 'fuzzy' },
      { key: 'processType', label: '处理方式', type: 'select', match: 'exact', options: ['报废处理', '回收处理'] },
      { key: 'status', label: '状态', type: 'select', match: 'exact', options: STATUS_OPTIONS }
    ],
    formSchema: [
      { key: 'outNo', label: '出库单号', type: 'input', required: true, min: 6, max: 40 },
      { key: 'materialCode', label: '废料编码', type: 'input', required: true, min: 4, max: 30 },
      { key: 'materialName', label: '废料名称', type: 'input', required: true, min: 2, max: 80 },
      { key: 'quantity', label: '出库重量(kg)', type: 'number', required: true, minValue: 0.001, maxValue: 99999999 },
      { key: 'outDate', label: '出库日期', type: 'date', required: true },
      { key: 'processType', label: '处理方式', type: 'select', options: ['报废处理', '回收处理'], required: true },
      { key: 'processor', label: '处理人', type: 'input', required: false, max: 20 },
      { key: 'remark', label: '备注', type: 'textarea', required: false, max: 200 },
      { key: 'status', label: '状态', type: 'select', options: STATUS_OPTIONS, required: true }
    ],
    rows: [
      { id: 'RO001', outNo: 'RO-202604-002', materialCode: 'SCRAP-001', materialName: '线路板边角料', quantity: 5.2, outDate: '2026-04-16', processType: '回收处理', processor: '周强', remark: '', status: '草稿', updatedAt: '2026-04-16' }
    ]
  },
  'material-flow-summary': {
    title: '物料流转汇总',
    prefix: 'MS',
    columns: [
      { title: '物料编码', key: 'materialCode', sortable: true },
      { title: '物料名称', key: 'materialName' },
      { title: '期初数量', key: 'openingQty' },
      { title: '入库数量', key: 'inQty' },
      { title: '出库数量', key: 'outQty' },
      { title: '结存数量', key: 'balanceQty' },
      { title: '更新日期', key: 'updatedAt', sortable: true }
    ],
    querySchema: [
      { key: 'materialCode', label: '物料编码', type: 'input', match: 'fuzzy' },
      { key: 'materialName', label: '物料名称', type: 'input', match: 'fuzzy' },
      { key: 'status', label: '状态', type: 'select', match: 'exact', options: STATUS_OPTIONS }
    ],
    formSchema: [
      { key: 'materialCode', label: '物料编码', type: 'input', required: true, min: 4, max: 30 },
      { key: 'materialName', label: '物料名称', type: 'input', required: true, min: 2, max: 80 },
      { key: 'openingQty', label: '期初数量', type: 'number', required: true, minValue: 0, maxValue: 99999999 },
      { key: 'inQty', label: '入库数量', type: 'number', required: true, minValue: 0, maxValue: 99999999 },
      { key: 'outQty', label: '出库数量', type: 'number', required: true, minValue: 0, maxValue: 99999999 },
      { key: 'balanceQty', label: '结存数量', type: 'number', required: true, minValue: 0, maxValue: 99999999 },
      { key: 'remark', label: '备注', type: 'textarea', required: false, max: 200 },
      { key: 'status', label: '状态', type: 'select', options: STATUS_OPTIONS, required: true }
    ],
    rows: [
      { id: 'MS001', materialCode: 'MAT-0001', materialName: '高频采样电阻', openingQty: 320, inQty: 500, outQty: 120, balanceQty: 700, remark: '', status: '启用', updatedAt: '2026-04-16' }
    ]
  },
  'sample-other-stock-summary': {
    title: '样品及其他收发存汇总',
    prefix: 'SS',
    columns: [
      { title: '统计维度', key: 'summaryType' },
      { title: '物料编码', key: 'materialCode', sortable: true },
      { title: '物料名称', key: 'materialName' },
      { title: '收(入库)', key: 'receivedQty' },
      { title: '发(出库)', key: 'issuedQty' },
      { title: '存(结余)', key: 'stockQty' },
      { title: '更新日期', key: 'updatedAt', sortable: true }
    ],
    querySchema: [
      { key: 'summaryType', label: '统计维度', type: 'select', match: 'exact', options: ['样品', '废料', '其他'] },
      { key: 'materialCode', label: '物料编码', type: 'input', match: 'fuzzy' },
      { key: 'materialName', label: '物料名称', type: 'input', match: 'fuzzy' },
      { key: 'status', label: '状态', type: 'select', match: 'exact', options: STATUS_OPTIONS }
    ],
    formSchema: [
      { key: 'summaryType', label: '统计维度', type: 'select', options: ['样品', '废料', '其他'], required: true },
      { key: 'materialCode', label: '物料编码', type: 'input', required: true, min: 4, max: 30 },
      { key: 'materialName', label: '物料名称', type: 'input', required: true, min: 2, max: 80 },
      { key: 'receivedQty', label: '收(入库)', type: 'number', required: true, minValue: 0, maxValue: 99999999 },
      { key: 'issuedQty', label: '发(出库)', type: 'number', required: true, minValue: 0, maxValue: 99999999 },
      { key: 'stockQty', label: '存(结余)', type: 'number', required: true, minValue: 0, maxValue: 99999999 },
      { key: 'remark', label: '备注', type: 'textarea', required: false, max: 200 },
      { key: 'status', label: '状态', type: 'select', options: STATUS_OPTIONS, required: true }
    ],
    rows: [
      { id: 'SS001', summaryType: '样品', materialCode: 'MAT-0001', materialName: '高频采样电阻', receivedQty: 500, issuedQty: 120, stockQty: 700, remark: '', status: '启用', updatedAt: '2026-04-16' },
      { id: 'SS002', summaryType: '废料', materialCode: 'SCRAP-001', materialName: '线路板边角料', receivedQty: 12.6, issuedQty: 5.2, stockQty: 7.4, remark: '', status: '启用', updatedAt: '2026-04-16' }
    ]
  },
  'requisition-form': {
    title: '领料单',
    prefix: 'RF',
    columns: [
      { title: '领料单号', key: 'requisitionNo', sortable: true },
      { title: '项目名称', key: 'projectName' },
      { title: '领料部门', key: 'department' },
      { title: '领料人', key: 'receiver' },
      { title: '领料日期', key: 'requisitionDate', sortable: true },
      { title: '审核状态', key: 'approveStatus' },
      { title: '更新日期', key: 'updatedAt', sortable: true }
    ],
    querySchema: [
      { key: 'requisitionNo', label: '领料单号', type: 'input', match: 'fuzzy' },
      { key: 'projectName', label: '项目名称', type: 'input', match: 'fuzzy' },
      { key: 'department', label: '领料部门', type: 'input', match: 'fuzzy' },
      { key: 'approveStatus', label: '审核状态', type: 'select', match: 'exact', options: ['待审核', '已通过', '已驳回'] },
      { key: 'status', label: '状态', type: 'select', match: 'exact', options: STATUS_OPTIONS }
    ],
    formSchema: [
      { key: 'requisitionNo', label: '领料单号', type: 'input', required: true, min: 6, max: 40 },
      { key: 'projectName', label: '项目名称', type: 'input', required: true, min: 2, max: 80 },
      { key: 'department', label: '领料部门', type: 'input', required: true, min: 2, max: 60 },
      { key: 'receiver', label: '领料人', type: 'input', required: true, min: 2, max: 20 },
      { key: 'requisitionDate', label: '领料日期', type: 'date', required: true },
      { key: 'approveStatus', label: '审核状态', type: 'select', options: ['待审核', '已通过', '已驳回'], required: true },
      { key: 'materialCode', label: '物料编码', type: 'input', required: true, min: 4, max: 30 },
      { key: 'materialName', label: '物料名称', type: 'input', required: true, min: 2, max: 80 },
      { key: 'quantity', label: '领料数量', type: 'number', required: true, minValue: 0.001, maxValue: 99999999 },
      { key: 'remark', label: '备注', type: 'textarea', required: false, max: 200 },
      { key: 'status', label: '状态', type: 'select', options: STATUS_OPTIONS, required: true }
    ],
    rows: [
      { id: 'RF001', requisitionNo: 'REQ-202604-021', projectName: '高压柜温升优化项目', department: '研发测试部', receiver: '易君召', requisitionDate: '2026-04-12', approveStatus: '已通过', materialCode: 'MAT-0001', materialName: '高频采样电阻', quantity: 120, remark: '试制B样', status: '启用', updatedAt: '2026-04-13' }
    ]
  }
}

const ARCHIVE_NAME_POOL = ['张敏', '王磊', '李娜', '周强', '陈杰', '刘洋', '赵婷', '孙浩', '吴迪', '郑楠', '冯倩', '郭凯']
const ARCHIVE_DEPT_POOL = ['研发一部', '研发二部', '研发测试部', '工艺工程部', '质量部', '信息化部']
const ARCHIVE_PROJECT_POOL = ['高压柜温升优化项目', '智能配电终端升级项目', '电机驱动算法优化项目', '工业网关可靠性提升项目']
const ARCHIVE_STATUS_POOL = ['启用', '停用', '草稿']
const ARCHIVE_APPROVE_POOL = ['待审核', '已通过', '已驳回']

function pad2(n) {
  return String(n).padStart(2, '0')
}

function shiftDate(isoDate, offsetDays) {
  const t = Date.parse(isoDate)
  if (!Number.isFinite(t)) return isoDate
  const d = new Date(t + offsetDays * 24 * 60 * 60 * 1000)
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`
}

function shiftMonth(yyyyMm, offsetMonths) {
  const m = String(yyyyMm || '').match(/^(\d{4})-(\d{2})$/)
  if (!m) return yyyyMm
  const year = Number(m[1])
  const month = Number(m[2]) - 1
  const date = new Date(year, month + offsetMonths, 1)
  return `${date.getFullYear()}-${pad2(date.getMonth() + 1)}`
}

function withSeq(raw, seq) {
  const s = String(raw || '')
  if (!s) return s
  if (/^\d+$/.test(s)) return `${s.slice(0, Math.max(0, s.length - 3))}${String(seq).padStart(3, '0')}`
  if (/[A-Z]+-\d+$/i.test(s)) return s.replace(/\d+$/, String(seq).padStart(3, '0'))
  if (/(\d{4})(\d{2})(\d{2})/.test(s)) return `${s}-${String(seq).padStart(2, '0')}`
  if (/^\w+\d+$/.test(s)) return s.replace(/\d+$/, String(seq).padStart(3, '0'))
  return `${s}-${String(seq).padStart(2, '0')}`
}

function enrichArchiveRow(baseRow, seq) {
  const row = { ...baseRow }
  const dayOffset = seq * 2
  const monthOffset = seq % 8

  Object.keys(row).forEach((key) => {
    const value = row[key]
    if (key === 'id') return

    if (key === 'status') {
      row[key] = ARCHIVE_STATUS_POOL[(seq - 1) % ARCHIVE_STATUS_POOL.length]
      return
    }
    if (key === 'approveStatus') {
      row[key] = ARCHIVE_APPROVE_POOL[(seq - 1) % ARCHIVE_APPROVE_POOL.length]
      return
    }
    if (key === 'year') {
      row[key] = String(2025 + (seq % 2))
      return
    }
    if (key === 'projectName') {
      row[key] = ARCHIVE_PROJECT_POOL[(seq - 1) % ARCHIVE_PROJECT_POOL.length]
      return
    }
    if (key === 'receiver' || key === 'userName' || key === 'legalRepresentative' || key === 'processor' || key === 'createBy') {
      row[key] = ARCHIVE_NAME_POOL[(seq - 1) % ARCHIVE_NAME_POOL.length]
      return
    }
    if (key === 'useDepartment' || key === 'department') {
      row[key] = ARCHIVE_DEPT_POOL[(seq - 1) % ARCHIVE_DEPT_POOL.length]
      return
    }

    if (typeof value === 'number') {
      const delta = Math.max(1, Math.round(Math.abs(value) * 0.03))
      row[key] = Number((value + seq * delta).toFixed(3))
      return
    }

    if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
      row[key] = shiftDate(value, dayOffset)
      return
    }

    if (typeof value === 'string' && /^\d{4}-\d{2}$/.test(value)) {
      row[key] = shiftMonth(value, monthOffset)
      return
    }

    if (typeof value === 'string') {
      const lowerKey = key.toLowerCase()
      if (
        lowerKey.includes('code') ||
        lowerKey.includes('no') ||
        lowerKey.includes('account') ||
        lowerKey.includes('bill') ||
        lowerKey.includes('ledger')
      ) {
        row[key] = withSeq(value, seq)
      }
    }
  })

  return row
}

function expandArchiveModuleRows(modules) {
  const entries = Object.entries(modules)
  entries.forEach(([moduleKey, moduleCfg], moduleIndex) => {
    const baseRows = Array.isArray(moduleCfg.rows) ? moduleCfg.rows : []
    if (!baseRows.length) return

    const targetSize = 12 + (moduleIndex % 5) // 12-16
    const nextRows = baseRows.map((row) => ({ ...row }))
    let cursor = 0

    while (nextRows.length < targetSize) {
      const template = baseRows[cursor % baseRows.length]
      const seq = nextRows.length + 1
      const next = enrichArchiveRow(template, seq)
      next.id = `${moduleCfg.prefix}${String(seq).padStart(3, '0')}`
      nextRows.push(next)
      cursor++
    }

    modules[moduleKey].rows = nextRows
  })
}

expandArchiveModuleRows(MODULES)

const db = Object.fromEntries(
  Object.entries(MODULES).map(([k, v]) => [k, v.rows.map((row) => ({ ...row }))])
)

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
        return String(row[field.key] || '').toLowerCase().includes(String(val).toLowerCase())
      }

      if (field.match === 'range' && Array.isArray(val) && val.length === 2) {
        const [start, end] = val
        const startDay = String(start).slice(0, 10)
        const endDay = String(end).slice(0, 10)
        const rowStart = String(row.startDate || row.updatedAt || '')
        return rowStart >= startDay && rowStart <= endDay
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

export async function fetchArchiveModuleMeta(moduleKey) {
  await delay()
  const cfg = MODULES[moduleKey]
  if (!cfg) throw new Error('模块不存在')
  return clone({ title: cfg.title, columns: cfg.columns, querySchema: cfg.querySchema, formSchema: cfg.formSchema })
}

export async function fetchArchiveList({ moduleKey, filters, page = 1, pageSize = 10, sortKey = '', sortOrder = '' }) {
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

export async function fetchArchiveDetail({ moduleKey, id }) {
  await delay()
  const rows = db[moduleKey] || []
  return clone(rows.find((r) => r.id === id) || null)
}

export async function saveArchiveRecord({ moduleKey, record }) {
  await delay()
  const cfg = MODULES[moduleKey]
  if (!cfg) throw new Error('模块不存在')
  const rows = db[moduleKey]

  const payload = { ...record }
  if (payload.dateRange && Array.isArray(payload.dateRange)) {
    payload.startDate = String(payload.dateRange[0]).slice(0, 10)
    payload.endDate = String(payload.dateRange[1]).slice(0, 10)
  }

  const idx = rows.findIndex((r) => r.id === payload.id)
  if (idx >= 0) {
    rows[idx] = { ...rows[idx], ...payload, updatedAt: today() }
    return clone(rows[idx])
  }

  const row = { id: nextId(cfg.prefix, rows), status: '启用', updatedAt: today(), ...payload }
  rows.unshift(row)
  return clone(row)
}

export async function deleteArchiveRecord({ moduleKey, id }) {
  await delay(180)
  const rows = db[moduleKey] || []
  const idx = rows.findIndex((r) => r.id === id)
  if (idx >= 0) rows.splice(idx, 1)
  return { success: idx >= 0 }
}

export async function batchDeleteArchiveRecords({ moduleKey, ids }) {
  await delay(220)
  const rows = db[moduleKey] || []
  const before = rows.length
  const idSet = new Set(ids || [])
  db[moduleKey] = rows.filter((r) => !idSet.has(r.id))
  return { success: true, removed: before - db[moduleKey].length }
}

export async function exportArchiveRecords({ moduleKey, filters }) {
  await delay(260)
  const cfg = MODULES[moduleKey]
  if (!cfg) throw new Error('模块不存在')
  const rows = applyFilters(db[moduleKey] || [], cfg.querySchema, filters)
  return {
    filename: `${moduleKey}-${Date.now()}`,
    rows: clone(rows)
  }
}

export async function importArchiveRecords({ moduleKey, records }) {
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
