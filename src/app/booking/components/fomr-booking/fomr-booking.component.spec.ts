import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FomrBookingComponent } from './fomr-booking.component';

describe('FomrBookingComponent', () => {
  let component: FomrBookingComponent;
  let fixture: ComponentFixture<FomrBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FomrBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FomrBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
