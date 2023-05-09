import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowFormDataComponent } from './show-form-data/show-form-data.component';



@NgModule({
  declarations: [
    SignupComponent,
    ShowFormDataComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],

  exports:[
    
  ]
})
export class UserFormModule { }
