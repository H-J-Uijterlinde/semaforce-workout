import { TestBed } from '@angular/core/testing';

import { AllTrainingDaysResolverService } from './all-training-days-resolver.service';

describe('AllTrainingDaysResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllTrainingDaysResolverService = TestBed.get(AllTrainingDaysResolverService);
    expect(service).toBeTruthy();
  });
});
