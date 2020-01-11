import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { IndexComponent } from './dashboards/index/index.component';
import { DashboardModule } from './dashboards/dashboard.module';


interface DashboardRoute extends Route {
  name: string;
}

const routes: DashboardRoute[] = [
  {
    path: 'index',
    component: IndexComponent,
    name: 'Main Dashboard'
  }
];

@NgModule({
  imports: [DashboardModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
