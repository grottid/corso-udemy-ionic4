import { Component } from '@angular/core';
import { IonicPage,  NavParams } from 'ionic-angular';
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

  constructor(private pokData: PokDataProvider, private navParams : NavParams) {

      this.pok = this.navParams.get('pok')
    this.pokdetails =  this.navParams.get('pokDetail')
      




      
  }
   addToFavorite() {
       console.log('add to favorite')
       this.pokData.addToFavorite(this.pok)

   }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PokemonDetailPage');
  }

}
