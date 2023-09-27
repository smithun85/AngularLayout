import { Injectable } from "@angular/core";
import { BehaviorSubject, EMPTY, Observable, catchError, delay, of } from "rxjs";
import { ASYNCPIPE } from "../models/async-pipe.interface";
import { pizza } from "./data/commonData";

@Injectable({
    providedIn:"root"
})
export class AsyncPipeService {

    private pizza:ASYNCPIPE[] = pizza;
    // private pizza:ASYNCPIPE[] = []; // for error handling ;



    getAsyncPipe():Observable<ASYNCPIPE[]>{
        return of(this.pizza).pipe(
            delay(2000),            //for loading handling;
            catchError( ()=> EMPTY)
        )
    };

      // To perform read and write operations, 
    // let’s wrap the pizza array inside a BehaviorSubject and 
    // emit a new array each time a new item is pushed to the pizza array.
    private _pizza =new BehaviorSubject<ASYNCPIPE[]>([]);
    private pizza$ = this._pizza.asObservable();

    // getPizza(){
    //     // this.pizza$.next()
    // }

}