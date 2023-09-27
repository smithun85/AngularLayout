import { Injectable } from "@angular/core";
import { INPUT_FORM } from "../models/dynamic-form.interface";
import { input_form } from "./data/dynamic-form.data";
import { EMPTY, Observable, catchError, of } from "rxjs";

Injectable({
    providedIn:"root"
});
export class DynamicFormService {

    getDynamicInputFormData():Observable<INPUT_FORM>{
        return of(input_form).pipe(
            catchError( ()=> EMPTY)
        )
    }
}