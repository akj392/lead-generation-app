import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadListingComponent } from './lead-listing.component';

describe('LeadListingComponent', () => {
  let component: LeadListingComponent;
  let fixture: ComponentFixture<LeadListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadListingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeadListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
