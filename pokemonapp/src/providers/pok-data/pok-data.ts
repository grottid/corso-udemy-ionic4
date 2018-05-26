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
        const storageId = 'pokemon-' + pok.name
        if( localStorage.getItem(storageId)) {
            const pokResults = JSON.parse(localStorage.getItem(storageId))

            if(pokResults){
                return of(pokResults)
            }
        }

      return this.pokApi.getPokemonDetails(pok)


    }
    getFavoritePokemons() {
        let favorites : Pokemon[] = []
        if( localStorage.getItem('favorite-pokemons')) {
            const favoritesLocal = JSON.parse(localStorage.getItem('favorite-pokemons'))
            if(favoritesLocal){
                favorites = favoritesLocal

            }
        }
        favorites.sort( (a, b) => {
            if(a.name === b.name) {
                return 0
            }
            return a.name > b.name ? 1 : -1
        })

        return of(favorites)
    }

    addToFavorite(pok: Pokemon, add: boolean) {
         let favorites : Pokemon[] = []

        if( localStorage.getItem('favorite-pokemons')) {
             const favoritesLocal = JSON.parse(localStorage.getItem('favorite-pokemons'))
            if(favoritesLocal){
                 favorites = favoritesLocal

            }
        }
        if(add) {
            favorites.push(pok)
        } else {
            favorites = favorites.filter( res => res.name !== pok.name)
        }

        console.log(favorites)
        localStorage.setItem('favorite-pokemons', JSON.stringify(favorites))
        console.log('add to favorite localstorage')
    }
}
