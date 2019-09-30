import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  typicode: any[]=[];
  constructor(private http: HttpClient) {
    http.get<any>('http://jsonplaceholder.typicode.com/users')
    .subscribe(resData =>{
      this.typicode=resData;
      console.log(this.typicode);
    })
  }
  ngOnInit() {
  }
  

}
