import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user = [];
  constructor() { }

  ngOnInit() {
  }
  printForm(loginForm : NgForm){
    console.log(loginForm.value);
    this.user.push(loginForm.value);
    loginForm.reset();
    console.log(this.user);
  }

}
