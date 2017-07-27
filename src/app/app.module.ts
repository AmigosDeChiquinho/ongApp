import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';


import { AnimaisPage } from '../pages/animais/animais';
import { DoacaoPage } from '../pages/doacao/doacao';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ContaPage } from '../pages/conta/conta';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CaixaProvider } from '../providers/caixa/caixa';
import { VirtualIonImgComponent } from '../components/virtual-ion-img/virtual-ion-img';
import { AuthProvider } from '../providers/auth/auth';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { AnimalProvider } from '../providers/animal/animal';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'd6f80478'
  }
};

@NgModule({
  declarations: [
    MyApp,
    DoacaoPage,
    AnimaisPage,
    HomePage,
    TabsPage,
    ContaPage,
    VirtualIonImgComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DoacaoPage,
    AnimaisPage,
    HomePage,
    TabsPage,
    ContaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CaixaProvider,
    AuthProvider,
    AnimalProvider
  ]
})
export class AppModule {}
