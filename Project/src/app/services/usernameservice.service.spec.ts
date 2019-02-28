import { TestBed } from '@angular/core/testing';

import { UsernameserviceService } from './usernameservice.service';

describe('UsernameserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsernameserviceService = TestBed.get(UsernameserviceService);
    expect(service).toBeTruthy();
  });
});
