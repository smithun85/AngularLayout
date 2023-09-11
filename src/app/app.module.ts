import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { ReactiveFormsModule } from '@angular/forms';  //reactive Form lives here


//UserDefined Modules:
import { AuthenticationModule } from './authentication/authentication.module';
// import { DashboardModule } from './dashboard/dashboard.module'
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';
import { UserFormModule } from './user-form/user-form.module';
//Components:
import { CustomErrorComponent } from './custom-error/custom-error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';






@NgModule({
  declarations: [
    AppComponent,
    CustomErrorComponent,
  ],
  imports: [
   
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    // AuthenticationModule,
    // DashboardModule,
    SharedModule,
    UsersModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule, 
  
    

  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule {

 
 }
