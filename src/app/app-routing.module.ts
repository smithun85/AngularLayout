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
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UsersCommentsComponent } from './users/users-comments/users-comments.component';
import { ProductDetailsComponent } from './dashboard/product-details/product-details.component';
import { SignupComponent } from './user-form/signup/signup.component';
import { ShowFormDataComponent } from './user-form/show-form-data/show-form-data.component';
import { FormListviewComponent } from './dashboard/form-listview/form-listview.component';
import { DynamicFormComponent } from './user-form/dynamic-form/dynamic-form.component';
import { CustomPipeComponent } from './a-test-components/custom-pipe/custom-pipe.component';
import { FormTestComponent } from './a-test-components/dynamic-form-parent/form-test.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'auth',
    pathMatch:'full'
  },
  {
    path:'auth',
    component:AuthLayoutComponent,
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
  },

  {
    path:'',
    component:HomeLayoutComponent,
    children:[
      {
        path:'home',
        component:HomeComponent,
      },
      {
        path:'users',
        component:UsersComponent,
      },

      {
        path:'details/:id',
        component:UserDetailsComponent,
        children:[
          {
            path:'comments',
            component:UsersCommentsComponent
          }
        ]
      },


      {
        path:'',
        loadChildren: () => import('./dashboard/dashboard.module').then(m=>m.DashboardModule),
      },

      {
        path:'formListView',
        component:FormListviewComponent
      },

      {
        path:'signup',
        component:SignupComponent
      },

      {
        path:'showForm',
        component:ShowFormDataComponent
      },
      {
        path:'dynamicForm',
        component:DynamicFormComponent
      },
      {
        path:'pipe',
        component:CustomPipeComponent
      },
      {
        path:'form',
        component:FormTestComponent
      },

      {
        path:'pagination',
        loadChildren: () => import('./a-test-components/a-test-components.module').then(m => m.ATestComponentsModule)
      },

      {
        path:'login-test',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModuleModule)
      },
      {
        path:'matrix',
        loadChildren: ()=> import('./matrix/matrix.module').then(m=>m.MatrixModule)
      },

      {
        path:'weather',
        loadChildren: ()=> import('./weather/weather.module').then(m=>m.WeatherModule)
      },

      {
        path:'games',
        loadChildren: ()=> import('./games/games.module').then(m=>m.GamesModule)
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
