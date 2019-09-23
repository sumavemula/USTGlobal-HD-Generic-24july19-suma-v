import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attr-dir',
  templateUrl: './attr-dir.component.html',
  styleUrls: ['./attr-dir.component.css']
})
export class AttrDirComponent implements OnInit {

  isSuccess=true;
  isDanger=false;
  classesArray = ["text-danger","bg-bright", "mt-5"]
  constructor() { }

  ngOnInit() {
    setInterval(()=>{
      this.isSuccess=!this.isSuccess;
    },1000);
  }

}
