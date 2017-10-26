import { Component } from '@angular/core';
import { ModalController, NavController, App } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Socket } from 'ng-socket-io';
import { PopUpPage } from '../popup/popup';
import { LoginPage } from '../login/login';
import { DEFAULT_SOCKET_URL } from '../../constants';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  current: number = 1;
  socket: Socket;
  constructor(private app: App, public storage: Storage, public modal: ModalController, public nav: NavController) {
    storage.get('url').then(url => {
      this.socket = new Socket({ url: url || DEFAULT_SOCKET_URL });
      this.socket.on('message', (data) => this.openModal());
    })

  }

  reset() {
    this.app.getRootNav().setRoot(LoginPage);
  }

  goToSlide(i) {
    this.current = i;
  }

  openModal() {
    this.modal.create(PopUpPage).present();
  }
}
