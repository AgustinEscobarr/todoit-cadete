import { TestBed } from '@angular/core/testing';

import { NosignInGuard } from './nosign-in.guard';

describe('NosignInGuard', () => {
  let guard: NosignInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NosignInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
