import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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

  constructor(private leadService: LeadService) { }

  ngOnInit(): void {
    this.leads$ = this.leadService.getLeads();
  }
}
