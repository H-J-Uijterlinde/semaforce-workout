import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedWorkoutBottomSheetComponent } from './completed-workout-bottom-sheet.component';

describe('CompletedWorkoutBottomSheetComponent', () => {
  let component: CompletedWorkoutBottomSheetComponent;
  let fixture: ComponentFixture<CompletedWorkoutBottomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedWorkoutBottomSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedWorkoutBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
