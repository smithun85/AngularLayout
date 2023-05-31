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
  //======================Method-1===================
  // getUserDataById(id:any){
  //  this.users.map( (data)=>{
  //     // console.log("DataById",data);
  //     // console.log(id);
  //     if(id == data.id){
  //       this.user = data;
        
  //     }
  //   })
 
  //   return this.user
  // };


  //or  : =========================method-2============================= 
  getUserDataById(ids:any){   
      return this.users.find( (p:any)=>p.id == ids)         
   }
}
