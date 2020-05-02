import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import 'rxjs/operators/map';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseURL = "http://localhost:36417";
  constructor(private myClient: HttpClient) { }


  UpdateUser(data: Object , id:string): Observable<Object> {

    console.log(data)
    const headers = { 'content-type': 'application/json'}  
    return this.myClient.post(`http://localhost:36417/Account/Update/${id}`, data);
  }

  IsAdmin() {
    let jwtHelper = new JwtHelperService();
    let token = localStorage.getItem('token');
    if (!token)
      return null;
    if (jwtHelper.decodeToken(token).typ == "Normal User")
      return false;
    return true;
  }
  currentUser() {
    let jwtHelper = new JwtHelperService();
    let token = localStorage.getItem('token');
    if (!token)
      return null;
    //return jwtHelper.decodeToken(token).sub.charAt(0).toUpperCase() + jwtHelper.decodeToken(token).sub.slice(1)
    return jwtHelper.decodeToken(token).sub
  }

  GetCurrentUserInfo(){
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer '+ token);
    return this.myClient.get(`${this.baseURL}/api/users/GetCurrentUserInfo`, 
    {headers:headers})
  }
  

  isLoggedIn() {
    let jwtHelper = new JwtHelperService();
    let token = localStorage.getItem('token');
    if (!token)
      return false;
    //let expirationDate = jwtHelper.getTokenExpirationDate(token);
    let isExpired = jwtHelper.isTokenExpired(token);
    return !isExpired;
    //npm install @auth0/angular-jwt
  }
  Logout() {
    localStorage.removeItem('token');
  }

  login(user) {
    return this.myClient.post(`${this.baseURL}/Account/Login`, user)
      .pipe(map(response => {
        if (response && response.hasOwnProperty("token")) {
          // console.log(response)
          // console.log("token here " + response["token"])
          localStorage.setItem('token', response["token"]);
          return true;
        }
        return false;
      }));
  }
}
