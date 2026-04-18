# rd-auxiliary-account（中文）

研发费用合规智能管理系统前端项目，基于 Vue 3 + Vite 构建。

## 技术栈

- Vue 3（`^3.5.31`）
- Vue Router 4（`^4.6.4`）
- Naive UI（`^2.44.1`）
- ECharts（`^6.0.0`）
- XLSX（`^0.18.5`）
- Vite 8 + `@vitejs/plugin-vue` + `vite-plugin-vue-devtools`

## 运行环境要求

- Node.js：`^20.19.0 || >=22.12.0`
- npm（项目使用 `package-lock.json`）

## 启动与构建

```bash
npm install
npm run dev      # 启动开发服务
npm run build    # 生产构建
npm run preview  # 预览构建产物
```

## 当前代码实现范围

- 登录页：前端表单校验 + 动态验证码图片。
- 主布局：左侧多级菜单 + 头部 + 面包屑。
- 首页看板：ECharts 仪表盘/饼图/柱状图。
- 各业务模块统一具备：
  - 查询筛选
  - 排序与分页
  - 新增/编辑/详情
  - 单条删除与批量删除
  - Excel 导入/导出（`.xlsx`）

## 路由与业务模块

核心路由位于 `src/router/index.js`：

- `/login`
- `/dashboard/analysis`
- 公司档案（`company/*`）：8 个子模块
- 项目管理（`project/*`）：8 个子模块
- 研发过程（`process/*`）：18 个子模块
- 研发支出（`expense/*` + `compliance/expense/*`）：12 个子模块
- 样品及其他管理（`material/*`）：10 个子模块
- 支出分配（`summary/*`）：2 个子模块
- 报表生成及查询（`statements/*`）：5 个子模块

## 数据层说明（Mock）

当前项目使用内存 Mock API，不依赖后端服务。

- `src/mock/company/companyApi.js`
- `src/mock/project/projectApi.js`
- `src/mock/process/processApi.js`（复用 project mock 导出）
- `src/mock/expense/expenseApi.js`
- `src/mock/material/materialApi.js`
- `src/mock/summary/summaryApi.js`
- `src/mock/statements/statementsApi.js`

Mock 层提供模块元数据（表格列、查询项、表单项、按钮文案）以及 CRUD 风格接口，页面按配置动态渲染。

## Excel 导入导出

通用工具文件：`src/utils/excel.js`

- `exportRowsToExcel`：导出 `.xlsx`
- `importRowsFromExcel`：读取首个 Sheet 并转换为 JSON

列表页会按“列表标题 <-> 字段 key”进行映射，实现可读性更高的导入导出。

## 目录结构

```text
src/
  assets/                # 全局样式与静态资源
  components/            # 按业务模块组织的通用页面组件
  composables/           # 组合式函数（如模块切换后列表重载）
  layouts/               # 主布局与菜单壳
  mock/                  # 按业务域拆分的内存 Mock API
  modules/               # 按左侧菜单划分的路由入口页
  router/                # 路由注册
  utils/                 # 工具函数（Excel）
  App.vue
  main.js
```

## 开发约定

- `@` 别名指向 `src/`（见 `vite.config.js` 与 `jsconfig.json`）。
- `src/modules/*/pages/*.vue` 主要作为路由入口，核心通用逻辑在 `src/components/*`。
- 页面与字段文案以中文业务术语为主，和当前模块配置保持一致。

## 当前边界

- 登录鉴权为前端模拟流程，未接入真实认证接口。
- 业务数据存储在内存中，刷新页面或重启开发服务后会重置。
- 当前 Vite 配置未设置后端代理。