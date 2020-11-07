import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/services/booking/booking.service';
import { IBooking } from 'src/app/shared/models/booking.model';

@Component({
  selector: 'app-fomr-booking',
  templateUrl: './fomr-booking.component.html',
  styleUrls: ['./fomr-booking.component.scss']
})
export class FomrBookingComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private bookingService: BookingService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.formInit();
  }

  private formInit(): void {
    this.formGroup = this.formBuilder.group({
      booking_date_start: ['', Validators.required],
      booking_date_end: ['', Validators.required],
      comments: ['', Validators.required]
    });
  }

  public booking(): void {
    const data: IBooking = this.formGroup.value;
    data.experience_id = localStorage.getItem("experiences_id");
    console.log('data register', data);
    this.bookingService.booking(data).subscribe(
      response => {
        if(response.status === 1){
          console.log('reserva exitosa', response);
          this.router.navigate(['/home']);
        }
      });
  }

}
