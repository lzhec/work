import { TestBed } from '@angular/core/testing';

import { MainConfigService } from './main-config.service';

describe('MainConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainConfigService = TestBed.get(MainConfigService);
    expect(service).toBeTruthy();
  });
});
