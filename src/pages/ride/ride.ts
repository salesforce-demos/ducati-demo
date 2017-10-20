import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-ride',
  templateUrl: 'ride.html'
})
export class RidePage {

  current: number = 1;
  constructor(public nav: NavController) {

  }

  goToSlide(i) {
    this.current = i;
  }

}
