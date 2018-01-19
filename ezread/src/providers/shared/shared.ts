import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

export interface SharedModel {
  displayString: string;
  dynamicValue: string;
}

@Injectable()
export class SharedProvider {
  SharedComponent: SharedModel = {
    dynamicValue:'',
    displayString: '<svg><text data-card-text>'+this.SharedComponent.dynamicValue+'</text></svg>'
  };

  constructor(public http: Http) {
    console.log('Hello SharedProvider Provider');
  }

}
