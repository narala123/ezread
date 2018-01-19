import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';

import cordovaSqlitePlugin from 'pouchdb-adapter-cordova-sqlite';

import PouchFind from 'pouchdb-find';
import PouchDB from 'pouchdb-browser';
PouchDB.plugin(PouchFind);
//import { PhoniclistComponent } from '../components/phonicimages/phonicimages';
import {JSONPBackend} from "../../../node_modules/@angular/http/src/backends/jsonp_backend";

/*
  Generated class for the BookMarkProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class dBconnectionService {
  private _db;
  private _family;

  private _db2;
  private _familyImages;

  private _db3;
  private _phonicImages;


  public data = [];
  public familyImages = [];


  constructor(public http:Http) {

    PouchDB.plugin(cordovaSqlitePlugin);
    (<any>window).PouchDB = PouchDB;
    this._db = new PouchDB('family.db', {adapter: 'websql'});
    this._db2 = new PouchDB('familyImages.db', {adapter: 'websql'});
    this._db3 = new PouchDB('phonicImages.db', {adapter: 'websql'});
  }

  getReviews() {
    return this.http.get("http://192.168.0.113:3001/loginApi/totalFamily")

  }

  getImages(list) {
    console.log(list);
    return this.http.post("http://192.168.0.113:3001/loginApi/familyImages", {family: list});
  }

///////////////////////pouch db setup//////////////////////
  add(exp) {
    console.log(exp);
    return this._db.put(exp, function (err, res) {
      if (err) {
        return console.log(err);
      }
    });
  }

  addImages(imageData) {
    console.log(imageData);

    // console.log(this._db3);
    //console.log(this);

    return this._db2.put(imageData, function (err, response) {
      if (err) {
        return console.log(err);
      }
    })

  }

  addData(data) {
    return this._db3.put(data, function (err, res) {
      if (err) {
        return console.log(err);
      }
    })
  }

  getAll() {

    if (!this._family) {
      return this._db.allDocs({include_docs: true})
        .then(docs => {

          // Each row has a .doc object and we just want to send an
          // array of birthday objects back to the calling controller,
          // so let's map the array to contain just the .doc objects.

          this._family = docs.rows.map(row => {
            // Dates are not automatically converted from a string.
            //  row.doc.Date = new Date(row.doc.Date);
            return row.doc;
          });

          // Listen for changes on the database.
          /*this._db.changes({ live: true, since: 'now', include_docs: true})
           .on('change', this.onDatabaseChange);*/

          return this._family;
        });
    } else {
      // Return cached data as a promise
      return Promise.resolve(this._family);
    }
  }

  getRequiredImages(list) {
    var db = this._db2

    return db.createIndex({
      index: {fields: ['family']}
    }).then(data=> {
      return db.find({
        selector: {family: list}

      })

    });

    /*return this._db.get('family1').then((docs) => {
     console.log(docs);

     }).catch(function (err) {
     console.log(err);
     });*/

    /*if (!this._familyImages) {
     return this._db2.get('family1')
     .then(docs => {

     // Each row has a .doc object and we just want to send an
     // array of birthday objects back to the calling controller,
     // so let's map the array to contain just the .doc objects.

     this._familyImages = docs.rows.map(row => {
     // Dates are not automatically converted from a string.
     //  row.doc.Date = new Date(row.doc.Date);
     return row.doc;
     });

     // Listen for changes on the database.
     /!*this._db.changes({ live: true, since: 'now', include_docs: true})
     .on('change', this.onDatabaseChange);*!/

     return this._familyImages;
     });
     } else {
     // Return cached data as a promise
     return Promise.resolve(this._familyImages);
     }*/
  }

  getPouchImages(family) {
    var db3 = this._db3;
    return db3.createIndex({
      index: {fields: ['family']}
    }).then(data => {
      return db3.find({
        selector: {family: family}
      })
    })
  }

  getPhonicImages(familyData) {
    console.log(familyData);
    return this.http.post("http://192.168.0.113:3001/loginApi/phonicImages", {family: familyData});
  }

  getTotalData() {
    return this.http.get("http://192.168.0.113:3001/loginApi/totalData");
  }

  //////////////pouchdb/////////////
  externalFile() {
    /*return this.http.get("../../../helloworld.json")
     .map((res:Response) => res.json().data); //records in this case*/
    this.http.get('../../../helloworld.json').map(res => res.json()).subscribe(data => {
       // this.posts = data.da;
        console.log(data);
      }, err => {
        console.log("Oops!");
      }
      /**/
    );
  }

}
