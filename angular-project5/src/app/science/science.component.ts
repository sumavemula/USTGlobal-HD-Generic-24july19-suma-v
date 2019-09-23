import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

  scienceNews:[]=[];
  constructor(private http:HttpClient) {
    http.get<any>('https://newsapi.org/v2/top-headlines?category=science&apiKey=70341df1713b44b0a0e16d9ffa8ceee0')
    .subscribe(resData =>{
      this.scienceNews=resData.articles;
      console.log(this.scienceNews);
    })
   }

  ngOnInit() {
  }

}
