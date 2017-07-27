import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Auth, User, DetailedError } from '@ionic/cloud-angular';

/**
 * Generated class for the CadastroPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  private dados: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	private formBuilder: FormBuilder, public auth: Auth, public user: User,
    public alertCtrl: AlertController) {
  	this.dados = this.formBuilder.group({
  		name: ['',[Validators.required,Validators.maxLength(200)]],
  		email: ['', [Validators.email, Validators.required, Validators.maxLength(200)]],
  		password: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(6)]],
  	})
  }

  cadastrar(){
    if(this.dados.valid){
      this.auth.signup(this.dados.value).then(()=>{
        this.user.details.name = this.dados.value.name;
        this.showAlert('Usuário cadastro com sucesso', 'supimpa!');
        this.navCtrl.pop();
        this.navCtrl.push('LoginPage');
      }).catch((error)=>{
        this.showAlert(error, 'erro');
      });
    }
  }

  showAlert(msg, title) {
   let alert = this.alertCtrl.create({
     title: title,
     subTitle: msg,
     buttons: ['OK']
   });
   alert.present();
 }

}
