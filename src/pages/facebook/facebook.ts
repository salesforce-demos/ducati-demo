import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistrationPage } from '../registration/registration';

@Component({
  selector: 'page-facebook',
  templateUrl: 'facebook.html'
})
export class FaceBookPage {

  constructor(public nav: NavController) {

  }


  next() {
    this.nav.push(RegistrationPage);
  }

}
