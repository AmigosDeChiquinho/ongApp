import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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
  templateUrl: 'pagamento.html',
  providers: [AuthProvider]
})
export class PagamentoPage {

  cc = {
    number:'123',
    cvc:'',
    expMonth:'',
    expYear:'',
    pubKey:`-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAia6+M9spC/cbpXUrkJLn
MArnBiISDqKwXEFq45FNuk2wdIc6eJZU0+U6mTOAGzIoXIh1MIQKqYpLFBrM4J7j
Vd+FlsnyNHK8tb68DxdP32XIIS8SziGbSws/tsdi/hstl5i/LsOcomz3shBtpUE9
W6s2gkcfqZTgusgdu7ZeZCol071NqKfMvLshgy+xievIW2lrkXdS61rl1ZwhZf7i
GW7o/HUoHg5OPVgS4B41ROrSuFgLll7j71Fd5N8xcPWndO0+UYYxyOZKzt8ehxsQ
KCemTuO2nCs+fDbDul2geeOczh6tpqc4/BqVBBovkdK6P32ChX0GMeL8COdPbcrp
jwIDAQAB
-----END PUBLIC KEY-----`
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public ap:AuthProvider, public auth: Auth, public user: User,
  public alertCtrl: AlertController) {
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
