# rd-auxiliary-account

Vue 3 + Vite implementation of an RD expense compliance management front-end.

研发费用合规智能管理系统前端，基于 Vue 3 + Vite。

## Docs / 文档

- English: [README.en.md](./README.en.md)
- 中文: [README.zh-CN.md](./README.zh-CN.md)

## Quick Snapshot / 项目快照

- Tech stack / 技术栈: Vue 3, Vue Router 4, Naive UI, ECharts, XLSX, Vite 8
- Runtime / 运行环境: Node `^20.19.0 || >=22.12.0`
- Entry routes / 入口路由: `/login`, `/dashboard/analysis`
- Data source / 数据来源: in-memory mock APIs under `src/mock/`
- Feature modules / 功能模块:
  - `company` (8)
  - `project` (8)
  - `process` (18)
  - `expense` (12)
  - `material` (10)
  - `summary` (2)
  - `statements` (5)

## Commands / 常用命令

```bash
npm install
npm run dev
npm run build
npm run preview
```