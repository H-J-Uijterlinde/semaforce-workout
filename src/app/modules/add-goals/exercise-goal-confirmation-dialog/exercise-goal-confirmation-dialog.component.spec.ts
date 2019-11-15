import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseGoalConfirmationDialogComponent } from './exercise-goal-confirmation-dialog.component';

describe('ExerciseGoalConfirmationDialogComponent', () => {
  let component: ExerciseGoalConfirmationDialogComponent;
  let fixture: ComponentFixture<ExerciseGoalConfirmationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExerciseGoalConfirmationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseGoalConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
