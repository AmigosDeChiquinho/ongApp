import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, AlertController } from 'ionic-angular';
import { Auth, User, DetailedError } from '@ionic/cloud-angular';
import { Animal } from '../../models/animal';
import { AnimalProvider } from '../../providers/animal/animal';

@IonicPage()
@Component({
  selector: 'page-animal',
  templateUrl: 'animal.html',
})
export class AnimalPage {

@ViewChild(Slides) slides: Slides;

  private animal: Animal = new Animal("",0,"","","","","","","","");

 slide = [
    {
      image: "http://portaldodog.com.br/cachorros/wp-content/uploads/2014/02/garoto-alimenta-cachorros-rua-5.jpg",
    },
    {
      image: "https://statcdn.fandango.com/MPX/image/NBCU_Fandango/457/1019/ADogsPurpose_Clip_ChaseABall.jpg",
    },
    {
      image: "http://nqki340a6g43eofbpz6nu7kk-wpengine.netdna-ssl.com/wp-content/uploads/2016/07/Gemma-Stafford-Homemade-Ice-Cream-for-Dogs-Select-v.3-1024x576.jpg",
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams
  ,public auth: Auth, public ap: AnimalProvider, public alertCtrl: AlertController) {
    this.ap.findOne(this.navParams.get("id")).subscribe(
      (res)=>{
        this.animal = res.json()[0];
      },
      (error)=>{
        this.showAlert(error, "erro");
      });
  }

  showAlert(msg, title) {
   let alert = this.alertCtrl.create({
     title: title,
     subTitle: msg,
     buttons: ['OK']
   });
   alert.present();
  }

  adotar(){
	   this.navCtrl.push("AdocaoPage")
	}
}
