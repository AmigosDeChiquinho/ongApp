import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { Auth, User } from '@ionic/cloud-angular';

/**
 * Generated class for the ContaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-conta',
  templateUrl: 'conta.html',
  providers: [AuthProvider]
})
export class ContaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public ap:AuthProvider, public auth:Auth, public user:User) {
  }

  logout(){
    this.auth.logout();
  }

  cadastrar(){
    this.navCtrl.push('CadastroPage');
  }

  entrar(){
    this.navCtrl.push('LoginPage');
  }
}
