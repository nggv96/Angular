import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin.component';
import { FormLoguinComponent } from './components/form-loguin/form-loguin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SigninRoutingModule } from './signin-routing.module';


@NgModule({
  declarations: [SigninComponent, FormLoguinComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    SigninRoutingModule
  ]
})
export class SigninModule { }
