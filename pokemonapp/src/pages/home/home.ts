import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PokemonApiProvider} from "../../providers/pokemon-api/pokemon-api";
import {IPokemonData} from "../../models/pokemon-data";
import {IPokemonResult} from "../../models/pokemon-results";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   pokemons:[IPokemonData]

  constructor(public navCtrl: NavController, pokApi: PokemonApiProvider) {

      pokApi.getPokemons().subscribe( (res: IPokemonResult)=>  this.pokemons = res.results)

  }

}
