import { Component, ViewChild } from '@angular/core';
import { ModalController, Slides } from 'ionic-angular';
import { PopUpPage } from '../popup/popup';
import { ItemPage } from '../item/item';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  @ViewChild(Slides) slides: Slides;

  constructor(public modal: ModalController) {

  }

  goToSlide(i) {
    this.slides.slideTo(i);
  }

  openModal(which) {
    const page = which === 'item' ? ItemPage : PopUpPage;
    this.modal.create(page).present();
  }
}
