import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CaixaProvider } from '../../providers/caixa/caixa';
import { CaixaDoacao } from '../../models/caixaDoacao';
import { ToastController } from 'ionic-angular';


/**
 * Generated class for the FormCaixaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-form-caixa',
  templateUrl: 'form-caixa.html',
})
export class FormCaixaPage {

	caixa:CaixaDoacao = new CaixaDoacao("","");
  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public cxProvider: CaixaProvider, public toastCtrl: ToastController) {
  }

  solicitar(){
  	let message = "default";
  	if(this.caixa.nome.trim() == "" || 
  		this.caixa.endereco.trim() == ""){
  		message = "Insira todos os campos";
  	}else{
  		this.cxProvider.solicitar(this.caixa).subscribe()
  		message = "Caixa solicitada";
  	}
    let toast = this.toastCtrl.create({
          message: message,
          duration: 3000,
          position: "top"
    });
    toast.present()
    this.caixa.nome=""
    this.caixa.endereco=""
  }
  

}
