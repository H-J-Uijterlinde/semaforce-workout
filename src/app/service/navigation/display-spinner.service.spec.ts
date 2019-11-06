import { TestBed } from '@angular/core/testing';

import { DisplaySpinnerService } from './display-spinner.service';

describe('DisplaySpinnerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisplaySpinnerService = TestBed.get(DisplaySpinnerService);
    expect(service).toBeTruthy();
  });
});
