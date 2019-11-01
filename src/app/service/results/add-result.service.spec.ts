import { TestBed } from '@angular/core/testing';

import { AddResultService } from './add-result.service';

describe('AddResultService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddResultService = TestBed.get(AddResultService);
    expect(service).toBeTruthy();
  });
});
