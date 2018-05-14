import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PokemonApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PokemonApiProvider {

  pokUrl = "https://pokeapi.co/api/v2/pokemon/?limit=1000"

  constructor(public http: HttpClient) {
    console.log('Hello PokemonApiProvider Provider');
  }
   getPokemons() {

      return this.http.get( this.pokUrl)

   }
}
