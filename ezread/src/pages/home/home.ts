import { Component,NgZone } from '@angular/core';
import { ModalController,NavController,Platform,MenuController } from 'ionic-angular';
import { NavParams,Nav,Events } from 'ionic-angular';
import { ListPage } from '../list/list';
import { PhonicimagesComponent } from '../../components/phonicimages/phonicimages';
import {dBconnectionService } from '../../providers/dBconnectionService/dBconnectionService';
import { PhonicimageServiceProvider } from '../../providers/phonicimage-service/phonicimage-service';
import { AlertController,LoadingController } from 'ionic-angular';
//import { ProgressBarComponent } from '../../components/progress-bar/progress-bar'
import { Http } from '@angular/http';
import { VideoPlayer,VideoOptions } from '@ionic-native/video-player';
import { StreamingMedia, StreamingVideoOptions,StreamingAudioOptions  } from '@ionic-native/streaming-media';
import { SideMenuRedirectEvent, SideMenuRedirectEventData } from '../../components/side-menu-content/side-menu-content';


@Component({
  selector: 'home-page',
  templateUrl: 'home.html',
  styleUrls: ['/src/pages/home/home.scss'],

})
export class HomePage {
  //listpage = ListPage;
  public familyNames = [];
  public familyList;
  public counter;
  private k = 0;
  private l = 0;
  private m = 0;
//private stats=[];
  posts:any;
  videoOpts:VideoOptions;
  StreamingVideoOptions:StreamingVideoOptions;

