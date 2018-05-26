import { NgModule } from '@angular/core';
import {IonicModule} from "ionic-angular";
import {CommonModule} from "@angular/common";
import { PokSearchbarComponent } from './pok-searchbar/pok-searchbar';
@NgModule({
	declarations: [PokSearchbarComponent],
	imports: [IonicModule, CommonModule],
	exports: [PokSearchbarComponent]
})
export class PokSearchBarModule {}
