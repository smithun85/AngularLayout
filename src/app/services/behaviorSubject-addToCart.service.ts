import { BehaviorSubject, Observable, of } from "rxjs";
import { ITEMS, OrderCount } from "../models/behaviorSubject-addToCart.interface";
import { Injectable } from "@angular/core";
import { items } from "./data/behaviorSubject-addToCart.data";

@Injectable({
    providedIn:'root'
})
export class AddToCartService {
    private _orderCount = new BehaviorSubject<OrderCount>({
        cartTotal:0,
        favouriteTotal:0
    });

    private _orderCount$ = this._orderCount.asObservable();

    getOrderCount():Observable<OrderCount> {
        return this._orderCount$;
    };

    setOrderCount(latestValue:OrderCount){
        return this._orderCount.next(latestValue)
    };

    getCartItem():Observable<ITEMS[]>{
        return of(items)
    }
}