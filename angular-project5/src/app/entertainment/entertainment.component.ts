import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit {

  entertainmentNews :any[] = [];
  constructor(private http: HttpClient) { 
    http.get<any>('https://newsapi.org/v2/top-headlines?category=entertainment&apiKey=70341df1713b44b0a0e16d9ffa8ceee0')
    .subscribe(resData=>{
      this.entertainmentNews = resData.articles;
      console.log(this.entertainmentNews);
    })
  }

  ngOnInit() {
  }

}
