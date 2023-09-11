import { Component } from '@angular/core';
import { ITEMS } from 'src/app/models/behaviorSubject-addToCart.interface';
import { AddToCartService } from 'src/app/services/behaviorSubject-addToCart.service';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.scss']
})
export class OrderTableComponent {
 
  public item:ITEMS[] = [];
  isCart:boolean = false;
  isFavourite:boolean = false
  cartTotal!:number;
  favouriteTotal!:number;

  constructor(private _addToCartService:AddToCartService){}

  ngOnInit(){
    this.getItem();
  };

  getItem(){
    this._addToCartService.getCartItem().subscribe(item=>{
      this.item = item;

    });

   this._addToCartService.getOrderCount().subscribe((orderCount)=>{
      this.cartTotal = orderCount.cartTotal;
      this.favouriteTotal = orderCount.favouriteTotal
    });
  };

  addToCart(item:any){
    console.log(item);
    item.action.isCart = true;
    let count = {
      cartTotal: this.cartTotal + 1 ,
      favouriteTotal: this.favouriteTotal,
    };
    this._addToCartService.setOrderCount(count)
  };

  addToWishList(item:any){
    item.action.isFavourite = true;
    let count = {
      cartTotal: this.cartTotal  ,
      favouriteTotal: this.favouriteTotal + 1,
    };
    this._addToCartService.setOrderCount(count)
  }
}
