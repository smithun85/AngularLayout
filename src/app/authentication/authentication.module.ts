import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//must be import router-module if we use routing
import { RouterModule } from '@angular/router';

//must be import form-module if we use form in this Module
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SetPasswordComponent } from './components/set-password/set-password.component';
import { OtpValidationComponent } from './components/otp-validation/otp-validation.component';


import { AuthLayoutComponent } from './auth-layout/auth-layout.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    ForgotPasswordComponent,
    SetPasswordComponent,
    OtpValidationComponent,
    AuthLayoutComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],

  exports:[
    AuthLayoutComponent 
  ]
})
export class AuthenticationModule { }
