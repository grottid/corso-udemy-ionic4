import { Component } from '@angular/core';
import {Events, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Pokemon} from "../../models/pokemon";
import {IPokemonDetails} from "../../models/pokemon-details";
import {PokDataProvider} from "../../providers/pok-data/pok-data";

/**
 * Generated class for the PokemonDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pokemon-detail',
  templateUrl: 'pokemon-detail.html',
})

export class PokemonDetailPage {
  
   pok : Pokemon
    pokdetails: IPokemonDetails
    isFavorite = false

  constructor(
      private evt : Events,
      private pokData: PokDataProvider,
       private navParams : NavParams,
       private  navCtrl : NavController
  ) {

      this.pok = this.navParams.get('pok')
    this.pokdetails =  this.navParams.get('pokDetail')
      




      
  }
   addToFavorite() {
       console.log('add to favorite')
       this.isFavorite = !this.isFavorite
       this.pokData.addToFavorite(this.pok, this.isFavorite)

       this.evt.publish('favorite-added', this.pok)
       this.navCtrl.parent.select(1)

   }
  ionViewDidLoad() {
     this.pokData.getFavoritePokemons('').subscribe( res => {
         const pok = res.filter( pokEle => pokEle.name === this.pok.name)
         this.isFavorite = pok.length > 0 ? true : false
     })
  }

}
