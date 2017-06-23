import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CaixaProvider } from '../../providers/caixa/caixa';
import { CaixaDoacao } from '../../models/caixaDoacao';
import { ToastController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';


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

  private dados: FormGroup;

	caixa:CaixaDoacao = new CaixaDoacao("","");
  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public cxProvider: CaixaProvider, public toastCtrl: ToastController,
    public formBuilder: FormBuilder) {
      this.dados = this.formBuilder.group({
    		empresa: ['',[Validators.required,Validators.maxLength(200)]],
        responsavel: ['',[Validators.required,Validators.maxLength(200)]],
    		contato: ['', [Validators.required, Validators.maxLength(11), Validators.minLength(8), Validators.pattern("[0-9]\\d+")]],
    	})
  }

  solicitar(){
  	let message = "default";
  	if(!this.dados.valid){
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
    this.dados['empresa'].value = ''
    this.dados['responsavel'].value = ''
    this.dados['contato'].value = ''
  }


}
