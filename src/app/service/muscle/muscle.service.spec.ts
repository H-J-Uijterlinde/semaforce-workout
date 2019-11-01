import { TestBed } from '@angular/core/testing';

import { MuscleService } from './muscle.service';

describe('MuscleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MuscleService = TestBed.get(MuscleService);
    expect(service).toBeTruthy();
  });
});
