import { TestBed } from '@angular/core/testing';

import { MovieModalScheduleService } from './movie-modal-schedule.service';

describe('MovieModalScheduleService', () => {
  let service: MovieModalScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieModalScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
