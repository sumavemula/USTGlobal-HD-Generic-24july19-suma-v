import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  github :any[]=[];
  constructor(private http : HttpClient) {
    http.get<any>('https://api.github.com/users')
    .subscribe(resData =>{
      this.github=resData;
      console.log(this.github);
    })
   }

  ngOnInit() {
  }

}
