import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Cachorro } from '../../models/cachorro';

@Component({
  selector: 'page-cachorros',
  templateUrl: 'cachorros.html',
})
export class CachorrosPage {

  private cachorros:Cachorro[] = [
  	new Cachorro("Cachorro #1", "male", "Preta", 
  		"Médio", "Curto", "Dócio e brincalhão", 
  		"https://s-media-cache-ak0.pinimg.com/736x/63/0f/0e/630f0ef3f6f3126ca11f19f4a9b85243.jpg"),
  	new Cachorro("Cachorro #2", "female", "Marrom", 
  		"Pequeno", "Longo", "loca loca loca", 
  		"https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/How%20to%20calm%20a%20hyper%20dog.jpg?itok=Vg7ueySi"),
  ];
  constructor(public navCtrl: NavController) {}

}
