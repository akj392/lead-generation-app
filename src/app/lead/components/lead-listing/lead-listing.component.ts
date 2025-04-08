import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable, take } from 'rxjs';
import { LeadService } from '../../services';
import { Lead } from '../../models';

@Component({
  selector: 'app-lead-listing',
  templateUrl: './lead-listing.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeadListingComponent implements OnInit {

  leads$: Observable<Lead[]>;

  constructor(
    private titleService: Title,
    private leadService: LeadService
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('LeadListing');
    this.leads$ = this.leadService.getLeads();
  }
}
