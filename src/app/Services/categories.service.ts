import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  baseURL = "http://localhost:36417";
  constructor(private myClient:HttpClient) { }

  getAllCategories(){
    return this.myClient.get(`${this.baseURL}/api/categories`);
  }
}
