import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowWorkoutCondensedComponent } from './show-workout-condensed.component';

describe('ShowWorkoutCondensedComponent', () => {
  let component: ShowWorkoutCondensedComponent;
  let fixture: ComponentFixture<ShowWorkoutCondensedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowWorkoutCondensedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowWorkoutCondensedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
