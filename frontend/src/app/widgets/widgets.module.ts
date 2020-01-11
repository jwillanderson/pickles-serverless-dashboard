import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from './clock/clock.component';
import { GridsterModule } from 'angular-gridster2';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { ExampleWidgetComponent } from './example-widget/example-widget.component';
import { CountingWidgetComponent } from './counting-widget/counting-widget.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    ClockComponent,
    ExampleWidgetComponent,
    CountingWidgetComponent
  ],
  exports: [
    ClockComponent,
    ExampleWidgetComponent,
    CountingWidgetComponent
  ],
  imports: [
    GridsterModule,
    CommonModule,
    MatCardModule,
    MatListModule,
    AngularFontAwesomeModule,
    GridsterModule,
    HttpClientModule,
    MatListModule,
    FormsModule
  ]
})
export class WidgetsModule {
}
