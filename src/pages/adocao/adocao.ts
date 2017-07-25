import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the AdocaoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-adocao',
  templateUrl: 'adocao.html',
})
export class AdocaoPage {

	private dados: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	private formBuilder: FormBuilder) {
  	this.dados = this.formBuilder.group({
  		nome: ['',[Validators.required,Validators.maxLength(200)]],
  		celular: ['', [Validators.required, Validators.maxLength(11), Validators.minLength(11), Validators.pattern("[0-9]\\d+")]],
  		telefone: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern("[0-9]\\d+")]],
  		logradouro: ['', [Validators.required, Validators.maxLength(100)]],
  		numero: ['', [Validators.required, Validators.maxLength(10)]],
  		bairro: ['', [Validators.required, Validators.maxLength(60)]],
  		complemento: ['',Validators.maxLength(45)],
  		cidade: ['', [Validators.required, Validators.maxLength(100)]],
  		estado: ['', [Validators.required, Validators.maxLength(100)]],
  		cep: ['', [Validators.required, Validators.maxLength(9)]]
  	})
  }

  adotar(){
  	console.log(this.dados.value);
  }


}
