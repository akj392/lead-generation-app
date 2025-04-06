import { Component, OnInit } from '@angular/core';
import { LeadService } from '../../services';

@Component({
  selector: 'app-lead-form',
  templateUrl: './lead-form.component.html',
  styleUrls: ['./lead-form.component.scss']
})
export class LeadFormComponent implements OnInit {

  constructor(private readonly leadService: LeadService) { }

  ngOnInit(): void {
  }

}
