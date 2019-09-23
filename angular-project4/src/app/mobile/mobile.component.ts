import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

mobileData : any='';  
  mobiles : [
    {
      brand : 'MI',
      img : 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Xiaomi_Redmi_Note.JPG/1024px-Xiaomi_Redmi_Note.JPG',
      description : 'It has a polycarbonate body, dual-SIM support and runs on MIUI 8 based on Android 6.0.1 Marshmallow. The Redmi 4 has a 5-inch 720x1280 pixels display, is powered by a 1.4 GHz quad-core processor, and has 2GB of RAM.'
    },
    {
      brand : 'Vivo',
      img : 'https://www.91-cdn.com/pricebaba-images/images/product/mobile/49662/vivo-v11-l-260374.jpg?tr=h-120',
      description : 'Vivo is a Chinese multinational manufacturer of smartphones headquartered in Dongguan, Guangdong province, China. Founded in 1995, vivo entered the telecommunication and consumer electronics industry with landline phones and wireless phones. From 2011, vivo started its smartphone business.'
    },
    {
      brand : 'oppo',
      img : 'data:image/jpeg;base64,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',
      description : 'OPPO Electronics Corp. is an electronics manufacturer based in Guangdong, China. Known for its smartphones, the company also makes MP3 players, portable media players, LCD-TVs, and DVD/Blu-ray players. It was founded in 2004. The company is also a smartphone maker.'
    },
    {
      brand : 'realme',
      img : 'https://i.gadgets360cdn.com/products/small/1551680882_120_realme3_db.jpg?downsize=*:90&output-quality=80',
      description : 'The phone comes with a 6.20-inch touchscreen display with a resolution of 720 pixels by 1520 pixels. The Realme 3i is powered by 2GHz octa-core MediaTek Helio P60 processor and it comes with 4GB of RAM. ... The Realme 3i is a dual SIM (GSM) smartphone that accepts Nano-SIM and Nano-SIM.'
    },
    {
      brand : 'apple',
      img : 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSIrmPchQYsTcGxiiUe7m4ls3YrHx5oZYRjnO2VTN52T1mvartsJk2GUhzXM0oAlQtg-7-4fEEvog&usqp=CAc',
      description : 'The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface. ... Apple sold 13 million iPhones in the devices first five quarters on the market.'
    },
    {
      brand : 'one plus',
      img : 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS1cdNbH_IfQxwHm8v2Kn0zr0Pbs1bfdH9FrE2zpBssFV2PiHtzKLS5GqjdviZJkA&usqp=CAc',
      description : 'The phone is available with 64 GB of internal storage. The Smartphone is powered by 2.5 GHz Quad core Qualcomm Snapdragon 801 Processor. ... OnePlus One comes with a 13 megapixel rear Camera and 5 megapixel front Camera. It also supports Face Detection and high dynamic range(HDR) imaging.'
    },
    {
      brand : 'nokia',
      img : 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTOvw5XoVNun70gPT3RSVVDHbJH3Lg7xGWQ5x9VA8jWsV2_cVTFDIlkIZ6N4TWu&usqp=CAc',
      description : 'Nokia A300 is Nokias Series 40 offering that combines a keypad and a touchscreen. The phone has 1 GHz processor, 3G connectivity and preloaded with Angry Birds, the first time the game has been offered on non-smartphones. Nokia A303 is a phone with QWERTY keypad input and a touchscreen.'
    },

  ]
  constructor() { }

  sendMobile(mobile){
    this.mobileData=mobile;
    console.log(mobile);
  }
  ngOnInit() {
  }

}