  constructor(public navCtrl:NavController, private navParams:NavParams, public platform:Platform,
              private dBService:dBconnectionService, private zone:NgZone,
              private modalCtrl:ModalController,
              private alertCtrl:AlertController,
              private phonicService:PhonicimageServiceProvider,
              public loadingCtrl:LoadingController,
              public http:Http, private videoPlayer:VideoPlayer,
              private streamingMedia:StreamingMedia, private menu:MenuController,
              private eventCtrl:Events) {


    let loader = this.loadingCtrl.create({
      content: 'Getting latest entries...',
    });

    this.dBService.getAll()
      .then(data => {
        this.zone.run(() => {
          console.log(data.sort(function (a, b) {
            return a - b
          }));
          if (data.length == 0) {
            let videoOpts:VideoOptions = {
              volume: 0.5,
              // scalingMode: videoPlayer.SCALE_TO_FIT_WITH_CROPPING,
            }
            this.videoPlayer.play('file:///android_asset/www/assets/video/testvideo.mp4', videoOpts).then(() => {
              console.log('video completed');
            }).catch(err => {
              console.log(err);
            });

            setTimeout(() => {
              loader.present();
            }, 5000)
            var list = ["-at", "-an", "-am", "-ap", "-ag", "-ab", "-ad", "-and", "-ash", "-ack", "-ank", "-a", "-e", "-en", "-ent", "-ell", "-est", "-et", "-eg", "-end", "-ea", "-in", "-ip", "-it", "-ig", "-id", "-im", "-ill", "-ick", "-ink", "-ing", "-ish", "-age", "-y", "-ey", "-i", "-u ui", "-og", "-ot", "-op", "-ob", "-od", "-ong", "-ock", "-qua-", "-o", "-un", "-ut", "-ug", "-um", "-ud", "-up", "-unk", "-ump", "-ust", "-u", "-oo", "-ou", "-ake", "-ame", "-ate", "-ane", "-au", "-ace", "-a-e", "-a-y", "-ay", "-ai", "-ee", "-ie", "-ei", "-ice", "-ide", "-ike", "-ime", "-ine", "-ive", "-ind", "-igh-", "-i-e", "-ale", "-ui", "-o-e", "-ow", "-oa", "-ild", "-oe", "-old", "-ui ie eau", "-ue", "-ew", "-ou oe"];
            list.sort();
            for (var i = 0; i < list.length; i++) {
              this.dBService.add({
                _id: "family" + (i + 1),
                family: list[i]
              }).then(data=> {
                console.log(data);
                // loader.dismiss();


              })
            }
            this.http.get('appData.json').map(res => res.json()).subscribe(data => {
              this.familyList = data;
              console.log(this.familyList);
              for (var i = 0; i < this.familyList.length; i++) {
                this.familyList[i].wordDescription = "Catch The Description of";
                this.dBService.addImages({
                  _id: this.familyList[i].name,
                  family: this.familyList[i].family
                }).then(data=> {
                  console.log(this.l);
                  this.l++;
                  if (this.l == ((this.familyList.length) - 1)
                    && this.m == ((this.familyList.length) - 1)) {
                    loader.dismiss();
                    setTimeout(() => {
                      window.location.reload();
                    }, 1000);
                  }

                });
                this.dBService.addData({
                  _id: this.familyList[i].name,
                  imageData: this.familyList[i].imageData,
                  family: this.familyList[i].family,
                  description: this.familyList[i].wordDescription,
                }).then(data=> {
                  this.m++;
                  if (this.l == ((this.familyList.length) - 1) && this.m == ((this.familyList.length) - 1)) {
                    loader.dismiss();
                    setTimeout(() => {
                      window.location.reload();
                    }, 1000);

                  }

                });

              }

            });


          }
        });
      });
    /*    this.dBService.getTotalData().map(res=>res.json()).subscribe(data=> {

     this.familyList = data.familyList;

     console.log(this.familyList);

     });*/

    // this.dBService().subscribe((data) => {
    /* this.dBService.externalFile().subscribe((data) => {
     console.log("what is in the data ", data);
     });*/


    /*let mydata = JSON.parse(data);
     console.log(mydata);*/


    /*let loading = this.loadingCtrl.create({
     content: 'Please wait...',
     showBackdrop: false
     });*/

    /*  this.dBService.getAll()
     .then(data => {
     this.zone.run(() => {
     console.log(data);
     if(data.length==0){
     alert.present();
     }
     });
     });*/


    /*   let alert = this.alertCtrl.create({
     title: 'Please select your option, Cheers !!.',
     subTitle: 'we support both onile and offline',
     enableBackdropDismiss: false,
     buttons: [{
     text: 'Offline',
     handler: () => {
     console.log("command heart here ")
     // loading.present();
     this.dBService.getTotalData().map(res=>res.json()).subscribe(data=> {

     this.familyList = data.familyList;
     console.log(this.familyList);

     console.log(this.familyList.length);
     console.log(this.familyList.length-1);

     for (var i = 0; i < this.familyList.length; i++) {
     this.dBService.add({_id: "family" + (i + 1),
     family: this.familyList[i].family}).then(data=> {
     //console.log(data)
     console.log(this.k);
     this.k++;
     if(this.k == ((this.familyList.length)-1) && this.l == ((this.familyList.length)-1) && this.m == ((this.familyList.length)-1)) {
     loading.dismiss();
     setTimeout(() => {
     window.location.reload();
     },3000);
     }


     });

     this.dBService.addImages({
     _id: this.familyList[i].name,
     family: this.familyList[i].family
     }).then(data=> {
     console.log(this.l);
     this.l++;
     if(this.k == ((this.familyList.length)-1) && this.l == ((this.familyList.length)-1) && this.m == ((this.familyList.length)-1)) {


     loading.dismiss();
     setTimeout(() => {
     window.location.reload();
     },3000);
     }



     });
     this.dBService.addData({
     _id: this.familyList[i].name,
     imageData: this.familyList[i].imageData,
     family: this.familyList[i].family
     }).then(data=> {
     this.m++;
     if(this.k == ((this.familyList.length)-1) && this.l == ((this.familyList.length)-1) && this.m == ((this.familyList.length)-1)) {
     loading.dismiss();
     setTimeout(() => {
     window.location.reload();
     },3000);

     }

     });
     console.log(this.m);

     }

     });
     //loading.dismiss()
     },

     }, {
     text: 'Online',
     handler: () => {

     }
     }],
     });*/

  };

