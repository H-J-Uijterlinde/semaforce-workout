import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMuscleDialogComponent } from './select-muscle-dialog.component';

describe('SelectMuscleDialogComponent', () => {
  let component: SelectMuscleDialogComponent;
  let fixture: ComponentFixture<SelectMuscleDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectMuscleDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMuscleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
