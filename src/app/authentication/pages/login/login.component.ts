import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router:Router){}



  loginForm = new FormGroup({
    email:new FormControl('',[ Validators.email]),
    password:new FormControl('',[Validators.minLength(6)])
  }, Validators.required)
 
  onSubmit():void{
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
      return;
    }
    // this.router.navigate(['/dashboard'])
    console.log(this.loginForm.value);
  };
  
  // ngOnInit(): void {
    
  // }

}
