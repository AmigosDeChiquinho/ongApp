import { Component } from '@angular/core';
import { NavController, LoadingController, Loading } from 'ionic-angular';
import { Animal } from '../../models/animal';
import { AnimalProvider } from '../../providers/animal/animal';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'page-animais',
  templateUrl: 'animais.html',
  providers: [AnimalProvider]
})
export class AnimaisPage {

  private especie = "cachorros";
  private gatos: any[] = [];
  private cachorros: any[] = [];
  private animais:Animal[];
  private loader: Loading;
  // private animais:Animal[] = [
  // 	new Animal("Cachorro #1", "male", "Preta",
  // 		"Médio", "Curto", "Dócio e brincalhão",
  // 		"https://s-media-cache-ak0.pinimg.com/736x/63/0f/0e/630f0ef3f6f3126ca11f19f4a9b85243.jpg"),
  // 	new Animal("Cachorro #2", "female", "Marrom",
  // 		"Pequeno", "Longo", "loca loca loca",
  // 		"https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/How%20to%20calm%20a%20hyper%20dog.jpg?itok=Vg7ueySi")
  // ];
  constructor(public navCtrl: NavController, public ap: AnimalProvider,
    public loading: LoadingController) {
    this.list();
    this.loader = this.loading.create({
      content: "Aguarde...",
    });
    this.loader.present();
  }

list(){
  this.ap.retrieveAll().subscribe((res)=>{
    this.animais = res.json();
    for(let k of Object.keys(this.animais)){
      if(this.animais[k].especie=="Cachorro"){
        this.cachorros.push(k);
      }else{
        this.gatos.push(k);
      }
    }
    this.loader.dismissAll();
  },(error)=>{
    alert(error);
  });
}

adotar(params){
  this.navCtrl.push("AnimalPage", {id:params});
}

}
