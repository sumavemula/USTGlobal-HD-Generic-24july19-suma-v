import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {

  generalNews : []=[];
  constructor(private http: HttpClient) {
    http.get<any>('https://newsapi.org/v2/top-headlines?category=general&apiKey=70341df1713b44b0a0e16d9ffa8ceee0')
    .subscribe(resData =>{
      this.generalNews=resData.articles;
      console.log(this.generalNews);
    })
   }

  ngOnInit() {
  }

}
