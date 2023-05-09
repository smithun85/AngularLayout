import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { ReactiveFormsModule } from '@angular/forms';  //reactive Form lives here

//bootstrap
import { TooltipModule } from 'ngx-bootstrap/tooltip';
//UserDefined Modules:
import { AuthenticationModule } from './authentication/authentication.module';
import { DashboardModule } from './dashboard/dashboard.module'
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';
import { UserFormModule } from './user-form/user-form.module';
//Components:
import { CustomErrorComponent } from './custom-error/custom-error.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule.forRoot(),
    AuthenticationModule,
    DashboardModule,
    SharedModule,
    UserFormModule,
    UsersModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 
 }
