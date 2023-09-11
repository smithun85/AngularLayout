import { Component } from '@angular/core';
import { AddToCartService } from 'src/app/services/behaviorSubject-addToCart.service';

@Component({
  selector: 'app-order-header',
  templateUrl: './order-header.component.html',
  styleUrls: ['./order-header.component.scss']
})
export class OrderHeaderComponent {
  cartTotal!:number;
  favouriteTotal!:number;

  constructor(private _addToCartService:AddToCartService){}

  ngOnInit(){
    this._addToCartService.getOrderCount().subscribe((orderCount)=>{
      this.cartTotal = orderCount.cartTotal;
      this.favouriteTotal = orderCount.favouriteTotal
    })
  }
}
