import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from '../../../Services/shopping-cart.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private cartService: ShoppingCartService, private router: Router) { }
  Order;
  ngOnInit(): void {
    console.log("yndhhadlw2ty")
    this.cartService.GetShoppingCartItems().subscribe(res => {
      this.Order = res
    }, (err) => {
      console.log(err)
    })
  }
  checkOut(orderID) {
    console.log("hy3mlcheck")
    this.cartService.checkOut(orderID).subscribe(res => {
      console.log(res);
      console.log("kda 5las 3ml cheackout")
    },
      err => {
        console.log("error" + err)
      })
    this.ngOnInit()
    //this.router.onSameUrlNavigation
  }
  removeProduct(orderID, productID) {
    //console.log(orderID, productID)
    var lastProduct: boolean = false;
    if (this.Order.orderDetails.length == 1) {
      console.log("25erProduct")
      lastProduct = true;
    }
    this.cartService.removeProduct(orderID, productID).subscribe(res => {
      if (lastProduct == true) {
        console.log("b2ttrueeecheck")
        this.checkOut(orderID)
      }
      this.ngOnInit()
    },
      err => {
        console.log("error" + err)
      })
    //this.ngOnInit()
    //this.router.navigateByUrl('shoppingCart')

  }
}
