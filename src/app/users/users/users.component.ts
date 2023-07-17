import { Component, OnInit } from '@angular/core';

import {UsersService} from '../users.service';
import { Users } from '../users-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{

  //get userData using service
  users?:Users[];

  userList: any

  constructor(private userService:UsersService, private router:Router ){}

  ngOnInit(){
    this.users=this.userService.getData() ;
    
    
  }

  onSelect(userData:Users){
    // console.log(userData);
    this.userService.setUserData(userData)
    // this.router.navigate(['/details',userData.id])
  }

  goToForm(){
    this.router.navigate(['/dynamicForm']);
  }
  
}