  /* public goToOption(): void {
   // Since we're redirecting to a page without clicking the option from the
   // side menu, we need to use events to tell the side menu component
   // which option should be marked as selected.
   let redirectData: SideMenuRedirectEventData = {
   displayName: 'Option 1'
   };
   this.eventCtrl.publish(SideMenuRedirectEvent, redirectData);

   // Now we can set that page as root
   this.navCtrl.setRoot(ListPage, { title: 'Option 1' });
   }
   public goToSubOption(): void {
   // Since we're redirecting to a page without clicking the option from the
   // side menu, we need to use events to tell the side menu component
   // which option should be marked as selected.
   let redirectData: SideMenuRedirectEventData = {
   displayName: 'Sub Option 2'
   };
   this.eventCtrl.publish(SideMenuRedirectEvent, redirectData);

   // Now we can set that page as root
   this.navCtrl.setRoot(ListPage, { title: 'Sub Option 2' });
   }*/
  ionViewDidLoad() {
    this.menu.enable(false);
  }

  ionViewDidLeave() {
    this.menu.enable(true);
  }

  startVideo() {
    /*let options: StreamingVideoOptions = {
     successCallback: () => { console.log('Finished Video') },
     errorCallback: (e) => { console.log('Error: ', e) },
     orientation: 'portrait'
     };

     // http://www.sample-videos.com/
     this.streamingMedia.playVideo("file:///android_asset/www/assets/video/testvideo.mp4", options);*/

    let videoOpts:VideoOptions = {
      volume: 0.5,
      // scalingMode: videoPlayer.SCALE_TO_FIT_WITH_CROPPING,
    }
    this.videoPlayer.play('file:///android_asset/www/assets/video/testvideo.mp4', videoOpts).then(() => {
      console.log('video completed');
    }).catch(err => {
      console.log(err);
    });


  }

  phonicFamilyList() {
    // console.log(this.familyList);

    this.navCtrl.push(ListPage, {
      /* familyList: this.familyNames,*/

    });


  }

  /* public stopPlayingVideo(){
   this.videoPlayer.close();
   }*/
  /* startAudio() {
   let options: StreamingAudioOptions = {
   successCallback: () => { console.log('Finished Audio') },
   errorCallback: (e) => { console.log('Error: ', e) },
   initFullscreen: false // iOS only!
   };

   //http://soundbible.com/2196-Baby-Music-Box.html
   this.streamingMedia.playAudio('http://soundbible.com/grab.php?id=2196&type=mp3', options);
   }

   stopAudio() {
   this.streamingMedia.stopAudio();
   }*/


  /*  this.dBService.getAll()
   .then(data => {
   this.zone.run(() => {
   if(data.length == 0){


   }
   });
   apresen);ert.present();

   }

   ionViewDidLoad() {
   /*   this.platform.ready().then(() => {
   this.dBService.initDB();

   this.dBService.getAll()
   .then(data => {
   this.zone.run(() => {
   this.familyNames = data;
   if (this.familyNames.length > 0) {
   for (var i = 0; i < this.familyNames.length; i++) {
   this.familyList.push(this.familyNames[i]);

   }
   }
   else if (this.familyNames.length == 0) {
   this.dBService.getReviews().map(res => res.json())
   .subscribe(data => {

   this.familyList = data.familyList;
   console.log(this.familyList);

   for (var i = 0; i < this.familyList.length; i++) {


   this.dBService.add({_id: "family" + (i + 1), family: this.familyList[i]});

   //this.dBService.add({family:this.familyNames[i]});

   }


   });
   }
   });
   })
   .catch(console.error.bind(cons
   this   });*/


  /*  presentAlert() {
   let alert = this.alertCtrl.create({
   title: 'Low battery',
   subTitle: '10% of battery remaining',
   buttons: ['Dismiss']
   });
   alert.present();
   }*/


}
