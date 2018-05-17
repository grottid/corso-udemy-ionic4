import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Pokemon} from "../../models/pokemon";

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.pok = navParams.get('pok');
      alert(this.pok)
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PokemonDetailPage');
  }

}
