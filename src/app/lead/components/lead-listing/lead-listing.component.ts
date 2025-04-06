import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { LeadService } from '../../services';
import { Lead } from '../../models';

@Component({
  selector: 'app-lead-listing',
  templateUrl: './lead-listing.component.html',
  styleUrls: ['./lead-listing.component.scss']
})
export class LeadListingComponent implements OnInit {

  leads: Lead[] = [];

  constructor(
    private leadService: LeadService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.leadService.getLeads()
      .pipe(take(1))
      .subscribe(leads => this.leads = leads);
  }

  onCreate() {
    this.router.navigate(['lead', 'create']);
  }

}
