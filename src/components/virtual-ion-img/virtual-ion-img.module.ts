import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VirtualIonImgComponent } from './virtual-ion-img';

@NgModule({
  declarations: [
    VirtualIonImgComponent,
  ],
  imports: [
    IonicPageModule.forChild(VirtualIonImgComponent),
  ],
  exports: [
    VirtualIonImgComponent
  ]
})
export class VirtualIonImgComponentModule {}
