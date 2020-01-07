import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './dashboards/index/index.component';
import { DashboardModule } from './dashboards/dashboard.module';


const routes: Routes = [
  {
    path: 'home',
    component: IndexComponent
  },
  { path: '', redirectTo: 'home', pathMatch: 'prefix' },
];

@NgModule({
  imports: [DashboardModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
