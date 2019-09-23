import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisteComponent } from './registe/registe.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path : 'reg', component:RegisteComponent},
  {path : 'login', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
