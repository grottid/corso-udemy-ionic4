import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PokemonApiProvider} from "../../providers/pokemon-api/pokemon-api";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   pokemons:[]

  constructor(public navCtrl: NavController, pokApi: PokemonApiProvider) {

      pokApi.getPokemons().subscribe( res =>  this.pokemons = res['results'])

  }

}
