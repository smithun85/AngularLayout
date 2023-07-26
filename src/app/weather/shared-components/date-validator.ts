import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const dateValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const start = control.get('from_Date');
    const end = control.get('to_Date');
    console.log("validators called");  
    console.log(start);
    return start?.value !== null && end?.value !== null && start?.value < end?.value 
    ? null :{ dateValid:true };
}