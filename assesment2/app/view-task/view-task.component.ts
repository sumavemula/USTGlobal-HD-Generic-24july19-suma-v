import { Component, OnInit, Input } from '@angular/core';
import { AddTaskComponent } from '../add-task/add-task.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  @Input() public taskDetails:any='';
  constructor() { }

  ngOnInit() {
  }

}
