import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-lock',
  templateUrl: 'lock.html'
})
export class LockPage {

  constructor(public nav: NavController) {

  }

  unlock() {
    this.nav.push(ProfilePage, {}, {animate: true, direction: 'back'});
  }

}
