import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { LockPage } from '../lock/lock';
import { PopUpPage } from '../popup/popup';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public nav: NavController, public modal: ModalController) {

  }

  lock() {
    this.nav.push(LockPage);
  }

  openModal() {
    this.modal.create(PopUpPage).present();
  }
}
