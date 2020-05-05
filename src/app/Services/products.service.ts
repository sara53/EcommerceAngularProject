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

  DeleteProduct(productID){
    return this.myClient.delete(`${this.baseURL}/api/products/${productID}`);
  }

  getProductById(productID){
    return this.myClient.get(`${this.baseURL}/api/products/${productID}`);
  }

  updateProduct(productID,product){
    return this.myClient.put(`${this.baseURL}/api/Products/${productID}`,product);

  }

}
