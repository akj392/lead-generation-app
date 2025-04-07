import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { LeadService } from '../../services';
import { LeadListingComponent } from './lead-listing.component';
import { AsyncPipe } from '@angular/common';

describe('LeadListingComponent', () => {
  const mockLeadService = {
    getLeads: () => of([])
  };
  let component: LeadListingComponent;
  let fixture: ComponentFixture<LeadListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeadListingComponent],
      imports: [AsyncPipe],
      providers: [
        { provide: LeadService, useValue: mockLeadService }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LeadListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#ngOnInit', () => {
    const spy = spyOn(mockLeadService, 'getLeads');
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });
});
