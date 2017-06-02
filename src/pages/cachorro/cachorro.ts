import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-cachorro',
  templateUrl: 'cachorro.html',
})
export class CachorroPage {
 slides = [
    {
      image: "assets/img/1.jpg",
    },
    {
      image: "assets/img/2.jpg",
    },
    {
      image: "assets/img/3.jpg",
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CachorroPage');
  }
  
  adotar(){
	this.navCtrl.push("AdocaoPage")
	}
}
