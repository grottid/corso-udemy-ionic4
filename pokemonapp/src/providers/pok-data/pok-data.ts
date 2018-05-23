import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {IPokemonDetails} from "../../models/pokemon-details";
import {Observable} from "rxjs/Observable";
import {IPokemonResult} from "../../models/pokemon-results";
import {map} from "rxjs/operators";
import {IPokemonData} from "../../models/pokemon-data";
import {Pokemon} from "../../models/pokemon";
import {PokemonApiProvider} from "../pokemon-api/pokemon-api";
import {of} from "rxjs/observable/of";

/*
  Generated class for the PokDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PokDataProvider {

  constructor(private pokApi: PokemonApiProvider) {
    console.log('Hello PokDataProvider Provider');
  }
    getPokemons():Observable<Pokemon[]> {

    if( localStorage.getItem('pokemons')) {
        const pokResults = JSON.parse(localStorage.getItem('pokemons'))
        if(pokResults){
            return of(pokResults)
        }
    }

      return this.pokApi.getPokemons()

    }
    getPokemonDetails(pok: Pokemon): Observable<IPokemonDetails> {

        if( localStorage.getItem('pokemon')) {
            const pokResults = JSON.parse(localStorage.getItem('pokemon'))
            if(pokResults){
                return of(pokResults)
            }
        }

      return this.pokApi.getPokemonDetails(pok)


    }

}
