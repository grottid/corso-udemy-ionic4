import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Pokemon} from "../../models/pokemon";
import {Events} from "ionic-angular";

/**
 * Generated class for the SearchbarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-searchbar',
  templateUrl: 'searchbar.html'
})
export class SearchbarComponent {

    @Input() search: string;
    @Input() pokemons  : Pokemon[]
    @Input() allpok : Pokemon[]
    shouldShowCancel = true
    @Output() pokFilter : EventEmitter<string> = new EventEmitter<string>()

  constructor( private event: Events) {
    console.log('Hello SearchbarComponent Component');
    this.search = '';
  }
onInput($evt) {
    console.log(this.search)
    console.log($evt.target.value)

        this.event.publish('pokFiltered',this.search)
        this.pokFilter.emit(this.search)
}
    onCancel($evt) {
        this.event.publish('pokFiltered','')
        this.pokFilter.emit('')
    }
}
