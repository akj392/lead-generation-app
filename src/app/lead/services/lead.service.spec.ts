import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { LeadService } from './lead.service';

describe('LeadService', () => {
  let service: LeadService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler]
    });
    service = TestBed.inject(LeadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
