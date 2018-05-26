import { Component } from '@angular/core';
import {Events} from "ionic-angular";

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

  constructor(
      private evt : Events
  ) {
    console.log('Hello PokSearchbarComponent Component');
    this.text = '';
  }
    onInput(evt) {
       this.evt.publish('pok-searched', this.text)

    }
    onCancel(evt) {
        this.evt.publish('pok-searched', this.text)
    }
}
