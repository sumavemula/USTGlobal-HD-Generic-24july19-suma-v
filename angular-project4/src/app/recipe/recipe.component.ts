import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  respData : any = '';
  recipes = [
    {
      item : 'Amritsari Chicken Masala',
      img : 'https://i.ndtvimg.com/i/2015-01/murgh-makhni_625x350_61421325380.jpg',
      description : 'Chicken is a Punjabi cuisine favorite. Heres the recipe of one of its most prized Indian dishes. Boneless chunks of chicken lathered with a rich, buttery gravy of cream, tomatoes and spices. This cuisine is definitely worth trying, especially during festive season. So, impress your guests with nothing but the best.'
    },
    {
      item : 'Teekha Murg',
      img : 'https://i.ndtvimg.com/i/2015-01/teekha-murgh_625x350_41421325402.jpg',
      description : 'For all the spice fans! Tender chicken spiked with fiery masalas, cooked in mustard oil with the tang of tomatoes to balance the flavours. This spicy delicacy should be teamed with either rumali roti or khamiri roti to balance the spiciness. If you are a die-hard chicken lover, this Indian chicken recipe is for you.'
    },
    {
      item : 'Murg Malaiwala',
      img : 'https://i.ndtvimg.com/i/2015-01/murgh-malaiwala_625x350_51421325426.jpg',
      description : 'Chicken drumsticks laced with delicate flavors of cream, milk, saffron, rose petals and mild spices. This recipe is not made with oil or ghee; but it will definitely make a great start to your festive cheer. Make sure you garnish the dish with raw almonds that only enhance the dishs flavour.'
    },
    {
      item : 'Kerala Chicken Roast',
      img : 'https://i.ndtvimg.com/i/2015-01/kerala-roast-chicken_625x350_51421325457.jpg',
      description : 'A crisp fried chicken recipe from Gods own country. A family favorite, serve with a generous squeeze of lime. This roasted chicken could be used as a starter for your festival parties and trust it to be the super-hero of your party. '
    },
    {
      item : 'Butter Chicken',
      img : 'https://i.ndtvimg.com/i/2015-01/butter-chicken_625x350_71421325695.jpg',
      description : 'Straight from a Punjabi kitchen, butter chicken has been an instant hit through the years. Marinated overnight, the chicken is roasted and cooked in tomato puree, cream and masalas. Enjoy the classic creaminess of the dish with this recipe.'
    },
    {
      item : 'Baked Chicken Seekh',
      img : 'https://i.ndtvimg.com/i/2018-01/seekh-kebab_620x330_41516709980.jpg',
      description : 'A healthier chicken snack to gorge on, baked chicken seekh has mild flavours of onion, ginger garlic, green chillies, red chillie powder, seekh kebab masala and pepper and bakes to perfection! This one is perfectly tweaked according to your diet plans.'
    },
    {
      item : '21.Chicken Potli',
      img : 'https://c.ndtvimg.com/2019-03/tt143l88_potli_625x300_04_March_19.jpg',
      description : 'So go on and indulge! You can try a different recipe every week and surprise your friends and family. If you love spicy food, tweak the recipes according to your taste.Dig into the crunchy chicken potli which is the perfect starter for your next party or just a great evening snack in the rainy season.'
    },
  ]
  constructor() { }

  sendrecipes(rnews){
    this.respData=rnews;
    console.log(rnews);
  }
  ngOnInit() {
  }

}
