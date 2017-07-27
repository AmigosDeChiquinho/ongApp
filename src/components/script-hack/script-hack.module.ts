import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScriptHackComponent } from './script-hack';

@NgModule({
  declarations: [
    ScriptHackComponent,
  ],
  imports: [
    IonicPageModule.forChild(ScriptHackComponent),
  ],
  exports: [
    ScriptHackComponent
  ]
})
export class ScriptHackComponentModule {}
