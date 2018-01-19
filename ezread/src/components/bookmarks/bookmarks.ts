import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Nav, Platform } from 'ionic-angular';
import { dBconnectionService } from '../../providers/dBconnectionService/dBconnectionService';
import { PhonicimageServiceProvider } from '../../providers/phonicimage-service/phonicimage-service';
import { TextToSpeech } from '@ionic-native/text-to-speech';
/**
 * Generated class for the BookmarksComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'bookmarks',
  templateUrl: 'bookmarks.html',
})
export class BookmarksComponent {

public bookMarkImages : any;
  public abc;
  public introContent=[];
  public displayContent=[];
  public fullLetter;
  public letters;


  constructor(public navCtrl: NavController,
              public platform: Platform,
              public navParams: NavParams,
              private phonicImageService : PhonicimageServiceProvider,
              private tts:TextToSpeech) {

    this.phonicImageService.getCategories().subscribe((data)=>{
      console.log(data);
    })

    this.abc = this.navParams.get('title');
    console.log(this.abc);

    this.fullLetter = "bat";
    console.log(this.fullLetter.split(''));
    this.letters = this.fullLetter.split('');


    this.introContent = [{name:"Intro-1",Description:"content for intro-1"},{name:"Intro-2",Description:"content for intro-2"}];

    for(var i=0;i<this.introContent.length;i++){

      if(this.abc === this.introContent[i].name){
        this.displayContent = this.introContent[i].Description;
        console.log(this.displayContent)
      }
    }

    //console.log(this.dBService.getFavoriteList());
    this.phonicImageService.getFavoriteList().then(data=> {
      console.log(data);
      this.bookMarkImages = data;

      console.log(this.bookMarkImages);
    });
    //console.log(this.bookMarkImages);
  }


  listen(word) {
    console.log(word);

    //responsiveVoice.speak(word, "Polish Female");
    this.tts.speak(word)
      .then(() => console.log('Success'))
      .catch((reason:any) => console.log(reason));
  }

unFav(id){
  console.log(id);

  this.phonicImageService.unFavourite(id).then(function(result){
    console.log(result);
   /* let index = this.bookMarkImages.indexOf(id._id);
    console.log(index);
    if(index > -1) {
      this.bookMarkImages.splice(index, 1);
    }
   // let index = this.bookMarkImages.length;
    /!*if(result.ok == true) {
      for (var i = 0; i < this.bookMarkImages.length; i++) {
        if (this.bookMarkImages[i]._id == id._id) {true){
          this.bookMarkImges.splice(this.bookMarkIiag es[
        }i],1)  ;
    }*!/*/

  }).catch(function(err){
    if(err.name === 'not found')
    {
     console.log("deleted")
    }
  });
}


  letter(speakletter){
console.log(speakletter);

  };

}
