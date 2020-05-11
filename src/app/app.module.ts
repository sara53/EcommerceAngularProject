import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ProductsComponent } from './Components/products/products.component';
import { LoginComponent } from './Components/login/login.component';
import { AppRoutingModule } from './Components/app-routing.module';
import { ErrorComponent } from './Components/error/error.component';
import { ProductsService } from './Services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './Components/products/product/product.component';
import { CategoriesService } from './Services/categories.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountService } from './Services/account.service';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ProfileComponent } from './Components/profile/profile.component';
import { EditProfileComponent } from './Components/profile/edit-profile/edit-profile.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { EditProfileService } from './Services/edit-profile.service';
import { CreateProductComponent } from './Components/create-product/create-product.component';
import { AdminProductComponent } from './Components/Admin/admin-product/admin-product.component';
import { UpdateProductComponent } from './Components/Admin/update-product/update-product.component';
import { PasswordStrengthComponent } from './Components/registration/password-strength/password-strength.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    LoginComponent,
    ErrorComponent,
    ProductComponent,
    ProfileComponent,
    EditProfileComponent,
    RegistrationComponent,
    CreateProductComponent,
    AdminProductComponent,
    UpdateProductComponent,
    PasswordStrengthComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    BrowserModule
  ],
  providers: [
    ProductsService,
    CategoriesService,
    AccountService,
    EditProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
