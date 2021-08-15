import { TestBed } from '@angular/core/testing';

import { AdminvalidatordataService } from './adminvalidatordata.service';

describe('AdminvalidatordataService', () => {
  let service: AdminvalidatordataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminvalidatordataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
