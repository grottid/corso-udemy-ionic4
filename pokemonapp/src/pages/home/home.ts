import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PokemonApiProvider} from "../../providers/pokemon-api/pokemon-api";

import { Pokemon} from "../../models/pokemon";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   pokemons:[Pokemon]

  constructor(public navCtrl: NavController, pokApi: PokemonApiProvider) {

      pokApi.getPokemons().subscribe( (res: [Pokemon])=>  this.pokemons = res)

  }


}
