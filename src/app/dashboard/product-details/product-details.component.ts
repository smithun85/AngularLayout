import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

  constructor(private route:ActivatedRoute){}

public productId?:any
    ngOnInit(){
      // this.route.paramMap.subscribe( (params) => {    //gives only id
       // QueryParameter:Using queryParamMap
       this.route.queryParamMap.subscribe( (params) => {      //gives all details 
        console.log("Parameter",params)     
        this.productId =params
      //  this.productId={ ...params.keys, ...params };/
    })
    console.log("ProductId:",this.productId.params);
    }

}
