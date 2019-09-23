import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() {}
get name(){
  return this.registerForm.get('name');
}
get email(){
  return this.registerForm.get('email');
}
get mobile(){
  return this.registerForm.get('mobile');
}
get password(){
  return this.registerForm.get('password');
}
registerForm = new FormGroup({
  name : new FormControl('',[Validators.required, Validators.minLength(3)]),
  email : new FormControl('', [Validators.email,Validators.minLength(5),Validators.required]),
  mobile : new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
  password : new FormControl('',[Validators.required, Validators.minLength(4)])
});

  ngOnInit() {
  }
  printForm(form){
    console.log(form);
  }

}
