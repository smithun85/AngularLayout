import { Component } from '@angular/core';
import { AddToCartService } from 'src/app/services/behaviorSubject-addToCart.service';

@Component({
  selector: 'app-order-dashboard',
  templateUrl: './order-dashboard.component.html',
  styleUrls: ['./order-dashboard.component.scss']
})
export class OrderDashboardComponent {
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
