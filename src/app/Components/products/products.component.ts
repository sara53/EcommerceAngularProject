import { Component, OnInit } from '@angular/core';
import {ProductsService} from 'src/app/Services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  subscriber;
  Products;

  constructor(private myServices:ProductsService) { }

  ngOnInit(): void {
    this.subscriber = this.myServices.getAllProducts().subscribe((products)=>{
      console.log(products);
      if(products){
        this.Products = products;
      }
    },(error)=>{
      console.log(error);
    })
  }


}
