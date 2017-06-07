import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-animal',
  templateUrl: 'animal.html',
})
export class AnimalPage {

@ViewChild(Slides) slides: Slides;

 slide = [
    {
      image: "http://www.dogster.com/wp-content/uploads/2017/02/visine-for-dogs.jpg",
    },
    {
      image: "https://statcdn.fandango.com/MPX/image/NBCU_Fandango/457/1019/ADogsPurpose_Clip_ChaseABall.jpg",
    },
    {
      image: "http://nqki340a6g43eofbpz6nu7kk-wpengine.netdna-ssl.com/wp-content/uploads/2016/07/Gemma-Stafford-Homemade-Ice-Cream-for-Dogs-Select-v.3-1024x576.jpg",
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  


  adotar(){
	this.navCtrl.push("AdocaoPage")
	}
}
