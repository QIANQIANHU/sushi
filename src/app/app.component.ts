import { Component } from '@angular/core';
import { Style } from './models/style.model';
import { Ingredient } from './models/ingredient.model';
import { Rice } from './models/rice.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'our super expensive sushi genius food truck';
  sushiStory: string = "Really expensive!";
  sushiStyle: string = "Sushi Styles";
  ingredient: string = "Fish Ingredient";

  styles: Style [] = [
    new Style("Chirashi-zushi (ちらし寿司, scattered sushi)", 199),
    new Style("Inari-zushi (稲荷寿司, fried tofu pouch)", 299),
    new Style("Maki-zushi (巻き寿司, rolled sushi)", 399),
    new Style("Nigiri-zushi (握り寿司, hand-formed sushi)", 499),
  ]//use coma this time

    // firstStyle: Style = new Style("Chirashi-zushi (ちらし寿司, scattered sushi)", 199);

    // style = {
    //   description: "Chirashi-zushi (ちらし寿司, scattered sushi)"
    //   }

  ingredients: Ingredient [] = [
    new Ingredient("tuna (maguro, shiro-maguro)", 50),
    new Ingredient("yellowtail (hamachi)", 89),
    new Ingredient("snapper (kurodai)", 49),
    new Ingredient("mackerel (saba)", 55),
    new Ingredient("salmon (sake)", 60),
  ]

  // placeSushiStyle(){
  //   alert("clickable!");
  // }
  //
  // placeSushiIngredient(){
  //
  // }

  availableEveryday(fishIngredient){
    if (fishIngredient.price <= 55){
      return "text-info";
    } else if ((fishIngredient.price > 55) && (fishIngredient.price <= 60)){
      return "text-warning";
    } else {
      return "text-danger";
    }
  }
}
