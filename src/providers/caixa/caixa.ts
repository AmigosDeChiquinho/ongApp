import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { CaixaDoacao } from '../../models/caixaDoacao';

/*
  Generated class for the CaixaProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CaixaProvider {

	server = "https://projeto-integrador-815dc.firebaseio.com/";
  constructor(public http: Http) {}

  retrieveAll(){
  	return this.http.get(this.server+"/caixas.json").map(
        (res) => {
          let objectResponse = res.json()
          let caixas: CaixaDoacao[] = []
          for (let key of Object.keys(objectResponse)) {
            caixas.push(new CaixaDoacao(objectResponse[key].nome, objectResponse[key].endereco))
          }
          return caixas;
        }
      )
  }

  solicitar(cx: CaixaDoacao){
  	return this.http.post(this.server+"/caixas.json",cx)
  }

}
