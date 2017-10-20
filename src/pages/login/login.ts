import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FaceBookPage } from '../facebook/facebook';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public nav: NavController) {
  }


  next() {
    this.nav.push(FaceBookPage);
  }

}
