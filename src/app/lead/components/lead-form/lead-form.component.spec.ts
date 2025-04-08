import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { LeadService } from '../../services';
import { LeadFormComponent } from './lead-form.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

describe('LeadFormComponent', () => {
  const mockLeadService = {
    addLead: () => of({})
  };
  let component: LeadFormComponent;
  let fixture: ComponentFixture<LeadFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeadFormComponent],
      imports: [ReactiveFormsModule],
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

  it('#onCreate', async () => {
    component.leadForm.patchValue({
      name: 'Test Name',
      email: 'test@example.com'
    });
    const spy = spyOn(mockLeadService, 'addLead');
    await component.onCreate();
    expect(spy).toHaveBeenCalled();
  });

  it('should return true if the control is touched and invalid', () => {
    const controlName = 'name';
    const control = component.leadForm.controls[controlName];
    control.markAsTouched();
    control.setValue('');
    expect(component.isFormControlInvalid(controlName)).toBeTrue();
  });

  it('should return false if the control is untouched', () => {
    const controlName = 'name';
    const control = component.leadForm.controls[controlName];
    expect(component.isFormControlInvalid(controlName)).toBeFalse();
  });

  it('should return false if the control is valid', () => {
    const controlName = 'email';
    const control = component.leadForm.controls[controlName];
    control.markAsTouched();
    control.setValue('test@example.com');

    expect(component.isFormControlInvalid(controlName)).toBeFalse();
  });

  it('should return false if the control is touched but still valid', () => {
    const controlName = 'name';
    const control = component.leadForm.controls[controlName];
    control.markAsTouched();
    control.setValue('Test Name');
    expect(component.isFormControlInvalid(controlName)).toBeFalse();
  });
});
