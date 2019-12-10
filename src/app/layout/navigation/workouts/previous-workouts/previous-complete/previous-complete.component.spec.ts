import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousCompleteComponent } from './previous-complete.component';

describe('PreviousCompleteComponent', () => {
  let component: PreviousCompleteComponent;
  let fixture: ComponentFixture<PreviousCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
