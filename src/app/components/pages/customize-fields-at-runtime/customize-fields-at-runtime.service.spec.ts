import { TestBed } from '@angular/core/testing';

import { CustomizeFieldsAtRuntimeService } from './customize-fields-at-runtime.service';

describe('CustomizeFieldsAtRuntimeService', () => {
  let service: CustomizeFieldsAtRuntimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomizeFieldsAtRuntimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
