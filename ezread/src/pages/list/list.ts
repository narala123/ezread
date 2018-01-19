import { Component,NgZone } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Nav, Platform } from 'ionic-angular';
import { HomePage } from '../home/home';
import { PhonicimagesComponent } from '../../components/phonicimages/phonicimages';
import { dBconnectionService } from '../../providers/dBconnectionService/dBconnectionService';
import { Pipe, PipeTransform } from '@angular/core';
import { WordslistComponent } from '../../components/wordslist/wordslist';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  styleUrls: ['/src/pages/list/list.scss'],
})
export class ListPage {
  // rootpage: any = HomePage;
  // public familyNames : Array<{}>;
  public familyList;
  public wordsList;
  public familyImages;
  public familyListImages;
  public familyNames = [];
//  public familyList = [];
  // public wordsList;

  constructor(public navCtrl:NavController,
              public platform:Platform,
              public navParams:NavParams,
              private dBService:dBconnectionService,
              private zone:NgZone) {


    /*this.familyNames = navParams.get('familyList');
     console.log(this.familyNames);*/

  }


  ionViewDidLoad() {

    this.platform.ready().then(() => {
      // this.dBService.initDB();

      this.dBService.getAll()
        .then(data => {
          this.zone.run(() => {
            console.log(data);
            this.familyNames = data;
            console.log("data call from list");
            /*  if (this.familyNames.length == 0) {
             this.dBService.getReviews().map(res => res.json())
             .subscribe(data => {

             this.familyList = data.familyList;
             console.log(this.familyList);

             for (var i = 0; i < this.familyList.length; i++) {


             this.dBService.add({_id: this.familyList[i].family});

             //this.dBService.add({family:this.familyNames[i]});

             }
             });

             }*/
          });
        })
        .catch(console.error.bind(console));
    });

  }

  save(list) {
    console.log(list);
    this.dBService.getRequiredImages(list).then(data=> {
      this.zone.run(() => {
        console.log(data.docs);
        // this.wordsList = data.docs;
        this.wordsList = data.docs;
        //console.log(this.imagesList);

        /*  if(this.wordsList.length==0){
         console.log(list)
         this.dBService.getImages(list).map(res=>res.json()).subscribe(data=>{
         console.log(data.wordNames);
         this.familyListImages = data.wordNames;
         if(this.familyListImages.length>0) {
         for (var i = 0; i < this.familyListImages.length; i++) {
         this.dBService.addImages({_id:this.familyListImages[i].name,family:this.familyListImages[i].family}).then(data=>{

         })
         }
         this.save(list);
         }
         });


         }*/
      });
      this.navCtrl.push(WordslistComponent, {
        wordList: this.wordsList,
      });
    })


      /* .then(data => {
       console.log(data);*/
      /*      this.zone.run(() => {
       console.log(data);
       this.imagesList = data;

       if(this.imagesList.length==0){
       console.log(list)
       .subscribe(data => {
       console.log(data);
       this.familyListImages = data.familyImages;

       for (var i = 0; i < this.familyListImages.length; i++) {
       this.dBService.addImages({familyImages: this.familyListImages[i]});

       //this.dBService.add({family:this.familyNames[i]});

       }

       });
       }
       })*/;
    //})
  }


  // let exp = {name:"nikhil"};
  /*  this.dBService.add(List)
   .catch(console.error.bind(console));*/


  /*  phonicFamilyList(familyList){
   this.dBService.getReviews().map(res => res.json())
   .subscribe(data => {
   console.log(data);
   });
   /!*console.log(familyList);
   var familyNames = [];
   var phonicImages = this.phonicFamilyImages ;
   for(let i=0;i<phonicImages.length;i++){
   if(phonicImages[i]['imageFamily']== familyList){
   familyNames.push(phonicImages[i]);
   }

   }
   console.log(familyNames);
   this.navCtrl.push(PhonicimagesComponent,{
   phonicImages:familyNames,
   });*!/
   }*/


}
