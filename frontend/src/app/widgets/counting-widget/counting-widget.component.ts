import { Component, Input, OnInit } from '@angular/core';
import { PickleBaseWidgetComponent } from '../../common/pickle-base-widget.component';
import { log } from 'util';

@Component({
  selector: 'app-counting-widget',
  templateUrl: './counting-widget.component.html',
  styleUrls: ['./counting-widget.component.css']
})
export class CountingWidgetComponent extends PickleBaseWidgetComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  currentValue = 0;

  private readonly DEFAULT_STARTING_SUBTRACTIVE = 8;

  constructor() {
    super();
  }

  async ngOnInit(): Promise<void> {
    const finishingValue = this.currentValue;
    let timerMultiplier = 0;
    for (let i = this.getStartingValue(); i <= finishingValue; i++) {
      log(`Current Value: ${i}`);
      await this.delay(50 * (timerMultiplier / 2));
      timerMultiplier++;
      this.currentValue = i;
    }
  }

  async delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private getStartingValue = (): number => {
    return this.currentValue - this.DEFAULT_STARTING_SUBTRACTIVE;
  }
}
