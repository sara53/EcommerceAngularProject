import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { CategoriesService } from '../Services/categories.service';
import { ShoppingCartComponent } from './ShoppingCart/shopping-cart/shopping-cart.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { RegistrationComponent } from './registration/registration.component'
import { CreateProductComponent } from './create-product/create-product.component'
import { AdminProductComponent } from './Admin/admin-product/admin-product.component';
import { UpdateProductComponent } from './Admin/update-product/update-product.component';
import { AdminordersComponent } from './Admin/admin-orders/adminorders/adminorders.component';


const routes: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'product/:id', component: ProductsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'editProfile', component: EditProfileComponent },
  { path: 'Registration', component: RegistrationComponent },
  { path: 'CreateProduct', component: CreateProductComponent },
  { path: 'admin', component: AdminProductComponent },
  { path: 'updateProduct/:id', component: UpdateProductComponent },
  { path: 'shoppingCart', component: ShoppingCartComponent, runGuardsAndResolvers: 'always' },
  { path: 'adminorders', component: AdminordersComponent },
  { path: '**', component: ErrorComponent },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
