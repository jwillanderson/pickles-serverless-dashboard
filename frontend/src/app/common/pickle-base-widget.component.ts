import { Input} from "@angular/core";
import { GridsterItem } from "angular-gridster2";

export abstract class PickleBaseWidgetComponent {

  @Input()
  xPosition: number;

  @Input()
  yPosition: number;

  @Input()
  height: number;

  @Input()
  width: number;

  @Input()
  protected refreshInterval = 30000;

  protected lastUpdated = new Date();

  protected constructor() {
  }

  getItemConfiguration(): GridsterItem {
    return {
      x: this.xPosition,
      y: this.yPosition,
      cols: this.width,
      compactEnabled: true,
      rows: this.height,
    }
  }

  abstract getJobName();
}
