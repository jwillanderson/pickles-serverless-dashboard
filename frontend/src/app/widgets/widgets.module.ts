import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from "./clock/clock.component";
import { GridsterModule } from "angular-gridster2";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { HttpClientModule } from "@angular/common/http";
import { ExampleWidgetComponent } from "./example-widget/example-widget.component";

@NgModule({
  declarations: [
    ClockComponent,
    ExampleWidgetComponent
  ],
  exports: [
    ClockComponent,
    ExampleWidgetComponent
  ],
  imports: [
    GridsterModule,
    CommonModule,
    MatCardModule,
    MatListModule,
    AngularFontAwesomeModule,
    GridsterModule,
    HttpClientModule,
    MatListModule
  ]
})
export class WidgetsModule {
}
