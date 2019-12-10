import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousWorkoutsComponent } from './previous-workouts.component';

describe('PreviousWorkoutsComponent', () => {
  let component: PreviousWorkoutsComponent;
  let fixture: ComponentFixture<PreviousWorkoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousWorkoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousWorkoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
