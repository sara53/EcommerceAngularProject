import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  baseURL = "http://localhost:36417";
  constructor(private myClient:HttpClient) { }

  getAllProducts(){
    return this.myClient.get(`${this.baseURL}/api/products`);
  }

  addProduct(product){
    return this.myClient.post(`${this.baseURL}/api/products` , product);
  }

}
