import { Component, OnInit } from '@angular/core';
import { Products } from './products-interface';
import { ProductsService } from './products.service';
import { ActivatedRoute, Router } from '@angular/router';

import { BsModalService } from 'ngx-bootstrap/modal';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  

  products:Products[] = []

  routerInfo:string = ''
  constructor(
    private router:Router,
    private productService:ProductsService,
    private r : ActivatedRoute
    ){
    // console.log(this.products);
    r.url.subscribe( (url)=>{
      console.log(url);
      this.routerInfo = url.join('')
      console.log('Url',this.routerInfo);
    })
  }
  ngOnInit(){
this.products = this.productService.getProducts()
  }

  onSelect( product:Products){
    //using with id child of products
    this.router.navigate(['/productDetails',product.id], { queryParams: { orderby: product.price, brand:product.brand } })
     //Using without id
    // this.router.navigate(['/productDetails'], { queryParams: { orderby: product.price, brand:product.brand} })
  }

}
