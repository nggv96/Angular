import { NgModule } from '@angular/core';
import { Page404Component } from './components/page404/page404.component';
import { RouterModule } from '@angular/router';
import { ErrorPageRoutingModule } from './error-page-routing.module';



@NgModule({
  declarations: [Page404Component],
  imports: [
    RouterModule,
    ErrorPageRoutingModule
  ]
})
export class ErrorPageModule { }
