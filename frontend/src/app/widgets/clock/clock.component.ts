import { Component, Input } from '@angular/core';
import { PickleBaseWidgetComponent } from '../../common/pickle-base-widget.component';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';
import { map, share } from 'rxjs/operators';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent extends PickleBaseWidgetComponent {

  @Input()
  private title: string;

  @Input()
  private timezone = 'Z';

  @Input()
  private dateFormat = 'd/M/yy';

  @Input()
  private timeFormat = 'hh:mm:ss aa';

  private whatTime: Observable<number>;

  constructor() {
    super();
    this.whatTime = interval(1000).pipe(
      map(x => Date.now()),
      share()
    );
  }

  getTimeZone() {
    return this.timezone;
  }

  getTimeFormat() {
    return this.timeFormat;
  }

  getDateFormat() {
    return this.dateFormat;
  }
}


