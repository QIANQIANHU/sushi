import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'our super expensive sushi genius food truck';
  currentFocus: string = "Really expensive!";
  sushiStyle: string = "Chirashi-zushi";
}
