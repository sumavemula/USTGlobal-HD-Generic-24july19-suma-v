import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  condition = false;
  users = [
    {
      id : 100,
      name : 'suma',
      city : 'tirupati'
    },
    {
      id : 101,
      name : 'vani',
      city : 'mysore'
    },
    {
      id : 103,
      name : 'navya',
      city : 'bangalore'
    },
    {
      id : 104,
      name : 'swapna',
      city : 'Hyderabad'
    },
    {
      id : 105,
      name : 'cherry',
      city : 'Nellore'
    }

    
  ]

  constructor() { }

removeUser(user){
    let index = this.users.indexOf(user);
    this.users.splice(index, 1);
    this.condition = true;
}

  ngOnInit() {
  }

}
