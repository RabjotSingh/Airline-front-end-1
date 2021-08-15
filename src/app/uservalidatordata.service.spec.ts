import { TestBed } from '@angular/core/testing';

import { UservalidatordataService } from './uservalidatordata.service';

describe('UservalidatordataService', () => {
  let service: UservalidatordataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UservalidatordataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
