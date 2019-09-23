import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

newses : any = '';
  news = [
    {
      title :'NMC',
      img : 'https://www.yovizag.com/wp-content/uploads/2019/08/Medicos_web-758x474.jpg',
      description : 'Medical students and junior doctors in Vizag continued to stage hunger strike in Visakhapatnam against NMC (National Medical Commission) Bill. Consequently, the number of inpatients at KGH, Govt ENT and CHEST hospitals has significantly reduced as the doctors have boycotted their duties and only emergency surgeries are being attended.'
    },
    {
      title :'article 370',
      img : 'https://images.news18.com/ibnlive/uploads/877x0/jpg/2019/08/People-celebrate-governments-move.jpg',
      description : 'The decision to abrogate Article 370 ensures that there will be no "do nishan, ... a Bill it had not seen&had not been given! pic.twitter.com/2z0A6OpNUU ... Breaking his silence on the issue, Prime Minister Narendra Modi'
    },
    {
      title :'chandrayan-2',
      img : 'https://pbs.twimg.com/media/EBGzYCTVAAI7Hbd?format=jpg&name=small',
      description : 'The Chandrayaan-2 spacecraft is set to land on the south pole of the moon by August 20. It performed its first Earth-raising Orbit manoeuvre on 24 July. The second came on 26 July, third on 29 July and the fourth manoeuvre was completed successfully on 2 August.'
    },
    {
      title : 'sushma swaraj death',
      img : 'https://images.firstpost.com/wp-content/uploads/2019/08/Sushma-swaraj_380.jpg',
      description : 'Former external affairs minister Sushma Swaraj has been cremated with State honours at Lodhi Crematorium. Top dignitaries and others who came to the crematorium to pay their respects are now vacating the premises.'
    }
    
  ]
  constructor() { }

  sendNews(newses){
    this.newses=newses;
  }
  ngOnInit() {
  }

}
