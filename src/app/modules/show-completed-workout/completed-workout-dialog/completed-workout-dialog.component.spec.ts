import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedWorkoutDialogComponent } from './completed-workout-dialog.component';

describe('CompletedWorkoutDialogComponent', () => {
  let component: CompletedWorkoutDialogComponent;
  let fixture: ComponentFixture<CompletedWorkoutDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedWorkoutDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedWorkoutDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
