import { Component } from '@angular/core';

import { AnimaisPage } from '../animais/animais';
import { DoacaoPage } from '../doacao/doacao';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AnimaisPage;
  tab3Root = DoacaoPage;

  constructor() {

  }
}
