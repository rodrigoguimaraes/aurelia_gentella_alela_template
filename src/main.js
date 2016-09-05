import 'bootstrap';
import {customJS} from '../src/custom.js';

//Configure Bluebird Promises.
//Note: You may want to use environment-specific configuration.
Promise.config({
  warnings: {
    wForgottenReturn: false
  }
});

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources')
    .developmentLogging();

  //Uncomment the line below to enable animation.
  //aurelia.use.plugin('aurelia-animator-css');
  //if the css animator is enabled, add swap-order="after" to all router-view elements

  //Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  //aurelia.use.plugin('aurelia-html-import-template-loader')

  // aurelia.start().then(() => aurelia.setRoot()).then(() => {loadSidebar();});

  aurelia.start()
    .then(a => a.setRoot())
    .then(a => {     
      loadSidebar();      
    });  
      
}
