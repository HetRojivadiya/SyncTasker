import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./features/dashboard/dashboard-module').then(m => m.DashboardModule) },
  { path: 'user', loadChildren: () => import('./features/user/user-module').then(m => m.UserModule) },
  { path: 'admin', loadChildren: () => import('./features/admin/admin-module').then(m => m.AdminModule) },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
