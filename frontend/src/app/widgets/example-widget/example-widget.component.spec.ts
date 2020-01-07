import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleWidgetComponent } from './example-widget.component';

describe('JenkinsJobStatusComponent', () => {
  let component: ExampleWidgetComponent;
  let fixture: ComponentFixture<ExampleWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
