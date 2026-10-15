# ConstructWorx — Ionic Angular Construction Management Module

## Setup

```bash
# 1. Create a new Ionic Angular project
npm install -g @ionic/cli
ionic start constructworx blank --type=angular
cd constructworx

# 2. Install dependencies
npm install @angular/forms

# 3. Copy module files
# Drop the src/app/construction/ folder and src/app/services/ and src/app/models/
# into your Ionic project's src/app/ directory

# 4. Register routes in app-routing.module.ts
# Add this import:
import { ConstructionRoutingModule } from './construction/construction-routing.module';
# Add ConstructionRoutingModule to your @NgModule imports

# 5. Import ReactiveFormsModule in each page module that uses forms
# (daily-log.module.ts)

# 6. Run
ionic serve
```

## File Structure

```
src/app/
├── models/
│   └── construction.model.ts       ← All TypeScript interfaces
├── services/
│   └── construction.service.ts     ← Data service (swap with API calls)
└── construction/
    ├── construction-routing.module.ts
    ├── overview/
    │   ├── overview.page.ts
    │   ├── overview.page.html
    │   └── overview.page.scss
    ├── schedule/
    │   ├── schedule.page.ts
    │   └── schedule.page.html
    ├── work-orders/
    │   ├── work-orders.page.ts
    │   └── work-orders.page.html
    ├── rfis/
    │   ├── rfis.page.ts
    │   └── rfis.page.html
    ├── purchase-orders/
    │   ├── purchase-orders.page.ts
    │   └── purchase-orders.page.html
    └── daily-log/
        ├── daily-log.page.ts
        └── daily-log.page.html
```

## Modules Covered

| Module          | Features                                              |
|-----------------|-------------------------------------------------------|
| Overview        | Phase progress, daily logs, subcontractor tracking    |
| Schedule        | Gantt chart view, milestones, calendar                |
| Work Orders     | CRUD list, filter by status, assign to subcontractors |
| RFIs            | RFI log, open/closed counts, overdue tracking         |
| Purchase Orders | PO list, committed vs received amounts                |
| Daily Log Form  | Reactive form with validation, toast feedback         |

## Connecting to a Real API

Replace the mock `Observable<>` returns in `construction.service.ts`
with `HttpClient` calls:

```ts
import { HttpClient } from '@angular/common/http';

getWorkOrders(): Observable<WorkOrder[]> {
  return this.http.get<WorkOrder[]>('https://your-api.com/api/work-orders');
}
```

Add `HttpClientModule` to `app.module.ts` imports.
