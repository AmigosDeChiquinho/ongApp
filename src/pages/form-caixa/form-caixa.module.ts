import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormCaixaPage } from './form-caixa';

@NgModule({
  declarations: [
    FormCaixaPage,
  ],
  imports: [
    IonicPageModule.forChild(FormCaixaPage),
  ],
  exports: [
    FormCaixaPage
  ]
})
export class FormCaixaPageModule {}
