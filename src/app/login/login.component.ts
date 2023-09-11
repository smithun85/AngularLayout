import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  name = {
    type:'text',
    placeholder:'Enter name',
    value:'',
    label:'name'
  }

  loginForm:FormGroup | any

  constructor(private fb:FormBuilder){
    this.loginForm = this.fb.group({
      profile:['', [Validators.required]],
      name: [this.name.value],
    })

    

    this.loginForm
  }

  ngOnInit(): void {}

  get profile() {
    return this.loginForm.get("profile");
  };

  get nameControl() {
    return this.loginForm.get("name").value
  }

  getnameField(){
    const nameFields: any = {};
    const controlName = new FormControl('')
  }

  onSubmit(){
    console.log('email:',this.loginForm.controls.email.value);
    console.log('email:',this.loginForm.value.email);
    console.log('Login_Value',this.loginForm.value);
    console.log(this.nameControl);
    console.log(this.profile.value);
  }

}
