import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { LeadService } from '../../services';
import { LeadFormComponent } from './lead-form.component';
import { FormBuilder } from '@angular/forms';

describe('LeadFormComponent', () => {
  const mockLeadService = {
    addLead: () => of({})
  };
  let component: LeadFormComponent;
  let fixture: ComponentFixture<LeadFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeadFormComponent],
      providers: [
        FormBuilder,
        { provide: LeadService, useValue: mockLeadService }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LeadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
