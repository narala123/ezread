import { Directive } from '@angular/core';

/**
 * Generated class for the CustomDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
  selector: '[custom]' // Attribute selector
})
export class CustomDirective {

  constructor() {
    console.log('Hello CustomDirective Directive');
  }

}
