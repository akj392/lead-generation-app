import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lead } from '../models';

@Injectable({
  providedIn: 'root'
})
export class LeadService {

  private readonly baseUrl = 'http://localhost:3000/leads'

  constructor(private readonly httpClient: HttpClient) { }

  addLead(lead: Lead) {
    return this.httpClient.post(this.baseUrl, lead);
  }

  getLeads(): Observable<Lead[]> {
    return this.httpClient.get<Lead[]>(this.baseUrl);
  }
}
