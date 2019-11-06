import { TestBed } from '@angular/core/testing';

import { AllTrainingdaysResolverService } from './all-trainingdays-resolver.service';

describe('AllTrainingdaysResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllTrainingdaysResolverService = TestBed.get(AllTrainingdaysResolverService);
    expect(service).toBeTruthy();
  });
});
