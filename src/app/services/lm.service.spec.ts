import { TestBed } from '@angular/core/testing';

import { LmService } from './lm.service';

describe('LmService', () => {
  let service: LmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
