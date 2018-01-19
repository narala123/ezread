import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TextToSpeech } from '@ionic-native/text-to-speech';

import { PhonicimagesComponent } from '../components/phonicimages/phonicimages';
import { BookmarksComponent } from '../components/bookmarks/bookmarks';
import { dBconnectionService } from '../providers/dBconnectionService/dBconnectionService';
import { PhonicimageServiceProvider } from '../providers/phonicimage-service/phonicimage-service';
import { HttpModule } from '@angular/http';
import { WordslistComponent } from '../components/wordslist/wordslist';
import { AlertboxComponent } from '../components/alertbox/alertbox';
import { FlashCardComponent } from '../components/flash-card/flash-card';
import { VideoPlayer } from '@ionic-native/video-player';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
import { SideMenuContentComponent } from '../components/side-menu-content/side-menu-content';

//import { SharedProvider } from '../providers/shared/shared';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    //ProgressBarComponent,
    ListPage,
    PhonicimagesComponent,
    BookmarksComponent,
    WordslistComponent,
    AlertboxComponent,
    FlashCardComponent,
    SideMenuContentComponent,


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
   // ProgressBarComponent,
    ListPage,
    PhonicimagesComponent,
    BookmarksComponent,
    WordslistComponent,
    FlashCardComponent,
    SideMenuContentComponent

  ],
  providers: [
    StatusBar,
    SplashScreen,
    TextToSpeech,
    VideoPlayer,
    StreamingMedia,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    dBconnectionService,
    PhonicimageServiceProvider,

    //SharedProvider,

  ],

})
export class AppModule {}
