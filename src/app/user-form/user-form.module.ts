import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ShowFormDataComponent } from './show-form-data/show-form-data.component';
//ngx-bootstrap
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [
    SignupComponent,
    ShowFormDataComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    NgSelectModule 
  ],

  exports:[
    
  ]
})
export class UserFormModule { }
