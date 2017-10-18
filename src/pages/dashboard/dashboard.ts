import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RidePage } from '../ride/ride';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class DashboardPage {

  constructor(public nav: NavController) {

  }

  ride() {
    this.nav.push(RidePage, {}, {animate: true, direction: 'back'});
  }
}
