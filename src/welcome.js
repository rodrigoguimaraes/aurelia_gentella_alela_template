//import {computedFrom} from 'aurelia-framework';
import {InnerPage} from './app.js';

export class Welcome extends InnerPage{

constructor(){
  super();
}    

}

export class UpperValueConverter {
  toView(value) {
    return value && value.toUpperCase();
  }
}
