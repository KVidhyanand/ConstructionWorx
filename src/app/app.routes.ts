import { Routes } from '@angular/router';

export const routes: Routes = [

  // ── Default redirect ─────────────────────────────────────────
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  // ── Home / Dashboard ─────────────────────────────────────────
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.page').then((m) => m.HomePage),
  },

  // ── Construction Management ──────────────────────────────────
  {
    path: 'construction',
    children: [
      {
        path: 'overview',
        loadComponent: () =>
          import('./overview/overview.page')
            .then((m) => m.ConstructionOverviewPage),
      },
      {
        path: 'work-orders',
        loadComponent: () =>
          import('./work-orders/work-orders.page')
            .then((m) => m.WorkOrdersPage),
      },
      {
        path: 'rfis',
        loadComponent: () =>
          import('./rfis/rfis.page')
            .then((m) => m.RFIsPage),
      },
      {
        path: 'purchase-orders',
        loadComponent: () =>
          import('./purchase-orders/purchase-orders.page')
            .then((m) => m.PurchaseOrdersPage),
      },
      {
        path: 'daily-log',
        loadComponent: () =>
          import('./daily-log/daily-log.page')
            .then((m) => m.DailyLogPage),
      },
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
    ],
  },

  // ── Estimating & Job Costing ─────────────────────────────────
  {
    path: 'estimating',
    children: [
      { path: '', redirectTo: 'estimates', pathMatch: 'full' },
    ],
  },

  // ── Catch-all fallback ───────────────────────────────────────
  {
    path: '**',
    redirectTo: 'home',
  },

];
