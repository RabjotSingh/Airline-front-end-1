import { TestBed } from '@angular/core/testing';

import { userregService } from './user-reg.service';

describe('UserRegService', () => {
  let service: userregService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(userregService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
