import { Component, OnInit, OnDestroy } from '@angular/core';
import {ProductsService} from 'src/app/Services/products.service';
import { CategoriesService } from 'src/app/Services/categories.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  subscriber;
  Products;
  Categories;
  Cate_subscriber;
  constructor(private myServices:ProductsService, private myCategoryServices:CategoriesService) { }
  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

  ngOnInit(): void {

    this.subscriber = this.myServices.getAllProducts().subscribe((products)=>{
      console.log(products);
      if(products){
        this.Products = products;
      }
    },(error)=>{
      console.log(error);
    })


    this.Cate_subscriber = this.myCategoryServices.getAllCategories().subscribe((categories)=>{
      console.log(categories);
      if(categories){
        this.Categories = categories;
      }
    },(error)=>{
      console.log(error);
      
    })


  }


}
