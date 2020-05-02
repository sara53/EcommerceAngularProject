import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  baseURL = "http://localhost:36417";
  constructor(private myClient: HttpClient) { }

  GetShoppingCartItems() {
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + token);
    return this.myClient.get(`${this.baseURL}/api/Orders/GetCurrentOrderDetails`,
      { headers: headers });
  }
  checkOut(orderID) {
    return this.myClient.get(`${this.baseURL}/api/Orders/CheckOut/` + orderID)
  }
  removeProduct(orderID, productID) {
    return this.myClient.get(`${this.baseURL}/api/OrderDetails/removeProduct/OrderID=` + orderID +
      `&ProductID=` + productID)
  }
}
