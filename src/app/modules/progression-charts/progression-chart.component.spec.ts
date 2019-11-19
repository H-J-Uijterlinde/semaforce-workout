import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressionChartComponent } from './progression-chart.component';

describe('ProgressionChartComponent', () => {
  let component: ProgressionChartComponent;
  let fixture: ComponentFixture<ProgressionChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressionChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressionChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
