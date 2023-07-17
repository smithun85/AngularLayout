import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomFormComponent } from './custom-form.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CustomFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],

  exports:[
    CustomFormComponent  //B/c of this component is using in other module.
  ],
  
})
export class CustomFormModule { }
