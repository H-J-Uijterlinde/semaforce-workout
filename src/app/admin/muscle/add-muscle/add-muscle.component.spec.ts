import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMuscleComponent } from './add-muscle.component';

describe('AddMuscleComponent', () => {
  let component: AddMuscleComponent;
  let fixture: ComponentFixture<AddMuscleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMuscleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMuscleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
