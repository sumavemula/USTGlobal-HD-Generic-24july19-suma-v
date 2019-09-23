import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dir',
  templateUrl: './dir.component.html',
  styleUrls: ['./dir.component.css']
})
export class DirComponent implements OnInit {

  condition=false;
  users=[
    {
      id : 100,
      name: 'suma',
      city :'tirupati'
    },
    {
      id : 101,
      name: 'vani',
      city :'Mysore'
    },
    {
      id : 102,
      name: 'nagi',
      city :'chennai'
    },
    {
      id : 104,
      name: 'swapna',
      city :'blr'
    },
  ]
  constructor() { }
  removeUser(user){
    let index=this.users.indexOf(user);
    this.users.splice(index,1);
    this.condition=true;
  }

  ngOnInit() {
  }

}
