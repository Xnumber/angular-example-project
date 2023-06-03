import { TestBed } from '@angular/core/testing';

import { LoggerDependencyService } from './logger-dependency.service';

describe('LoggerDependencyService', () => {
  let service: LoggerDependencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggerDependencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
