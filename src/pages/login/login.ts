import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Socket } from 'ng-socket-io';
import { FaceBookPage } from '../facebook/facebook';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public nav: NavController, private socket: Socket, public toastCtrl: ToastController) {

    this.socket.on('message', (data) => {

      console.log(data);

      const toast = this.toastCtrl.create({
        message: data.message,
        duration: 10000,
        position: 'bottom'
      });

      toast.present();
    });
  }


  next() {
    this.nav.push(FaceBookPage);
  }

}
