import { Component, ViewChild } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { Socket } from 'ng-socket-io';
import { PopUpPage } from '../popup/popup';
import { ItemPage } from '../item/item';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  current: number = 1;
  constructor(public modal: ModalController, private socket: Socket) {
    this.socket.on('message', (data) => this.openModal(''));
  }

  goToSlide(i) {
    this.current = i;
  }

  openModal(which) {
    const page = which === 'item' ? ItemPage : PopUpPage;
    this.modal.create(page).present();
  }
}
