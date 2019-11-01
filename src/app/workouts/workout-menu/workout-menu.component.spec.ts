import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutMenuComponent } from './workout-menu.component';

describe('WorkoutMenuComponent', () => {
  let component: WorkoutMenuComponent;
  let fixture: ComponentFixture<WorkoutMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
