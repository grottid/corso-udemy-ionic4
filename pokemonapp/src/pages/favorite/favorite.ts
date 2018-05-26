import { Component } from '@angular/core';
import {Events, IonicPage, LoadingController, NavController} from 'ionic-angular';
import {PokDataProvider} from "../../providers/pok-data/pok-data";
import {Observable} from "rxjs/Observable";
import {Pokemon} from "../../models/pokemon";
import {IPokemonDetails} from "../../models/pokemon-details";
import {PokemonApiProvider} from "../../providers/pokemon-api/pokemon-api";

/**
 * Generated class for the FavoritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorite',
  templateUrl: 'favorite.html',
})
export class FavoritePage {

  favorites$ : Observable<Pokemon[]>
    loading: any
  constructor(
      private navCtrl: NavController,
      private pokApi: PokDataProvider,
       private loadingCtrl : LoadingController,
       private  evt : Events,
      private pokData: PokDataProvider) {


      this.evt.subscribe('pok-searched',  res => {
          this.reloadPoks(res)
      })

      this.evt.subscribe('favorite-added', () => {
         this.reloadPoks('')
      })

  }
   reloadPoks(namefilter : string) {
       this.favorites$ = this.pokData.getFavoritePokemons(namefilter)
   }
  ionViewDidLoad() {
    this.reloadPoks('')

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
