import { Component } from '@angular/core';

import { MdIcon, MdIconRegistry } from '@angular2-material/icon';

import {COLORS, Color} from './color';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    MdIconRegistry
  ],
  // We need to tell Angular's compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element
  directives: [
    MdIcon
  ],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [ ],
  // Our list of styles in our component. We may add more to compose many styles together
  styles: [ require('./home.css') ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./home.html')
})
export class Home {
  selectedColor: Color;
  colors: Color[];

  constructor() {
    this.colors = COLORS;
    this.selectedColor = this.colors[0];
  }

}
