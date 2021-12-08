import { TestBed } from '@angular/core/testing';

import { TravelsStatusService } from './travels-status.service';

describe('TravelsStatusService', () => {
  let service: TravelsStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravelsStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
