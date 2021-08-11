import { TestBed } from '@angular/core/testing';

import { ticketService } from './ticket.service';

describe('ticketService', () => {
  let service: ticketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ticketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
