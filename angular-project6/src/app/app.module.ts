import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { HeaderComponent } from './header/header.component';
import { TypicodeComponent } from './typicode/typicode.component';
import { HttpClientModule } from '@angular/common/http';
import { HeadComponent } from './head/head.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { FirebaseComponent } from './firebase/firebase.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    HeaderComponent,
    TypicodeComponent,
    HeadComponent,
    AddProductComponent,
    ProductDetailsComponent,
    HomeComponent,
    FirebaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
