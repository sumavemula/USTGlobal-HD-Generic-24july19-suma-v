import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users =[];
  constructor() { }

  printForm(loginForm: NgForm){
    console.log(loginForm.value);
    this.users.push(loginForm.value);
    loginForm.reset();
    console.log(this.users)
  }
  deleteUser(user){
    let index=this.users.indexOf(user);
    this.users.splice(index,1);
  }
  ngOnInit() {
  }

}
