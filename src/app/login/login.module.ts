import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
<<<<<<< HEAD
import { LoginRoutingModule } from './login.routing';
=======
import { LoginRoutingComponent } from './login.routing';
>>>>>>> a88f14b26800f56e1afc6006159efcb9a4c7461d
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
<<<<<<< HEAD
    LoginRoutingModule,
=======
    LoginRoutingComponent,
>>>>>>> a88f14b26800f56e1afc6006159efcb9a4c7461d
  ],
  exports:[
    RouterModule,
  ],
<<<<<<< HEAD

=======
  // schemas: [
  //   CUSTOM_ELEMENTS_SCHEMA
  // ],
>>>>>>> a88f14b26800f56e1afc6006159efcb9a4c7461d
})
export class LoginModuleModule { }
