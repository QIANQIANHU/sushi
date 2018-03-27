import { Component } from '@angular/core';
import { Style } from './models/style.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'our super expensive sushi genius food truck';
  currentFocus: string = "Really expensive!";
  sushiStyle: string = "Sushi Styles";
  ingredient: string = "Ingredient";

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
  }
