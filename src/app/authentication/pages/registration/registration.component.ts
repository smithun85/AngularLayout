import { Component } from '@angular/core';
import { FormGroup ,FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  constructor(private router:Router){

  }

  registrationForm = new FormGroup({
    name:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required, Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)])
  })

//   get name() {
//     return this.registrationForm.get('name');
// } ;

// get email() {
//   return this.registrationForm.get('email');
// } ;
//   get password() {
//     return this.registrationForm.get('password');
// } 

  onSubmit():void{
    console.log(this.registrationForm.value);
    if(this.registrationForm.invalid){
      this.registrationForm.markAllAsTouched();
      return;
    }
    this.router.navigate(['/dashboard'])
    console.log(this.registrationForm.value);

    this.registrationForm.reset()
  }

}
