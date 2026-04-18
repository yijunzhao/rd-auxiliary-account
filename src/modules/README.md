# Modules Structure

本目录按左侧功能菜单分组组织页面代码，菜单与目录一一对应：

- `auth/`：登录
- `dashboard/`：首页
- `company/`：公司档案
- `project/`：项目管理
- `process/`：研发过程
- `expense/`：研发支出
- `material/`：样品及其他管理
- `summary/`：支出分配
- `statements/`：报表生成及查询
- `task/`：任务管理
- `system/`：系统管理

约定：

- 每个菜单目录下的 `pages/` 只作为路由入口，统一从 `src/components/<menu>/` 引用菜单组件。
- `src/components/` 按菜单分目录组织；组件实现优先落在对应菜单目录，避免跨菜单共享目录耦合。
- `src/mock/` 按菜单分目录组织；公共能力按业务归属落在对应菜单目录（如 `project/`、`company/`）。
- 路由统一在 `src/router/index.js` 维护。
