import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fomr-booking',
  templateUrl: './fomr-booking.component.html',
  styleUrls: ['./fomr-booking.component.scss']
})
export class FomrBookingComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formInit();
  }

  private formInit(): void {
    this.formGroup = this.formBuilder.group({
      ingreso: ['', Validators.required],
      salida: ['', Validators.required],
      coment: ['', Validators.required]
    });
  }

  public booking(): void {
    const data = this.formGroup.value;
    console.log('data register', data);
  }

}
