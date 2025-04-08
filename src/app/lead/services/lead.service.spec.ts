import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { of } from 'rxjs';
import { LeadService } from './lead.service';
import { Lead } from '../models';

describe('LeadService', () => {
  const mockClient = {
    get: () => of({}),
    post: () => of({})
  };
  let service: LeadService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useValue: mockClient },
        HttpHandler
      ]
    });
    service = TestBed.inject(LeadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getLeads', () => {
    const spy = spyOn(mockClient, 'get');
    service.getLeads();
    expect(spy).toHaveBeenCalled();
  });

  it('#addLead', () => {
    const spy = spyOn(mockClient, 'post');
    service.addLead({} as Lead);
    expect(spy).toHaveBeenCalled();
  });
});
