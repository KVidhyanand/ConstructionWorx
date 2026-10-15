import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//'./overview/overview.module'

const routes: Routes = [
  {
    path: 'construction',
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConstructionRoutingModule {}
