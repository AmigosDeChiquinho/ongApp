import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PagamentoPage } from './pagamento';
import { ScriptHackComponent } from '../../components/script-hack/script-hack';


@NgModule({
  declarations: [
    PagamentoPage,
    ScriptHackComponent
  ],
  imports: [
    IonicPageModule.forChild(PagamentoPage),
  ],
  exports: [
    PagamentoPage
  ]
})
export class PagamentoPageModule {}
