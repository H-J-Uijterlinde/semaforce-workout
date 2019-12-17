import { TestBed } from '@angular/core/testing';

import { TrainingDayService } from './training-day.service';

describe('TrainingDayServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrainingDayService = TestBed.get(TrainingDayService);
    expect(service).toBeTruthy();
  });
});
