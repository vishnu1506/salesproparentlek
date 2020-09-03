import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('../app/dashboard/dashboard.module').then((e) => e.DashboardModule) },
  {
    path: 'salesprochild',
    children: [{
      path: '**',
      loadChildren: () => import('./spa-host/spa-host.module').then(m => m.SpaHostModule),
      data: { app: 'salesprochild' }
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
