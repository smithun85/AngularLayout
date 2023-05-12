import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidatorService } from 'src/app/shared/custom-validator.service';
import { passwordMatch } from 'src/app/shared/password.validator';
import { forbiddenValidator } from 'src/app/shared/user.validator';

import { imageValidator } from 'src/app/shared/password.validator';

import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: false } }]
})
export class SignupComponent implements OnInit{

 
  hobbies:Array<any> = [
    {name:'Football'},
    {name:'Cricket'},
    {name:'Singing'},
    {name:'Chess'},
    {name:'Reading'},
    {name:'other'},
  ]


  constructor(
    private router: Router,
    private fb:FormBuilder,
    private validator:CustomValidatorService,
  ) {}

   
  signupForm:FormGroup | any;
  address:FormArray | any;

  ngOnInit(){
   
    this.signupForm = new FormGroup(
      {
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
          forbiddenValidator(/admin/),
        ]),
  
        age: new FormControl('', [
          Validators.required,
          Validators.min(18),
          Validators.max(60),
        ]),
  
        contact: new FormControl('', [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
        ]),
  
        email: new FormControl('', [Validators.required, Validators.email]),

        address: new FormArray([this.createAddress()]),
        // address: new FormArray([new FormGroup({
        //   street:new FormControl('',Validators.required),
        //   city:new FormControl('',Validators.required),
        //   pinCode:new FormControl('', Validators.required)
        // })],[Validators.required]),
  
        image: new FormControl('', [Validators.required, imageValidator() ]),
  
        gender: new FormControl('', Validators.required),
  
        hobby: new FormArray([new FormControl(null,  Validators.required)]),
  
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]), 
        confirm_Password: new FormControl('', Validators.required),

        checkedOut:new FormControl(false, Validators.requiredTrue),
      },  
      { validators:passwordMatch('password', 'confirm_Password') }
    );

  };

  createAddress() {
    // return this.fb.group({
    //   street:[''],
    //   city:[''],
    // })
    return new FormGroup({
      street:new FormControl('', Validators.required),
      city:new FormControl('', Validators.required),
      pinCode:new FormControl('', Validators.required)
    })
  }

  addAddress(): void{
    this.address = this.signupForm.get('address') as FormArray;
    this.address.push(this.createAddress())
    console.log("Address to add:",this.address.value);
  }

  removeAddress(index:number):void {
   console.log('index',index);
    // (<FormArray>this.signupForm.get("address")).removeAt(index);

    //=========OR=========
    this.address = this.signupForm.get('address') as FormArray;
    this.address.removeAt(index);
    console.log("test", this.signupForm.get('address').controls[index]);
    
  }
//=============================Multiple Checkbox for hobbies========
onCheckBoxChange(e:any){
//   const hobby:FormArray = this.signupForm.get('hobby') as FormArray

//   if(e.target.value){
//     hobby.push(new FormControl(e.target.value));
//   } else {
//     let i:number = 0 ;
//     hobby.controls.forEach( (item:any) => {
//       if(item.value == e.target.value){
//         hobby.removeAt(i)
//         return
//       }
//       i++
//     })
//     console.log(hobby);
//   }
}


//===================end multiple checkbox============


//=======Image upload===============
readImageFile(event:any){
  if (event.target.files && event.target.files[0]) {

    if (event.target.files[0].type === 'image/jpeg' || 
        event.target.files[0].type === 'image/png' || 
        event.target.files[0].type ==='image/jpg') {
      if (event.target.files[0].size < 200 * 200) {/* Checking height * width*/ }
        if (event.target.files[0].size < 1000000) {/* checking size here - 2MB */ }
    }
  }
}
//============================end===================


//===========Matched Password==========
get passwordMatchError() {
  return (
    this.signupForm.getError('mismatch') &&
    this.signupForm.get('confirm_Password')?.touched
  );
}

//=====Getter method============
  get signup(){
    return this.signupForm.controls;
  }

  get handleHobbyError(){
    return this.signupForm.get('hobby') as FormArray
  }

  get addressHandleError(){
    return this.signupForm.get('address') as FormArray;
  }

//   get name() : FormControl{
//     return this.signupForm.get('firstName') as FormControl;
// }




  onSubmit(): void {
    
    console.log(this.signupForm.value);

    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    }
    this.router.navigate(['/showForm']);
    
    this.signupForm.reset();
  }
}

