import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usnews',
  templateUrl: './usnews.component.html',
  styleUrls: ['./usnews.component.css']
})
export class UsnewsComponent implements OnInit {

  usNews : []=[];
  constructor(private http : HttpClient) {
    http.get<any>('https://newsapi.org/v2/top-headlines?country=us&apiKey=70341df1713b44b0a0e16d9ffa8ceee0')
    .subscribe(resData =>{
      this.usNews=resData.articles;
      console.log(this.usNews);
    })
   }

  ngOnInit() {
  }

}
