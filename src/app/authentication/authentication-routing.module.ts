import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { OtpValidationComponent } from './components/otp-validation/otp-validation.component';
import { SetPasswordComponent } from './components/set-password/set-password.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: LoginComponent,
      },

      {
        path: 'registration',
        component: RegistrationComponent,
      },

      {
        path: 'forgotPassword',
        component: ForgotPasswordComponent,
      },

      {
        path: 'otpValidate',
        component: OtpValidationComponent,
      },

      {
        path: 'setPassword',
        component: SetPasswordComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}

export const arrayOfAuthComponent = [
  LoginComponent,
  RegistrationComponent,
  ForgotPasswordComponent,
  OtpValidationComponent,
  SetPasswordComponent,
];
