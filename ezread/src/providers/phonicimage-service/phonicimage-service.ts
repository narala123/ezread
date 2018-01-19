import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import cordovaSqlitePlugin from 'pouchdb-adapter-cordova-sqlite';
import PouchFind from 'pouchdb-find';
import PouchDB from 'pouchdb-browser';
PouchDB.plugin(PouchFind);
//import { PhoniclistComponent } from '../components/phonicimages/phonicimages';
import {JSONPBackend} from "../../../node_modules/@angular/http/src/backends/jsonp_backend";

@Injectable()
export class PhonicimageServiceProvider {

  private _db4;
  private _bookMarks;
  private _db5;
  private _toggleValue;

  initDB() {

  }

  constructor(public http:Http) {
    PouchDB.plugin(cordovaSqlitePlugin);
    window["PouchDB"] = PouchDB;
    this._db4 = new PouchDB('bookMarks.db', {adapter: 'websql'});
    this._db5 = new PouchDB('toggleValue.db', {adapter: 'websql'});
  }

  setFavoriteList(bookmarks){
   console.log(bookmarks);

   return this._db4.put({_id:bookmarks._id,imageData:bookmarks.imageData});
   }
  /*setFavoriteList(bookmarks) {
   ,function(err,response){
   if(err){
   return console.log("already added to your favourite list");
   }
   });
  ///for update method
    let db4 = this._db4;
    db4.get(bookmarks._id).then(function (doc) {
      return db4.put({
        _id:bookmarks._id,imageData:bookmarks.imageData,
      });
    }).then(function (response) {
      console.log(response);
    }).catch(function (err) {
      console.log(err);
    });
  }*/

  getFavoriteList() {

    if (!this._bookMarks) {
      return this._db4.allDocs({include_docs: true})
        .then(docs => {

          // Each row has a .doc object and we just want to send an
          // array of birthday objects back to the calling controller,
          // so let's map the array to contain just the .doc objects.

          this._bookMarks = docs.rows.map(row => {
            // Dates are not automatically converted from a string.
            //  row.doc.Date = new Date(row.doc.Date);
            return row.doc;
          });

          // Listen for changes on the database.
          /*this._db.changes({ live: true, since: 'now', include_docs: true})
           .on('change', this.onDatabaseChange);*/

          return this._bookMarks;
        });
    } else {
      // Return cached data as a promise
      return Promise.resolve(this._bookMarks);
    }
  }
  unFavourite(detailes){
  /*  console.log(revId);
    let db = this._db4;
    db.get({_rev:"revId"}).then(function(doc) {
      console.log(doc)
      return db.remove({_rev:"revId"}).then(function(result) {
        console.log("sucess");
      }).catch(function (err) {
        console.log(err);
      });
    });*/
    console.log(detailes);
    return this._db4.remove({_rev:detailes._rev,_id:detailes._id,imageData:detailes.imageData});
  }
  public togglevalues;
  gettogglevalue(value) {
    console.log(value);
  /*  this.togglevalues.name = value;
    console.log(this.togglevalues);*/
    let db5 = this._db5;
    db5.get({"value":true}).then(function (doc) {
      console.log(doc)
    });
   /*   return db5.put({
        _id:value

    }).then(function (response) {
      console.log(response);
    }).catch(function (err) {
      console.log(err);
    });*/
  }
  getCategories(){
    return this.http.get("http://192.168.0.113:3001/categoryApi/getcategories").map((res:Response)=>res.json());

  }
}
