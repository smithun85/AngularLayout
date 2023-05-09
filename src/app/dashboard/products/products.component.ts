import { Component } from '@angular/core';
import { ProductsData } from './products';
import { Products } from './products-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products=ProductsData

  constructor(private router:Router){
    console.log(this.products);
  }

  onSelect( product:Products){
    //using with id
    this.router.navigate(['/productDetails',product.id], { queryParams: { orderby: product.price, brand:product.brand} })
     //Using without id
    // this.router.navigate(['/productDetails'], { queryParams: { orderby: product.price, brand:product.brand} })
  }

}
