import { Injectable } from '@angular/core';
import { UsersData, model_DynamicForm} from './users-data';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

 public users=UsersData;

  constructor() { 
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


  //  ===============Dynamic Forms======================
 public models = model_DynamicForm;
  getModels(){
    return this.models
  }

  private _userFieldsSource = new BehaviorSubject<any>({});
  selectedUserData$= this._userFieldsSource.asObservable();

  private _userFieldsListBus = new BehaviorSubject<any>([]);
  userFieldsList$ = this._userFieldsListBus.asObservable();

  setUserData(userData:any){
    this._userFieldsSource.next(userData)
  };

  setUserList(userList:any){
    this._userFieldsListBus.next(userList)
    console.log("ServiceData",userList);
  }

}
