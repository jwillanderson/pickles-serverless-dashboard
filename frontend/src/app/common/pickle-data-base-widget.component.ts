import { OnDestroy, OnInit } from '@angular/core';
import { PickleBaseWidgetComponent } from './pickle-base-widget.component';
import { PicklesService } from '../services/pickles.service';
import { log } from 'util';

export abstract class PickleDataBaseWidgetComponent extends PickleBaseWidgetComponent implements OnInit, OnDestroy {
  private dataInterval: any;

  protected constructor(protected picklesService: PicklesService) {
    super();
  }

  ngOnInit(): void {
    this.picklesService.getDataEmitter().subscribe((data) => {
      log(`Getting Data for Job: ${this.getJobName()}`);
      this.setData(data[this.getJobName()]);
      this.lastUpdated = new Date();
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.dataInterval);
  }

  abstract getJobName();

  abstract setData(data: any);

}
