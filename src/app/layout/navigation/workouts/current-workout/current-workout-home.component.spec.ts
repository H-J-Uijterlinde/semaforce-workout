import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWorkoutHomeComponent } from './current-workout-home.component';

describe('CurrentWorkoutHomeComponent', () => {
  let component: CurrentWorkoutHomeComponent;
  let fixture: ComponentFixture<CurrentWorkoutHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentWorkoutHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWorkoutHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
