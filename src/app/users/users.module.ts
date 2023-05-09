import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersCommentsComponent } from './users-comments/users-comments.component';

import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UsersComponent,
    UserDetailsComponent,
    UsersCommentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  // exports:[
  //   UsersCommentsComponent
  // ]
})
export class UsersModule { }
