import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { GalleryPage } from '../pages/gallery/gallery';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { TouPage } from '../pages/tou/tou';
import { ShouaPage } from '../pages/shoua/shoua';
import { FuePage } from '../pages/fue/fue';
import { XuePage } from '../pages/xue/xue';
import { SeePage } from '../pages/see/see';
import { PaPage } from '../pages/pa/pa';
import { VongPage } from '../pages/vong/vong';
import { SongPage } from '../pages/song/song';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FamilyServiceProvider } from '../providers/family-service/family-service';
import { InputDialogServiceProvider } from '../providers/input-dialog-service/input-dialog-service';
import { SocialSharing } from '@ionic-native/social-sharing';
import { HttpClientModule } from '@angular/common/http'; 

import { Calendar } from '@ionic-native/calendar';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    GalleryPage,
    HomePage,
    TabsPage,
    TouPage,
    ShouaPage,
    FuePage,
    XuePage,
    SeePage,
    PaPage,
    VongPage,
    SongPage

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    GalleryPage,
    HomePage,
    TabsPage,
    TouPage,
    ShouaPage,
    FuePage,
    XuePage,
    SeePage,
    PaPage,
    VongPage,
    SongPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FamilyServiceProvider,
    InputDialogServiceProvider,
    SocialSharing,
    Calendar
  ]
})
export class AppModule {}
