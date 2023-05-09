import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {

  states:string[]=["state-1", "state-2", "state-3","state-4", "state-5", "state-6",]
  constructor(private router: Router) {}

  signup = new FormGroup({
    
    name: new FormControl('', 
      [
        Validators.required
      ]
    ),

    age: new FormControl('', [
      Validators.required,
      Validators.min(18),
      Validators.max(60),
    ]),

    contact:new FormControl('',
      [
        Validators.required,
        Validators.maxLength(10)
      ]
    ),

    email: new FormControl('', 
      [
        Validators.required, 
        Validators.email
      ]
    ),

    address:new FormGroup({
      street:new FormControl('',
        [
          Validators.required,
        ]
      ),
      city:new FormControl('',
        [
          Validators.required,
        ]
      ),
      pinCode:new FormControl('',
        [
          Validators.required,
          Validators.maxLength(6)
        ]
      ),
    }),

    photo:new FormControl('',
      [
        Validators.required
      ]
    ),

    gender:new FormControl(''),

    hobby:new FormControl(''),

    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),

    conformPassword:new FormControl('')
  });

  onSubmit(): void {
    console.log(this.signup.value);
    if (this.signup.invalid) {
      this.signup.markAllAsTouched();
      return;
    }
    this.router.navigate(['/showForm']);
    console.log(this.signup.value);

    this.signup.reset();
  }
}
