import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  technologyNews : [] = [];
  constructor(private  http : HttpClient) { 
    http.get<any>('https://newsapi.org/v2/top-headlines?category=technology&apiKey=70341df1713b44b0a0e16d9ffa8ceee0')
    .subscribe(resData =>{
      this.technologyNews = resData.articles;
      console.log(this.technologyNews);
    })
  }

  ngOnInit() {
  }

}
