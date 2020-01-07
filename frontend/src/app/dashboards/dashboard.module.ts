import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from "./index/index.component";
import { GridsterModule } from "angular-gridster2";
import { WidgetsModule } from "../widgets/widgets.module";


@NgModule({
  declarations: [
    IndexComponent,
  ],
  imports: [
    GridsterModule,
    WidgetsModule,
    CommonModule
  ]
})
export class DashboardModule { }
