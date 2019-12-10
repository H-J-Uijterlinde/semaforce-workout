import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousInstantComponent } from './previous-instant.component';

describe('PreviousInstantComponent', () => {
  let component: PreviousInstantComponent;
  let fixture: ComponentFixture<PreviousInstantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousInstantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousInstantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
