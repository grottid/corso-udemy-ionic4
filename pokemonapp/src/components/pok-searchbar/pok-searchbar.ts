import { Component } from '@angular/core';

/**
 * Generated class for the PokSearchbarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pok-searchbar',
  templateUrl: 'pok-searchbar.html'
})
export class PokSearchbarComponent {

  text: string = 'Search bar';

  constructor() {
    console.log('Hello PokSearchbarComponent Component');
    this.text = 'Hello World';
  }

}
