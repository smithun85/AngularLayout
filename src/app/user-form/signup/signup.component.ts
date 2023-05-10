import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordValidator } from 'src/app/shared/password.validator';
import { forbiddenValidator } from 'src/app/shared/user.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit{

  // get name() {
  //   return this.signup.controls;
  // }

  countries: string[] = [
    'country-1',
    'country-2',
    'country-3',
    'country-4',
    'country-5',
    'country-6',
  ];
  states: string[] = [
    'state-1',
    'state-2',
    'state-3',
    'state-4',
    'state-5',
    'state-6',
  ];

  constructor(
    private router: Router,
    private fb:FormBuilder
  ) {}


  

   
  signup:FormGroup | any;
  address:FormArray | any;
  // address:FormArray | any;
  ngOnInit(){
    // this.address = this.fb.group({    
    //   address:this.fb.array([this.createAddress()])
    // })

    this.signup = new FormGroup(
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
  
        photo: new FormControl('', [Validators.required]),
  
        gender: new FormControl('', Validators.required),
  
        hobby: new FormControl(''),
  
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
        ]),
  
        conformPassword: new FormControl(''),
      },
      // { validator: PasswordValidator('password', 'conformPassword') }
    );

    
    // this.address= new FormGroup({
    //   address:new FormArray([this.createAddress()])
    // });

  };

  createAddress() {
    // return this.fb.group({
    //   street:[''],
    //   city:[''],
    // })

    return new FormGroup({
      street:new FormControl(''),
      city:new FormControl('')
    })
  }

  addAddress(): void{
    this.address = this.signup.get('address') as FormArray;
    this.address.push(this.createAddress())
    console.log("Address:",this.address.value);
  }

  removeAddress(index:number):void {
   console.log('index',index);
    // (<FormArray>this.signup.get("address")).removeAt(index);

    //=========OR=========
    this.address = this.signup.get('address') as FormArray;
    this.address.removeAt(index);
    
  }

  get f(){
    return this.signup.controls;
  }



  onSubmit(): void {
    console.log(this.signup.value);
    console.log("Address:",this.address.value);

    if (this.signup.invalid) {
      this.signup.markAllAsTouched();
      return;
    }
    this.router.navigate(['/showForm']);
    console.log(this.signup.value);

    this.signup.reset();
  }

  // onSubmitForm(){
  //   console.log("AddressOutSide:",this.address.value)
  // }
}

