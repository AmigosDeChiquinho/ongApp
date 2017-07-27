import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {AuthProvider} from '../../providers/auth/auth';
import { Auth, User } from '@ionic/cloud-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [AuthProvider]
})
export class LoginPage {

  private dados: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public ap:AuthProvider, public auth: Auth, public user: User,
    public formBuilder: FormBuilder, public alertCtrl: AlertController) {
      this.dados = this.formBuilder.group({
    		email: ['',[Validators.email,Validators.required,Validators.maxLength(200)]],
        password: ['',[Validators.required,Validators.maxLength(16)]],
    	})
  }

  entrar(){
  	if(this.dados.valid){
      this.auth.login('basic', this.dados.value).then(()=>{
          this.navCtrl.pop();
      }).catch((error)=>{
        this.showAlert('Usuário ou senha incorretos', 'erro');
      });
  	}

  }

  cadastrar(){
    this.navCtrl.push('CadastroPage');
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
