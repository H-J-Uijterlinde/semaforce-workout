import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCompletedWorkoutComponent } from './show-completed-workout.component';

describe('ShowCompletedWorkoutComponent', () => {
  let component: ShowCompletedWorkoutComponent;
  let fixture: ComponentFixture<ShowCompletedWorkoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCompletedWorkoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCompletedWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
