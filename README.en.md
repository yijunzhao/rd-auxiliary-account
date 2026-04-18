# rd-auxiliary-account (English)

Front-end project for an RD expense compliance management system, built with Vue 3 + Vite.

## Tech Stack

- Vue 3 (`^3.5.31`)
- Vue Router 4 (`^4.6.4`)
- Naive UI (`^2.44.1`)
- ECharts (`^6.0.0`)
- XLSX (`^0.18.5`)
- Vite 8 + `@vitejs/plugin-vue` + `vite-plugin-vue-devtools`

## Runtime Requirements

- Node.js: `^20.19.0 || >=22.12.0`
- npm (project uses `package-lock.json`)

## Scripts

```bash
npm install
npm run dev      # start Vite dev server
npm run build    # production build
npm run preview  # preview built assets
```

## Current Implementation Scope

- Login page with front-end form validation and generated captcha image.
- Dashboard layout with a left navigation menu and breadcrumb metadata.
- Dashboard analysis page with ECharts gauges, pie chart, and bar chart.
- Full list/detail flows across business modules, including:
  - Search/filter
  - Sorting and pagination
  - Create/edit/view detail
  - Single and batch delete
  - Excel import/export (`.xlsx`)

## Routes and Modules

Main routes in `src/router/index.js`:

- `/login`
- `/dashboard/analysis`
- Company archive (`company/*`): 8 menu modules
- Project management (`project/*`): 8 menu modules
- RD process (`process/*`): 18 menu modules
- RD expense (`expense/*` + `compliance/expense/*`): 12 menu modules
- Material and others (`material/*`): 10 menu modules
- Expense allocation (`summary/*`): 2 menu modules
- Reports (`statements/*`): 5 menu modules

## Data Layer (Mock)

This project currently uses in-memory mock APIs, not a backend service.

- `src/mock/company/companyApi.js`
- `src/mock/project/projectApi.js`
- `src/mock/process/processApi.js` (re-export from project mock)
- `src/mock/expense/expenseApi.js`
- `src/mock/material/materialApi.js`
- `src/mock/summary/summaryApi.js`
- `src/mock/statements/statementsApi.js`

The mock layer provides metadata-driven table/form schemas and CRUD-style functions used directly by list/detail components.

## Excel Import/Export

Shared utility: `src/utils/excel.js`

- `exportRowsToExcel`: exports table rows to `.xlsx`
- `importRowsFromExcel`: reads first sheet and converts rows to JSON

List pages map visible column titles to field keys during import/export.

## Project Structure

```text
src/
  assets/                # global styles and static assets
  components/            # reusable module-level list/detail/modal components
  composables/           # shared hooks (e.g. module list reload)
  layouts/               # dashboard layout and menu shell
  mock/                  # in-memory mock APIs by business domain
  modules/               # route entry pages grouped by left menu domain
  router/                # route registry
  utils/                 # utility helpers (Excel)
  App.vue
  main.js
```

## Development Notes

- Alias `@` points to `src/` (configured in `vite.config.js` and `jsconfig.json`).
- `src/modules/*/pages/*.vue` are route entry wrappers; core logic is implemented in `src/components/*`.
- UI is primarily Chinese domain language; this is expected by current business module definitions.

## Known Boundary

- Authentication is front-end simulated (no real auth API integration).
- Business data persistence is memory-only and resets after page reload/server restart.
- No backend API proxy is configured in the current Vite config.