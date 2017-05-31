import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdocaoPage } from './adocao';

@NgModule({
  declarations: [
    AdocaoPage,
  ],
  imports: [
    IonicPageModule.forChild(AdocaoPage),
  ],
  exports: [
    AdocaoPage
  ]
})
export class AdocaoPageModule {}
