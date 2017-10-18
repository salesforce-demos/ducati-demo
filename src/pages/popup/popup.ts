import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { ItemPage } from '../item/item';

@Component({
  selector: 'page-popup',
  templateUrl: 'popup.html'
})
export class PopUpPage {

  constructor(public modal: ModalController, public view: ViewController) {

  }

  back() {
    this.view.dismiss();
  }

  show() {
    this.modal.create(ItemPage).present();
  }

}
