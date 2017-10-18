import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';

@Component({
  selector: 'page-ride',
  templateUrl: 'ride.html'
})
export class RidePage {

  constructor(public nav: NavController) {

  }

  dashboard() {
    this.nav.push(DashboardPage);
  }

}
