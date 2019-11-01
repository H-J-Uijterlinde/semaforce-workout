import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterExercisesComponent } from './filter-exercises.component';

describe('FilterExercisesComponent', () => {
  let component: FilterExercisesComponent;
  let fixture: ComponentFixture<FilterExercisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterExercisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
