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


 export class PasswordCheckValidator {
     matchingPasswords: ValidatorFn = (c: AbstractControl): ValidationErrors | null => {
        const password = c.get('password');
        const confirmPassword = c.get('confirm_Password');

        if (password && confirmPassword && password.value !== confirmPassword.value) {
            return { passwordMismatch: true };
        }
        return null;
    };
 }



export class CustomValidators {
  static MatchValidator(source: string, target: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const sourceCtrl = control.get(source);
      const targetCtrl = control.get(target);

      return sourceCtrl && targetCtrl && sourceCtrl.value !== targetCtrl.value
        ? { passwordMismatch: true }
        : null;
    };
  }

}


 

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
}

//==========Working=========================
export function passwordMatch(password: string, confirm_Password: string) {
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
    } else {
      confirmPasswordControl.setErrors(null);
      return null;
    }
  };
}


export function passwordMatchValidator(password: string, confirm_Password: string) {
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
    } else {
      confirmPasswordControl.setErrors(null);
      return null;
    }
  };
}



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
}


