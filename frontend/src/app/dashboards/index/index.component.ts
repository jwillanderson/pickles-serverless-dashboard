import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CompactType, GridsterConfig, GridType } from "angular-gridster2";

@Component({
  selector: 'app-index-dashboard',
  templateUrl: './index.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class IndexComponent implements OnInit {

  options: GridsterConfig;

  static itemChange(item, itemComponent) {
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item, itemComponent) {
    console.info('itemResized', item, itemComponent);
  }

  ngOnInit() {
    this.options = {
      gridType: GridType.Fit,
      compactType: CompactType.None,

      minCols: 4,
      maxCols: 4,
      minRows: 4,
      margin: 5,
      maxRows: 4,
      draggable: {
        enabled: true,
      }
    };
  }

  changedOptions() {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }
}
