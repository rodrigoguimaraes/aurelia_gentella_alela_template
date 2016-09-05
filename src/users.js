import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import {InnerPage} from './app.js';
import 'fetch';

@inject(HttpClient)
export class Users extends InnerPage{
  heading = 'Github Users';
  users = [];

  constructor(http) {
    super();
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('https://api.github.com/');
    });

    this.http = http;
  }

  activate() {    
    reloadSidebar();
    return this.http.fetch('users')
      .then(response => response.json())
      .then(users => this.users = users);
  }

}
