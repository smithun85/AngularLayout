import {FormGroup, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function PasswordValidator(control:AbstractControl): {[key: string]: boolean} | null {
        const password = control.get('password');
        const confirmPassword = control.get('conform_Password');

        if(password?.pristine || confirmPassword?.pristine){
            return null;
        }
        return password && confirmPassword && password.value != confirmPassword.value ? {passwordMismatch: true} : null

        //==============or======
// if (password && confirmPassword && password.value !== confirmPassword.value) {
//     return { passwordMismatch: true };
// }
// return null;
}

 
// ========================Syntex=====================================
export function ConfirmedValidator(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors?.['confirmedValidator']) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmedValidator: true });
        } else {
           matchingControl.setErrors(null);
        }
    }
};
// ==============example==============================
export function passwordConfirmedValidator(password: string, confirm_Password: string){
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[password];
    const matchingControl = formGroup.controls[confirm_Password];
    if (matchingControl.errors && !matchingControl.errors?.['passwordMismatch']) {
        return;
    }
    if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ passwordMismatch: true });
    } else {
       matchingControl.setErrors(null);
    }
}
}

//=============================Working====================================
export function passwordMatch(password: string, confirm_Password: string) {
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const passwordControl = formGroup.get(password);
    const confirmPasswordControl = formGroup.get(confirm_Password);
    if (!passwordControl || !confirmPasswordControl) {
      return null;
    }
    if (confirmPasswordControl.errors &&  !confirmPasswordControl.errors['passwordMismatch']) {
      return null;
    }

    if (passwordControl.value !== confirmPasswordControl.value) {
      confirmPasswordControl.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    } else {
      confirmPasswordControl.setErrors(null);
      return null;
    }
  };
}

// ========================OR(working)===================================================
export const passwordMismatchValidator:ValidatorFn = (fg:AbstractControl):ValidationErrors | null =>{
        
  const passwordControl = fg.get('password');
    const confirmPasswordControl = fg.get('confirm_Password');
    console.log("validators called");  
  //   console.log(passwordControl);
     
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
    } else {
      confirmPasswordControl.setErrors(null);
      return null;
    }
}
// ===============================OR====================================
// it is working when we use in template view as 
// <div *ngIf= ((new_password.touched || new_password.dirty) && (confirm_password.dirty || confirm_password.touched))">
// <div/>
export const PasswordMismatchValidator = (fg: FormGroup) => {
  const new_password = fg.get('new_password')?.value;
  const confirm_password = fg.get('confirm_password')?.value;
  
  return new_password !== '' && confirm_password !== '' && new_password == confirm_password
    ? null 
    : { mismatch: true };
};  



// ============Image Validation==============
export function imageValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (control.value) {
      const file = control.value as File;
      const fileType = file.type.split('/')[0];
      const fileSize = file.size / 1024 / 1024; // Convert bytes to megabytes
     

      if (fileType !== 'image' || fileSize > 2 ) {
        return { 'invalidImage': true };
      }
    }
    return null;
  };
  // ==================================end==========================
}


