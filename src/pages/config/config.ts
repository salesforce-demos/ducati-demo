import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';
import { DEFAULT_SOCKET_URL } from '../../constants';

@Component({
  selector: 'page-config',
  templateUrl: 'config.html'
})
export class ConfigPage {
  url: String;
  constructor(public nav: NavController, public storage: Storage) {
    storage.get('url').then(url => this.url = (url || DEFAULT_SOCKET_URL));
  }

  changePreference(e) {
    this.url = e.value;
  }

  close() {
    this.storage.set('url', this.url);
    this.nav.push(LoginPage);
  }
}
