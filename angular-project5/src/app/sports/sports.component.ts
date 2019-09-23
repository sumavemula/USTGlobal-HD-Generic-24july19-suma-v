import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  sportsNews :[]=[];
  constructor(private http: HttpClient) { 
    http.get<any>('https://newsapi.org/v2/top-headlines?category=sports&apiKey=70341df1713b44b0a0e16d9ffa8ceee0')
    .subscribe(resData =>{
      this.sportsNews=resData.articles;
      console.log(this.sportsNews);
    })
  }

  ngOnInit() {
  }

}
