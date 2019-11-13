import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTotalWorkoutsGoalComponent } from './add-total-workouts-goal.component';

describe('AddTotalWorkoutsGoalComponent', () => {
  let component: AddTotalWorkoutsGoalComponent;
  let fixture: ComponentFixture<AddTotalWorkoutsGoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTotalWorkoutsGoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTotalWorkoutsGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
