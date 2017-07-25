import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Animal } from '../../models/animal';

@Component({
  selector: 'page-animais',
  templateUrl: 'animais.html',
})
export class AnimaisPage {

  private animais:Animal[] = [
  	new Animal("Cachorro #1", "male", "Preta", 
  		"Médio", "Curto", "Dócio e brincalhão", 
  		"https://s-media-cache-ak0.pinimg.com/736x/63/0f/0e/630f0ef3f6f3126ca11f19f4a9b85243.jpg"),
  	new Animal("Cachorro #2", "female", "Marrom", 
  		"Pequeno", "Longo", "loca loca loca", 
  		"https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/How%20to%20calm%20a%20hyper%20dog.jpg?itok=Vg7ueySi")
  ];
  constructor(public navCtrl: NavController) {}

adotar(){
this.navCtrl.push("AnimalPage")
}

doInfinite(infiniteScroll) {
    setTimeout(() => {
      for (let i = 0; i < 5; i++) {
        this.animais.push( new Animal("Cachorro #" + (this.animais.length-1), "male", "Preta", 
      "Médio", "Curto", "Dócio e brincalhão", 
      "https://s-media-cache-ak0.pinimg.com/736x/63/0f/0e/630f0ef3f6f3126ca11f19f4a9b85243.jpg"), );
      }
      infiniteScroll.complete();
    }, 500);
}

}
