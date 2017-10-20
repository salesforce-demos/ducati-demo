import { Component } from '@angular/core';
import { ModalController, NavController, App } from 'ionic-angular';
import { Socket } from 'ng-socket-io';
import { PopUpPage } from '../popup/popup';
import { ItemPage } from '../item/item';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  current: number = 1;
  constructor(private app: App, public modal: ModalController, private socket: Socket, public nav: NavController) {
    this.socket.on('message', (data) => this.openModal(''));
  }

  reset() {
    this.app.getRootNav().setRoot(LoginPage);
  }

  goToSlide(i) {
    this.current = i;
  }

  openModal(which) {
    const page = which === 'item' ? ItemPage : PopUpPage;
    this.modal.create(page).present();
  }
}
