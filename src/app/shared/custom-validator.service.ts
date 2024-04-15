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

// ===============Validate Image=================

validateImage(control: AbstractControl): ValidationErrors | null {
  const file = control.value as File;
  if (!file) {
    return null;
  }
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/jpg'];
  if (!allowedTypes.includes(file.type)) {
    return { invalidFileType: true };
  }
  const maxSize = 1048576; // 1MB in bytes
  if (file.size > maxSize) {
    return { invalidFileSize: true };
  }
  const maxWidth = 1000;
  const maxHeight = 1000;
  const image = new Image();
  image.src = URL.createObjectURL(file);
  return new Promise(resolve => {
    image.onload = () => {
      if (image.width > maxWidth || image.height > maxHeight) {
        resolve({ invalidDimensions: true });
      } else {
        resolve(null);
      }
    };
  });
};

// ===========Check-Expiry- Date in past and today:================
// Apply in form: 
// it is working when we use in form of Component.ts file  view as 
//  expiryDate: new FormControl('', [Validators.required, this.checkExpiryDate()]),
checkExpiryDate(){
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    const selectedDate = new Date(control.value);
    const currentDate = new Date(); 
  if(selectedDate){
    if(selectedDate <= currentDate){
      return {'validateExpiryDate': true}
    } else {
      return null;
    }
  }
    return null;
  };
};
// ================================END==================================

// =============================Check date of birth is 18+ or not=======================
checkValidBirthDate(){
return (control: AbstractControl): { [key:string]:boolean} | null => {
  console.log(control.value);
  const currentDate = new Date();
  const selectedDate = new Date(control.value);
  const _18YearAgoDate = new Date(selectedDate.setFullYear(selectedDate.getFullYear() + 18));
  if(control.value){
    if(_18YearAgoDate <= currentDate){
      return null
    }else{
      return {'validBirthDate' : true}
    }
  }
  return null
}
}
// ======================END========================================================

// ============Image-size Validation==============
imageValidator() {
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

};

