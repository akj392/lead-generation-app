import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { LeadService } from '../../services';
import { Lead } from '../../models';

@Component({
  selector: 'app-lead-form',
  templateUrl: './lead-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeadFormComponent implements OnInit {

  leadForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private titleService: Title,
    private leadService: LeadService
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('LeadCreate');
    this.leadForm = this.initializeLeadForm();
  }

  isFormControlInvalid(controlName: string) {
    const control = this.leadForm.controls[controlName];
    return control.touched && control.invalid;
  }

  onCreate() {
    const lead = new Lead(this.leadForm.value);
    this.leadService.addLead(lead)
      ?.pipe(take(1))
      ?.subscribe(() => this.router.navigateByUrl('/lead'));
  }

  initializeLeadForm() {
    return this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(40)]],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.maxLength(100)]]
    });
  }
}
