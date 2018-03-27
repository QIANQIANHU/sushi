# Sushi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Create new project

* $ ng new project-name
* revise index.html(project-name/src/index.html) add"Loding...."
* $ ng serve
and navigate to http://localhost:4200/
* edit app.component.html(project-name/src/app/app.component.html)
* update title in project-name/src/app/app.component.ts
* add{{}}in HTML and Eg:
  in export class AppComponent {} add
  1.sushiStyle: string = "Sushi Styles";(single time insert)
  2.after export class AppComponent {} add class(if we need add multiple objests should build a class)
    export class Styles {
    public done: boolean = false;
    constructor(public description: string) { }
  }
  firstStyle: Styles = new Styles("Chirashi-zushi (ちらし寿司, scattered sushi)");(use class)
}
* Build app/models folder, touch app/models/sushi.model.ts ,puts class in this file. Meanwhile, import { Styles } from './models/sushi.model'; on app/app.component.ts

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
