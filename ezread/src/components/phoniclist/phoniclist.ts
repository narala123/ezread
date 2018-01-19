import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Nav, Platform } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { ListPage } from '../../pages/list/list';
import { BookmarksComponent } from '../bookmarks/bookmarks';

import { dBconnectionService } from '../../providers/dBconnectionService/dBconnectionService';
import {DomSanitizer} from '@angular/platform-browser';
//import { SharedProvider } from '../../providers/shared/shared';
import { PhonicimageServiceProvider } from '../../providers/phonicimage-service/phonicimage-service';
import { AlertController } from 'ionic-angular';
import { FlashCardComponent } from '../flash-card/flash-card';

/**
 * Generated class for the PhoniclistComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'phoniclist',
  templateUrl: 'phoniclist.html',
  styleUrls: ['/src/components/phoniclist/phoniclist.scss'],
  providers: [dBconnectionService]
})
export class PhoniclistComponent {
  @ViewChild(Slides) slides:Slides;
  public phonicImages;
  public bookmarks = {};
  public colors:Array<{}>;
  public image;
  public imageName;
  public word;
  public check:boolean;
public listenValue;

  //public sharedData: SharedModel;

  constructor(public navCtrl:NavController, public platform:Platform,
              public navParams:NavParams, private dBService:dBconnectionService,
              public _DomSanitizer:DomSanitizer, private tts:TextToSpeech,
              private bookmarkImageService:PhonicimageServiceProvider,
              private alertCtrl:AlertController) {
//console.log(this.alertCtrl);
    this.phonicImages = navParams.get('phonicImages');
    console.log(this.phonicImages);
    this.imageName = navParams.get('imageName');
    console.log(this.imageName);
    // this.phonicImages[0].imageData = _DomSanitizer.bypassSecurityTrustUrl(this.phonicImages[0].imageData);
    /* for(var i=1;i<this.phonicImages.length;i++){
     //for(var i=1;i<2;i++){
     this.phonicImages[i].imageData = (this.phonicImages[i].imageData);
     console.log(this.phonicImages[i].imageData);
     }*/
    //console.log(this.listenValue.listen);


    console.log(this.check);
    console.log(this.phonicImages);

    for (var i = 0; i < this.phonicImages.length; i++) {
      if (this.phonicImages[i]._id == this.imageName) {
        console.log(this.phonicImages[i]);
        var index = this.phonicImages.indexOf(this.phonicImages[i]);

        console.log(index);
        setTimeout(() => {
          this.slides.slideTo(index, 100);
          if (this.phonicImages[i]._id) {
            this.listen(this.phonicImages[i]._id);
          }
        }, 900);

        break;
      }
    }

  }
  public listenWord = false;
 /* listenVOice(value){
    this.listenWord = value;
  }*/




  sildeChanged(event) {
    console.log(event);
    let percent;
    let currentIndex = this.slides.getActiveIndex();
    for (var i = 0; i < this.phonicImages.length; i++) {
      if (i == currentIndex) {
        this.word = this.phonicImages[i]._id;
        if(this.listenWord == true) {
          this.listen(this.phonicImages[i]._id);
        }
        break;
      }

    }

    console.log('Current index is', currentIndex);
    if (currentIndex <= this.phonicImages.length - 1) {
      percent = ((currentIndex + 1) * 100) / this.phonicImages.length;
      console.log(percent);
    }

  }

    bookmarksPage(name,bmarkImg) {
      let alert = this.alertCtrl.create({
        enableBackdropDismiss: false,
        title: 'You have Already added to your Favourite list!!!',
        buttons: ['Dismiss']
      });
console.log(name);
     // console.log(bmarkImg);
   for (let i = 0; i < this.phonicImages.length; i++) {
   if(this.phonicImages[i]['_id']== name && this.phonicImages[i]['imageData']== bmarkImg){
   this.bookmarks = this.phonicImages[i];
   }
   }

   /* this.dBService.getReviews().then((data) => {
   console.log(data);
   this.bookmarks = data;
   });
   */
console.log(this.bookmarks);
   this.bookmarkImageService.setFavoriteList(this.bookmarks).then(function(){
     alert.present("success");
   }).catch(function(err){
     if(err.name === 'conflict')
     {
       alert.present();
     }else{
       console.log("not sucess")
     }
   });
  /* .catch(console.error.bind(console));*/
   }

  back() {
    this.navCtrl.push(ListPage);
  }


  listen(word) {
    console.log(word);

    //responsiveVoice.speak(word, "Polish Female");
       this.tts.speak(word)
     .then(() => console.log('Success'))
     .catch((reason:any) => console.log(reason));
  }

}
