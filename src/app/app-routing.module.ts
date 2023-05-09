import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/pages/login/login.component';
import { RegistrationComponent } from './authentication/pages/registration/registration.component';
import { ForgotPasswordComponent } from './authentication/components/forgot-password/forgot-password.component';
import { OtpValidationComponent } from './authentication/components/otp-validation/otp-validation.component';
import { SetPasswordComponent } from './authentication/components/set-password/set-password.component';
import { AuthLayoutComponent } from './authentication/auth-layout/auth-layout.component';
import { CustomErrorComponent } from './custom-error/custom-error.component';
import { HomeLayoutComponent } from './dashboard/home-layout/home-layout.component';
import { HomeComponent } from './dashboard/pages/home/home.component';
import { UsersComponent } from './users/users/users.component';
import { AboutComponent } from './dashboard/pages/about/about.component';
import { ContactsComponent } from './dashboard/pages/contacts/contacts.component';
import { ProductsComponent } from './dashboard/products/products.component';
import { OrdersComponent } from './dashboard/orders/orders.component';
import { SettingComponent } from './dashboard/setting/setting.component';

const routes: Routes = [
  // {
  //   path:'',
  //   component:AuthLayoutComponent,
  //   children:[

  //     {
  //       path:'',
  //       redirectTo:'login',
  //       pathMatch:'full'
  //     },

  //     {
  //       path:'login',
  //      component:LoginComponent
  //     },
    
  //     {
  //       path:'registration',
  //       component:RegistrationComponent
  //     },
    
  //     {
  //       path:'forgotPassword',
  //       component:ForgotPasswordComponent
  //     },
    
  //     {
  //       path:'otpValidate',
  //       component:OtpValidationComponent
  //     },
    
  //     {
  //       path:'setPassword',
  //       component:SetPasswordComponent
  //     }
  //   ]
  // },

  {
    path:'',
    component:HomeLayoutComponent,
    children:[
      {
        path:'',
        component:HomeComponent,
      },
      {
        path:'users',
        component:UsersComponent
      },

      {
        path:"products",
        component:ProductsComponent
      },

      {
        path:'orders',
        component:OrdersComponent
      },

      {
        path:'setting',
        component:SettingComponent
      },

      {
        path:'about',
        component:AboutComponent
      },

      {
        path:'contacts',
        component:ContactsComponent
      }
    ]
  },
 

  {
    path:'**',
    component:CustomErrorComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
