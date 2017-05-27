import { Component } from '@angular/core';

import { CachorrosPage } from '../cachorros/cachorros';
import { DoacaoPage } from '../doacao/doacao';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CachorrosPage;
  tab3Root = DoacaoPage;

  constructor() {

  }
}
