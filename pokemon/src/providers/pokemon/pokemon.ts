import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map, switchMap, mergeMap, merge} from 'rxjs/operators'
import {Pokemon} from "../../models/Pokemon";

import { of } from "rxjs/observable/of";
import {concatAll} from "rxjs/operator/concatAll";


@Injectable()
export class PokemonProvider {

  private pokeUrl = "https://pokeapi.co/api/v2/pokemon/?limit=10000"

  constructor(public http: HttpClient) {

  }
   getPokemons() {
     return this.http.get(this.pokeUrl).pipe(
         switchMap(res => of(...res['results'])),
         map( res => new Pokemon(res['name'], res['url'])),




     )

   }


}
