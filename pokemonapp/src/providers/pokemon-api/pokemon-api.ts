import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {IPokemonResult} from "../../models/pokemon-results";
import {map} from "rxjs/operators";
import {IPokemonData} from "../../models/pokemon-data";
import {Pokemon} from "../../models/pokemon";

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
   getPokemons():Observable<Pokemon[]> {

      return this.http.get<IPokemonResult>( this.pokUrl).pipe(
            map((res: IPokemonResult)  =>  res.results),

            map( (res: [IPokemonData]) => {
                return res.map( pokData => new Pokemon(pokData) )
            })


      )

   }
}
