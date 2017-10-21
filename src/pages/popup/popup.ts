import { Component, ViewChild } from '@angular/core';
import { ModalController, Slides } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-popup',
  templateUrl: 'popup.html'
})
export class PopUpPage {
  @ViewChild(Slides) slides: Slides;
  constructor(public modal: ModalController, public view: ViewController) {

  }

  back() {
    this.view.dismiss();
  }

  next() {
    this.slides.slideNext();
  }

}
