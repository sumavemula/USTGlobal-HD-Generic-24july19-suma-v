import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-taskmanager',
  templateUrl: './taskmanager.component.html',
  styleUrls: ['./taskmanager.component.css']
})
export class TaskmanagerComponent implements OnInit {

  task=[];
  constructor() { }

  addTask(loginForm : NgForm){
    console.log(loginForm.value);
    this.task.push(loginForm.value);
    loginForm.reset();
    console.log(this.task);
  }
  ngOnInit() {
  }
  deleteTask(tasks){
    let index=this.task.indexOf(tasks);
    this.task.splice(index,1);
  }
}
