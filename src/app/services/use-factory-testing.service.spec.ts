import { TestBed } from '@angular/core/testing';

import { UseFactoryTestingService } from './use-factory-testing.service';

describe('UseFactoryTestingService', () => {
  let service: UseFactoryTestingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UseFactoryTestingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
