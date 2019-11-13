import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExerciseGoalComponent } from './add-exercise-goal.component';

describe('AddExerciseGoalComponent', () => {
  let component: AddExerciseGoalComponent;
  let fixture: ComponentFixture<AddExerciseGoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddExerciseGoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExerciseGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
