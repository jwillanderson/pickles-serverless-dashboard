import { Component, Inject, Input, OnInit } from '@angular/core';
import { PickleDataBaseWidgetComponent } from '../../common/pickle-data-base-widget.component';
import { PicklesService } from '../../services/pickles.service';

@Component({
  selector: 'app-example-pickle-widget',
  templateUrl: './example-widget.component.html',
  styleUrls: ['./example-widget.component.css']
})
export class ExampleWidgetComponent extends PickleDataBaseWidgetComponent {

  @Input()
  title = 'Example Pickle Data Widget';

  data: any;

  constructor(@Inject(PicklesService) picklesService: PicklesService) {
    super(picklesService);
  }

  getJobName() {
    return 'example-pickles-job';
  }

  setData(data: any) {
    this.data = data;
  }

  stringifyData() {
    return JSON.stringify(this.data);
  }
}
