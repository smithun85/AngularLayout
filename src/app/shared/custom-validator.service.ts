import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorService {

  constructor() {}

  passwordMatch(password: string, confirm_Password: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const passwordControl = formGroup.get(password);
      const confirmPasswordControl = formGroup.get(confirm_Password);

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (
        confirmPasswordControl.errors &&
        !confirmPasswordControl.errors['passwordMismatch']
      ) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
        return { passwordMismatch: true };
      } 
      else {
        confirmPasswordControl.setErrors(null);
        return null;
      }
    };
  }

  // if (event.target.files && event.target.files[0]) {

  //   if (event.target.files[0].type === 'image/jpeg' || 
  //       event.target.files[0].type === 'image/png' || 
  //       event.target.files[0].type ==='image/jpg') {
  //     if (event.target.files[0].size < 200 * 200) {/* Checking height * width*/ }
  //       if (event.target.files[0].size < 1000000) {/* checking size here - 2MB */ }
  //   }
  // }
  // imageValidator(): ValidatorFn {
  //   return (control: FormControl): { [key: string]: any } | null => {
  //     if (control.value) {
  //       const file = control.value as File;
  //       const fileType = file.type.split('/')[0];
  //       const fileSize = file.size / 1024 / 1024; // Convert bytes to megabytes
  
  //       if (fileType !== 'image' || fileSize > 2) {
  //         return { 'invalidImage': true };
  //       }
  //     }
  
  //     return null;
  //   };
  // }
  


ValidateUrl(control: AbstractControl) {
  if (!control.value.startsWith('https') || !control.value.includes('.io')) {
    return { invalidUrl: true };
  }
  return null;
}
}
