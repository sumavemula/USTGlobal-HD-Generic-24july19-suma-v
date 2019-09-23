import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  user=[];
  constructor() { }
  printForm(signinForm:NgForm){
    console.log(signinForm.value);
    this.user.push(signinForm.value);
    signinForm.reset();
    console.log(this.user);

  }

  ngOnInit() {
  }

}
