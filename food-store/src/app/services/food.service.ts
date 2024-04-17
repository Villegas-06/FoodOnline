import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private products: any[] = [];

  constructor() { }

  addProduct(product: []){
    this.products.push({...product})
  }

  getProducts(){
    return this.products;
  }
}
