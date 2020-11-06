import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { error } from 'protractor';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formInit();
  }

  private formInit(): void {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [ Validators.required, Validators.email ]],
      password: ['', [ Validators.required, Validators.maxLength(16), this.validatePassword ] ]
    });
  }

  private validatePassword (control: AbstractControl) {
    const password = control.value;
    let error = null;
    const er = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    if (!er.test(password)) {
      error = { customError: 'Debes tener almenos una mayuscula, un número y ser de minimo 8 caracteres' };
    }
    return error;
  }

  public getError (controlName: string): string {
    let error = '';
    const control = this.formGroup.get(controlName);
    if (control.touched && control.errors != null) {
      error = this.errorMapping(control.errors)
    }
    return error;
  }

  private errorMapping (errors: any): string {
    console.log('errors', errors);
    let errorsMessage = '';
    if (errors.required) {
      errorsMessage += 'Campo obligatorio. ';
    }
    if (errors.customError) {
      errorsMessage += errors.customError;
    }
    if (errors.maxlength) {
      errorsMessage += `La longitud máxima debe ser ${errors.maxlength.requiredLength}`;
    }
    if (errors.email) {
      errorsMessage += 'Debes ingresar un correo valido';
    }
    return errorsMessage;
  }

  public register(): void {
    const data = this.formGroup.value;
    console.log('data register', data);
  }

}
