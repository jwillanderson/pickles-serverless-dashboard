import { Component, Inject, OnInit } from '@angular/core';
import { PickleDataBaseWidgetComponent } from "../../common/pickle-data-base-widget.component";
import { PicklesService } from "../../services/pickles.service";

@Component({
  selector: 'app-example-pickle-widget',
  templateUrl: './example-widget.component.html',
  styleUrls: ['./example-widget.component.css']
})
export class ExampleWidgetComponent extends PickleDataBaseWidgetComponent {

  data: any;

  constructor(@Inject(PicklesService) _picklesService: PicklesService) {
    super(_picklesService);
  }

  getJobName() {
    return "example-pickles-job"
  }

  setData(data: any) {
    this.data = data;
  }
}
