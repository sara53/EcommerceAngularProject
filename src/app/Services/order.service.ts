import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  baseURL = "http://localhost:36417";
  orderID;
  constructor(private myClient: HttpClient, private AccService: AccountService) { }
  AddOrder() {
    var order = {
      OrderOwnerID: this.AccService.currentUserID(),
      State: "Pending"
    }
    return this.myClient.post(`${this.baseURL}/api/Orders`, order)
  }
  AddProductsToOrder(productID, orderID) {
    var OrderDetails = {
      OrderID: orderID,
      ProductID: productID,
      Quantity: 1
    }
    console.log(OrderDetails)
    return this.myClient.post(`${this.baseURL}/api/OrderDetails`, OrderDetails)
  }
  GetCurrentOrder() {
    //console.log("hello ranya")
    return this.myClient.get(`${this.baseURL}/api/Orders/GetCurrentOrder/` + this.AccService.currentUserID())
  }
  fun(ordID) {
    return ordID;
  }
  GetProductQuantity(ProductID, OrderID) {
    return this.myClient.get(`${this.baseURL}/api/OrderDetails/GetProductQuantity/ProductID=` + ProductID +
      `&OrderID=` + OrderID)
  }

  GetTotalQuantity() {
    console.log("hello")
    return this.myClient.get(`${this.baseURL}/api/Orders/GetTotalQuantity/` + this.AccService.currentUserID())
  }

}
