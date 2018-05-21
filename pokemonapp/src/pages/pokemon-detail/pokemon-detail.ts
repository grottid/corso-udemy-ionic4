import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Pokemon} from "../../models/pokemon";
import {PokemonApiProvider} from "../../providers/pokemon-api/pokemon-api";
import {Observable} from "rxjs/Observable";
import {pluck} from "rxjs/operators";
import {HomePage} from "../home/home";

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
    pokdetails: Observable<any>

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private pokApi: PokemonApiProvider
  ) {

      this.pokdetails =      pokApi.getPokemonDetails(this.pok)




      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PokemonDetailPage');
  }

}
