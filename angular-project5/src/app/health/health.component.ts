import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  healthNews :[]=[];
  constructor(private http:HttpClient) {
    http.get<any>('https://newsapi.org/v2/top-headlines?category=health&apiKey=70341df1713b44b0a0e16d9ffa8ceee0')
    .subscribe(resData =>{
      this.healthNews=resData.articles;
      console.log(this.healthNews);
    })
   }

  ngOnInit() {
  }

}
