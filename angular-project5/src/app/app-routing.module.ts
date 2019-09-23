import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { MoviesComponent } from './movies/movies.component';
import { FirebaseComponent } from './firebase/firebase.component';
import { BusinessComponent } from './business/business.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { GeneralComponent } from './general/general.component';
import { HealthComponent } from './health/health.component';
import { ScienceComponent } from './science/science.component';
import { SportsComponent } from './sports/sports.component';
import { TechnologyComponent } from './technology/technology.component';
import { UsnewsComponent } from './usnews/usnews.component';
import { UsersComponent } from './users/users.component';
import { CountrynewsComponent } from './countrynews/countrynews.component';


const routes: Routes = [
  { path : 'home', component : HomeComponent},
  { path : 'news', component : NewsComponent},
  { path : 'movies', component : MoviesComponent},
  { path : 'firebase', component : FirebaseComponent},
  { path : 'business', component : BusinessComponent},
  { path : 'entertainment', component : EntertainmentComponent},
  { path : 'general', component : GeneralComponent},
  { path : 'health', component : HealthComponent},
  { path : 'science', component : ScienceComponent},
  { path : 'sports', component : SportsComponent},
  { path : 'technology', component : TechnologyComponent},
  { path : 'usnews', component : UsnewsComponent},
  { path : 'users', component : UsersComponent},
  { path : 'cnews', component : CountrynewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
