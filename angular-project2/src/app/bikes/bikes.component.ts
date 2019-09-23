import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {

  bikeData : any = '';
  bikes = [
    {
      brand : 'royal enfield',
      img: 'https://cdn.pixabay.com/photo/2015/08/27/09/06/bike-909690__340.jpg',
      description : 'Royal Enfield was a brand name under which The Enfield Cycle Company Limited of Redditch, Worcestershire[1] sold motorcycles, bicycles, lawnmowers and stationary engines which they had manufactured. Enfield Cycle Company also used the brand name Enfield without Royal.'
    }, 
    {
      brand : 'KTM',
      img: 'https://cdn.pixabay.com/photo/2017/06/26/22/43/ktm-2445495__340.jpg',
      description :'n 1953, businessman Ernst Kronreif became a sizable shareholder Kraftfahrzeug Trunkenpolz Mattighofen which was then renamed and registered as Kronreif and Trunkenpolz Mattighofen. KTM started serial production of R100 in 1954. With just 20 employees, motorcycles were built at the rate of three per day.The company’s first title was secured shortly thereafter with the 1954 Austrian 125...'
    },
    {
      brand : 'TVS',
      img: 'https://cdn.pixabay.com/photo/2017/12/29/05/58/sport-3046819__340.jpg',
      description :'n 1953, businessman Ernst Kronreif became a sizable shareholder Kraftfahrzeug Trunkenpolz Mattighofen which was then renamed and registered as Kronreif and Trunkenpolz Mattighofen. KTM started serial production of R100 in 1954. With just 20 employees, motorcycles were built at the rate of three per day.The company’s first title was secured shortly thereafter with the 1954 Austrian 125...'
    },
    {
      brand : 'Honda',
      img: 'https://image.shutterstock.com/image-photo/honda-motorbike-260nw-362016236.jpg',
      description :'Honda Motorcycle & Scooter India is a 100 per cent Indian subsidiary of Honda Motor Company. Founded in 1999, Honda was the erstwhile partner of Hero MotoCorp before both companies parted ways.Honda motorcycles are known for their handling, innovation and reliability. The company deserves credit for pioneering the scooter segment in India through the Activa range of scooters. Honda...'
    },
    {
      brand : 'RX100',
      img: 'https://cdnaka.droom.in/photos/listing/2019-03-14/15d1b4a0aab73a8050a87dc72388bd8a_large.jpg',
      description :'Yamaha derived its name from Torakusu Yamaha, the company’s founder. It started off by manufacturing Western musical instruments in Japan back 1887, and it wasn’t till 1955 that the company’s motorcycle division was set up. While Yamaha still manufactures musical instruments, with the distinction of being regarded as one of the leading names in the field, it also forms one fourth of the big...'
    },
    {
      brand : 'XYZ',
      img: 'https://cdn.pixabay.com/photo/2018/05/10/16/47/motorcycle-3387987__340.jpg',
      description :'XYZ derived its name from Torakusu Yamaha, the company’s founder. It started off by manufacturing Western musical instruments in Japan back 1887, and it wasn’t till 1955 that the company’s motorcycle division was set up. While Yamaha still manufactures musical instruments, with the distinction of being regarded as one of the leading names in the field, it also forms one fourth of the big...'
    }
    
  ]
  constructor() { }
  sendBike(bike){
    this.bikeData = bike;
  }
  ngOnInit() {
  }

}
