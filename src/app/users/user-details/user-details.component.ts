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



  ngOnInit(): void{
    let id = this.route.snapshot.paramMap.get('id')
    // console.log("paramsId",id);
    // console.log(typeof id);
    this.userId = id

    let user = this.user.getUserDataById()
    // console.log("user:", user);
    this.userData=user
  }

  goToUsers():void{
    this.router.navigate(['users'])
  }

  putComment(){
    // this.router.navigate(['comments'])
  }

}
