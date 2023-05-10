import { AbstractControl } from "@angular/forms";

export function PasswordValidator(control:AbstractControl): {[key: string]: any} | null {
        const password = control.get('password');
        const conformPassword = control.get('conformPassword');

        if(password?.pristine || conformPassword?.pristine){
            return null;
        }
        return password && conformPassword && password.value != conformPassword.value ? {'misMatch': true} : null

}