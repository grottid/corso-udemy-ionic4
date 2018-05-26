import { NgModule } from '@angular/core';
import { SearchbarComponent } from './searchbar/searchbar';
import {IonicModule} from "ionic-angular";
import {CommonModule} from "@angular/common";
@NgModule({
	declarations: [SearchbarComponent],
	imports: [IonicModule, CommonModule],
	exports: [SearchbarComponent]
})
export class SearchBarModule {}
