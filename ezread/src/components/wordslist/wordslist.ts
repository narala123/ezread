import { Component,NgZone } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Nav, Platform } from 'ionic-angular';
import { dBconnectionService } from '../../providers/dBconnectionService/dBconnectionService';
//import { PhonicimageServiceProvider } from '../../providers/phonicimage-service/phonicimage-service';
import { PhonicimagesComponent } from '../phonicimages/phonicimages';
/**
 * Generated class for the WordslistComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'wordslist',
  templateUrl: 'wordslist.html',
  styleUrls: ['/src/components/wordlist/wordlist.scss'],
  providers: [dBconnectionService]
})
export class WordslistComponent {

  public words;
  public Images;
  public imageData;

  constructor(public navCtrl:NavController, public platform:Platform, public navParams:NavParams,
              private dBService:dBconnectionService, private zone:NgZone) {

    this.words = navParams.get('wordList');
    console.log(this.words);
  }

  /*ionViewDidLoad() {

    this.platform.ready().then(() => {
      this.dBService.initDB();
    });
  }*/

  phonicImage(phonicfamily,name) {
   /* this.dBService.images(phonicfamily);*/
    console.log(phonicfamily);
    console.log(name);
    this.dBService.getPouchImages(phonicfamily).then(data=>{
      this.zone.run(() => {
        console.log(data.docs);


      this.imageData = data.docs.map(function(obj) {
        //console.log(this.imageData);
              var wordFamilyStr = obj.family.substr(1,obj.family.length);
       // console.log(wordFamilyStr);
              var spanStyle="<span style='color:#df5000'>"+wordFamilyStr+"</span>";
        //console.log(spanStyle);
              var re = new RegExp(wordFamilyStr,'g');
       // console.log(re);
              obj.wordTitle = obj._id.replace(re,spanStyle);
        //console.log( obj.wordTitle);
              return obj;


        });
      console.log(this.imageData);
      /*  if(this.imageData.length==0){
          this.dBService.getPhonicImages(phonicfamily).map(res=>res.json()).subscribe(data=> {
            console.log(data.phonicImages);
            this.Images = data.phonicImages;
            //////////////////////////////////////////////
            if(this.Images.length>0){
              for(var i=0;i<this.Images.length;i++){
                this.dBService.addData({_id:this.Images[i].name,
                  imageData:this.Images[i].imageData,
                  family:this.Images[i].family}).then(data=>{
                  console.log(data);
                })
              }
             this.phonicImage(phonicfamily,name);
            }



          })
        }*/

      });
      this.navCtrl.push(PhonicimagesComponent, {
        phonicImages: this.imageData,
        imageName:name,
      })
    })




  }


}
