import { Component } from '@angular/core';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {FavoritePage} from "../favorite/favorite";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = FavoritePage;
  tab3Root = ContactPage;

  constructor() {

  }
}
