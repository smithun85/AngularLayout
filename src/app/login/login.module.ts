import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormComponent } from '../shared/custom-form/custom-form.component';

@NgModule({
  declarations: [
    LoginComponent,
    CustomFormComponent  //B/c of this component is coming from other module.
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    LoginRoutingModule,
  ],
  exports:[
    RouterModule,
  ],

})
export class LoginModuleModule { }
