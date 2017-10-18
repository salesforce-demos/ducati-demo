import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-ride',
  templateUrl: 'ride.html'
})
export class RidePage {

  @ViewChild(Slides) slides: Slides;

  constructor(public nav: NavController) {

  }

  goToSlide(i) {
    this.slides.slideTo(i);
  }

}
