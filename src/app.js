import * as nprogress from 'nprogress';
import {customJS} from '../src/custom.js';
export class App {
 
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'dashboard'], name: 'dashboard',      moduleId: 'dashboard',      nav: true, title: 'Dashboard'},
      { route: ['dashboard2'],  name: 'dashboard2',      moduleId: 'dashboard2',      nav: true, title: 'Dashboard 2'},
      { route: ['dashboard3'],  name: 'dashboard3',      moduleId: 'dashboard3',      nav: true, title: 'Dashboard 3'},
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' }
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

