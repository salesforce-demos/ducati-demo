import { Component } from '@angular/core';
import { ModalController, NavController, App } from 'ionic-angular';
import { PopUpPage } from '../popup/popup';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  current: number = 1;
  constructor(private app: App,public modal: ModalController, public nav: NavController) {
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
