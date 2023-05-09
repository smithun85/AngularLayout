import { Injectable } from '@angular/core';
import { UsersData } from './users-data';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users=UsersData;

  constructor(private route:ActivatedRoute) { 
    // let users = UsersData
  }

  getData(){
    return UsersData ;
  }
 
  public user?:any
  getUserDataById(){
    let user = this.users.map( (data)=>{
      // console.log(data);
      this.user = data
    })
    return this.user
  }
}
