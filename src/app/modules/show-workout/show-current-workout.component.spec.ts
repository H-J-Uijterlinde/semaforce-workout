import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCurrentWorkoutComponent } from './show-current-workout.component';

describe('ShowCurrentWorkoutComponent', () => {
  let component: ShowCurrentWorkoutComponent;
  let fixture: ComponentFixture<ShowCurrentWorkoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCurrentWorkoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCurrentWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
