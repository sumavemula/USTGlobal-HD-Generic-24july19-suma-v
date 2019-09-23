import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-way',
  templateUrl: './to-way.component.html',
  styleUrls: ['./to-way.component.css']
})
export class ToWayComponent implements OnInit {

  constructor() { }

  backgroundColor:'red';
  img :'';
  ngOnInit():void {

  }
  buttonEvent(data){

  }
  changeColor(data){
    this.backgroundColor=data;
  }
  changeImage(data){
    this.img=data;
  }
  
  

}
