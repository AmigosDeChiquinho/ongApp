import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CaixaDoacao } from '../../models/caixaDoacao';
import { CaixaProvider } from '../../providers/caixa/caixa';
import { ToastController } from 'ionic-angular';
import { Auth, User } from '@ionic/cloud-angular';


@Component({
  selector: 'page-doacao',
  templateUrl: 'doacao.html'
})
export class DoacaoPage {

	caixas: CaixaDoacao[] = [];

  constructor(public navCtrl: NavController,public cxProvider: CaixaProvider
  	, public toastCtrl: ToastController, public auth: Auth) {
  	this.cxProvider.retrieveAll().subscribe(
  		(res)=>{this.caixas = res},
  		(error)=>{
  			let toast = this.toastCtrl.create({
				          message: error,
				          duration: 3000,
				          position: "top"
		    			});
		    toast.present()
  		}
  		)
  }

  doar(){
    this.navCtrl.push("PagamentoPage");
  }

  solicitar(){
  	this.navCtrl.push("FormCaixaPage")
  }

}
