import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';
import { Users } from '../users-interface';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {

  userId?:any

  // userData?:Users
  userData?:any

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private user:UsersService
  ) {}


//=========Using Snapshot: method-1==============
  // ngOnInit(): void{
    
  //   let id = this.route.snapshot.params['id']
  // //or ;    router parameter from the params array
  //   // let id = this.route.snapshot.params?.['id']
  // //or : value from the paramMap object.
  //   // let id = this.route.snapshot.paramMap.get('id') //snapshot property returns the current value of the route
  //   // console.log("paramsId",id);
  //   // console.log(typeof id);
  //   this.userId = id

  //   let user = this.user.getUserDataById(this.userId)
  //   // console.log("user:", user);
  //   this.userData=user
  // }

  // ======================Using Observable:method-2:this is latest and best===============
ngOnInit():void{
  //using paramMap
  // let id = this.route.paramMap.subscribe( paramMap => { 
  //   this.userId = paramMap.get('id'); 

  //using params:
  let id = this.route.params.subscribe( params => { 
    this.userId = params['id']; 

      let user = this.user.getUserDataById(this.userId)
    // console.log("user:", user);
    this.userData=user
    
  })
}

  goToUsers():void{
    this.router.navigate(['users'])
  }

  putComment(){
    // this.router.navigate(['comments'])
  }

}
