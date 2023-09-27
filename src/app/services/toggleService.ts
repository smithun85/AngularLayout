import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class ToggleService {
    private _isOpen = new BehaviorSubject<boolean>(true);
    private _isOpen$ = this._isOpen.asObservable();

    getToggleValue():Observable<boolean>{
        return this._isOpen$
    };

    setToggleValue(latestToggledValue:boolean){
        console.log("Services:",latestToggledValue);
        return this._isOpen.next(latestToggledValue)
    }
}