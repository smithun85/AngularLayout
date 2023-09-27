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
  

  products:Products[] = [];
  searchText:any ;
  text=`somedummy text here`;

  public productId?:any

  routerInfo:string = ''
  constructor(
    private router:Router,
    private productService:ProductsService,
    private route:ActivatedRoute,
    ){
    // console.log(this.products);
    route.url.subscribe( (url)=>{
      console.log(url);
      this.routerInfo = url.join('')
      console.log('Url',this.routerInfo);
    })
  }
  ngOnInit(){
this.products = this.productService.getProducts();

this.route.queryParamMap.subscribe( (params) => {      //gives all details 
  console.log("Parameter",params)     
  this.productId =params
//  this.productId={ ...params.keys, ...params };
 console.log(this.productId);
})
  }

  onSelect( product:Products){
    //using with id child of products
    // this.router.navigate(['/productDetails', `${product.id}`], { queryParams: { orderby: product.price, brand:product.brand } });
    // this.router.navigate(['/productDetails', `${product.id}`], { queryParams: { orderby: product.price, brand:product.brand },queryParamsHandling :"merge" });

    this.router.navigate([`/productDetails/${product.id}/${product.price}/${product.brand}`] ,{ queryParams: { orderby: product.price, brand:product.brand }});
   
        // this.router.navigate(['/productDetails', `${product.id}`], { queryParams: { orderby: product.price, brand:product.brand } });
    {state:{name:'A'}}
    // this.router.navigateByUrl(`/productDetails/${product.id}/${product.price}/${product.brand}`,)
     //Using without id
    // this.router.navigate(['/productDetails'], { queryParams: { orderby: product.price, brand:product.brand} })
  }

  onSearch(){

  }

}
