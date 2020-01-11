import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountingWidgetComponent } from './counting-widget.component';

describe('CountingWidgetComponent', () => {
  let component: CountingWidgetComponent;
  let fixture: ComponentFixture<CountingWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountingWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountingWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
