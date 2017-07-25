import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { AnimaisPage } from '../pages/animais/animais';
import { DoacaoPage } from '../pages/doacao/doacao';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CaixaProvider } from '../providers/caixa/caixa';
import { VirtualIonImgComponent } from '../components/virtual-ion-img/virtual-ion-img';

@NgModule({
  declarations: [
    MyApp,
    DoacaoPage,
    AnimaisPage,
    HomePage,
    TabsPage,
    VirtualIonImgComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DoacaoPage,
    AnimaisPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CaixaProvider
  ]
})
export class AppModule {}
