import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  carData : any='';
  cars = [
    { 
      brand : 'BMW',
      img : 'https://cdn.pixabay.com/photo/2015/12/04/09/33/audi-1076316__340.jpg',
      description :'BMW (German pronunciation: [ˈbeːˈʔɛmˈveː] ( listen)) is a German multinational company which produces automobiles and motorcycles. The company was founded in 1916 as a manufacturer of aircraft engines, which it produced from 1917 until 1918 and again from 1933 to 1945'
    },
    { 
      brand : 'BENZ',
      img : 'https://cdn.pixabay.com/photo/2015/07/03/02/10/audi-r8-829800__340.jpg',
      description :'Mercedes-Benz (German: [mɛɐ̯ˈtseːdəsˌbɛnts, -dɛs-]) is a German global automobile marque and a division of Daimler AG. The brand is known for luxury vehicles, buses, coaches, and trucks. The headquarters is in Stuttgart, Baden-Württemberg. The name first appeared in 1926 under Daimler-Benz.'
    },
    { 
      brand : 'Toyota',
      img : 'https://cdn.pixabay.com/photo/2015/06/08/11/07/audi-801389__340.jpg',
      description :'Toyota Motor Corporation began in 1933 as a division of the Toyoda Automatic Loom Works, Ltd. (later Toyota Industries Corporation, now a subsidiary), a Japanese manufacturer founded by Toyoda Sakichi. Its first production car, the Model AA sedan, was released in 1936.'
    },
    { 
      brand : 'Audi',
      img : 'https://cdn.pixabay.com/photo/2016/07/29/21/07/audi-r8-v10-plus-1555775__340.jpg',
      description :'The history of AUDI AG extends back to the 19th century. Find out more about the great personalities from the company’s 100-plus years of history. Learn about the fascinating evolution of the various models and major milestones in the fields of car manufacturing, motorcycle, engine production and motor racing.'
    },
    { 
      brand : 'range rover',
      img : 'https://cdn.pixabay.com/photo/2018/04/28/13/28/car-3357296__340.jpg',
      description :'The Land Rover Range Rover (generally known simply as a Range Rover) is a full-sized luxury sport utility vehicle (SUV) from Land Rover, a marque of Jaguar Land Rover. The Range Rover was launched in 1970 by British Leyland. This flagship model is now in its fourth generation.'
    },
    { 
      brand : 'maruthi',
      img : 'https://cdn.pixabay.com/photo/2017/02/20/16/58/audi-2083249__340.jpg',
      description :'Maruti Suzuki India Limited, formerly known as Maruti Udyog Limited, is an automobile manufacturer in India. It is a 56.21% owned subsidiary of the Japanese car and motorcycle manufacturer Suzuki Motor Corporation. As of July 2018, it had a market share of 53% of the Indian passenger car market.'
    },
    { 
      brand : 's cross',
      img : 'https://cdn.pixabay.com/photo/2018/08/11/20/57/audi-r8-3599494__340.jpg',
      description :'Maruti S-Cross Features: The Maruti crossover comes loaded to brim this time around. It gets all-LED headlamps, leather upholstery, cruise control, 60:40 split rear seats and a 7-inch infotainment system with Android Auto connectivity.'
    },
    { 
      brand : 'shift',
      img : 'https://cdn.pixabay.com/photo/2018/04/14/16/37/audi-3319375__340.jpg',
      description :'Maruti S-Cross Features: The Maruti crossover comes loaded to brim this time around. It gets all-LED headlamps, leather upholstery, cruise control, 60:40 split rear seats and a 7-inch infotainment system with Android Auto connectivity.'
    },
    { 
      brand : 'ford',
      img : 'https://cdn.pixabay.com/photo/2017/02/20/16/58/audi-2083249_960_720.jpg',
      description :'The Companys business includes designing, manufacturing, marketing, and servicing a line of Ford cars, trucks, and sport utility vehicles (SUVs), as well as Lincoln luxury vehicles. The Company operates in four segments: Automotive, Financial Services, Ford Smart Mobility LLC, and Central Treasury Operations'
    }
  ]
  constructor() { }

  sendCar(car){
    this.carData = car;
  }

  ngOnInit() {
  }

}
