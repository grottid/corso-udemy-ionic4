import { Component } from '@angular/core';
import {LoadingController, NavController} from 'ionic-angular';
import {PokemonApiProvider} from "../../providers/pokemon-api/pokemon-api";

import { Pokemon} from "../../models/pokemon";
import {PokemonDetailPage} from "../pokemon-detail/pokemon-detail";
import {IPokemonDetails} from "../../models/pokemon-details";
import {PokDataProvider} from "../../providers/pok-data/pok-data";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   pokemons:Pokemon[]

   loading: any
  constructor(public navCtrl: NavController, private pokApi: PokDataProvider,
              private loadingCtrl: LoadingController) {
        this.presentLoading()

      pokApi.getPokemons().subscribe( (res: [Pokemon])=>  {
          this.loading.dismiss()
          this.pokemons = res.sort( (a, b) => {
                   if(a.name === b.name) {
                       return 0
                   }
                   return a.name > b.name ? 1 : -1
              })
      }
          )

  }
    presentLoading() {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange : true
        });

        this.loading.present();


    }

  showPokDetail( pok: Pokemon) {
       this.presentLoading()
       this.pokApi.getPokemonDetails(pok).subscribe(
           (res:IPokemonDetails) => {
               this.navCtrl.push('PokemonDetailPage', {pokDetail: res, pok:pok})
           }
       )

  }

}
