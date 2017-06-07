import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnimalPage } from './animal';

@NgModule({
  declarations: [
    AnimalPage,
  ],
  imports: [
    IonicPageModule.forChild(AnimalPage),
  ],
  exports: [
    AnimalPage
  ]
})
export class AnimalPageModule {}
