import { Injectable } from '@angular/core';
import { Products } from './products-interface';
import { ProductsData } from './products';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  // products = ProductsData
  constructor() { }

  getProducts(){
    return ProductsData
  }
}
