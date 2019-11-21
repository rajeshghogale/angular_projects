import { TestBed } from '@angular/core/testing';

import { GetFormDataService } from './get-form-data.service';

describe('GetFormDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetFormDataService = TestBed.get(GetFormDataService);
    expect(service).toBeTruthy();
  });
});
