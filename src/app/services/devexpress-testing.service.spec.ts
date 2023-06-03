import { TestBed } from '@angular/core/testing';

import { DevexpressTestingService } from './devexpress-testing.service';

describe('DevexpressTestingService', () => {
  let service: DevexpressTestingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevexpressTestingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
