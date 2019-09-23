import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubComponent } from './github/github.component';
import { TypicodeComponent } from './typicode/typicode.component';
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path : 'github', component: GithubComponent},
  { path: 'typicode', component : TypicodeComponent},
  { path: 'home', component:HomeComponent},
  { path: 'addproduct', component:AddProductComponent},
  { path: 'productdetails', component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
