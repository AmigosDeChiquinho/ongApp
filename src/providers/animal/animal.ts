import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AnimalProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AnimalProvider {

  server = "https://amigosdechiquinho.herokuapp.com/v1/animais";
  constructor(public http: Http) {}

  retrieveAll(){
    return this.http.get(this.server+"?arquivado=0&Profile_idProfile=null");
  }

  findOne(id){
    return this.http.get(this.server+"?idanimal="+id);
  }



}
