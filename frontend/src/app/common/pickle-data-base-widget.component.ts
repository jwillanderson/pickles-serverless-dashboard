import { OnDestroy, OnInit } from "@angular/core";
import { PickleBaseWidgetComponent } from "./pickle-base-widget.component";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { PicklesService } from "../services/pickles.service";

class PicklesResponse {
  data: any;
}

export abstract class PickleDataBaseWidgetComponent extends PickleBaseWidgetComponent implements OnInit, OnDestroy {
  private dataInterval: any;

  protected constructor(protected _picklesService: PicklesService) {
    super();
  }

  ngOnInit(): void {
    this._picklesService.getDataEmitter().subscribe((data) => {
      console.info(`Getting Data for Job: ${this.getJobName()}`);
      this.setData(data[this.getJobName()]);
      this.lastUpdated = new Date();
    })
  }

  ngOnDestroy(): void {
    clearInterval(this.dataInterval)
  }

  abstract setData(data: any);

}
