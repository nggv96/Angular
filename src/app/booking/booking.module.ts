import { NgModule } from '@angular/core';
import { BookingComponent } from './booking.component';
import { FomrBookingComponent } from './components/fomr-booking/fomr-booking.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BookingRoutingModule } from './booking-routing.module';



@NgModule({
  declarations: [BookingComponent, FomrBookingComponent],
  imports: [
    ReactiveFormsModule,
    BookingRoutingModule
  ]
})
export class BookingModule { }
