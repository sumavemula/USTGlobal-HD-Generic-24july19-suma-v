import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarsComponent } from './cars/cars.component';
import { NewsComponent } from './news/news.component';
import { RecipeComponent } from './recipe/recipe.component';
import { MobileComponent } from './mobile/mobile.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { MobileDetailsComponent } from './mobile-details/mobile-details.component';
import { AnimalsComponent } from './animals/animals.component';
import { AnimalDetailsComponent } from './animal-details/animal-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarsComponent,
    NewsComponent,
    RecipeComponent,
    MobileComponent,
    CarDetailsComponent,
    NewsDetailsComponent,
    RecipeDetailsComponent,
    MobileDetailsComponent,
    AnimalsComponent,
    AnimalDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path : 'cars', component : CarsComponent},
      { path : 'news', component : NewsComponent},
      { path : 'recipe', component : RecipeComponent},
      { path : 'mobile', component : MobileComponent},
      { path : 'animal', component:AnimalsComponent}
      

    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
