import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor() { }
  task=[];
  
  ngOnInit() {
  }
sendTask(loginForm:NgForm){
  this.task.push(loginForm.value);
  loginForm.reset();
  console.log(this.task);
}
deleteTask(tasks){
  let index=this.task.indexOf(tasks);
  this.task.splice(index,1);
}
}
