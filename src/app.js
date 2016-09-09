import * as nprogress from 'nprogress';
import {customJS} from '../src/custom.js';
export class App {
 
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'dashboard'], name: 'dashboard',      moduleId: 'pages/home/dashboard',       nav: true, title: 'Dashboard'},
      { route: ['dashboard2'],    name: 'dashboard2',     moduleId: 'pages/home/dashboard2',      nav: true, title: 'Dashboard 2'},
      { route: ['dashboard3'],    name: 'dashboard3',     moduleId: 'pages/home/dashboard3',      nav: true, title: 'Dashboard 3'},
      { route: ['form'],          name: 'form',           moduleId: 'pages/forms/general-form',           nav: true, title: 'General Form'}      
    ]);  
    this.router = router;    
  }
}

export class InnerPage{

constructor(){

}  

  activate() {
    reloadSidebar();
  }


}

