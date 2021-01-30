import { TestBed } from '@angular/core/testing';

import { AffinityService } from './affinity.service';

describe('AffinityService', () => {
  let service: AffinityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AffinityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
