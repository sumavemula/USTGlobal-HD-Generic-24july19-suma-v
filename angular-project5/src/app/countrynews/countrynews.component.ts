import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-countrynews',
  templateUrl: './countrynews.component.html',
  styleUrls: ['./countrynews.component.css']
})
export class CountrynewsComponent implements OnInit {

  countrynews :any[]=[];
  constructor(private http : HttpClient) {}
    countryNews(country){
      console.log(country);
    this.http.get<any>(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=70341df1713b44b0a0e16d9ffa8ceee0`)
    .subscribe(resData=>{
      this.countrynews=resData.articles;
      console.log(this.countrynews);
    })
   }

  ngOnInit() {
  }

}
