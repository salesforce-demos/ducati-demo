import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Socket } from 'ng-socket-io';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private socket: Socket, public toastCtrl: ToastController) {

    this.socket.on('message', (data) => {

      console.log(data);

      const toast = this.toastCtrl.create({
        message: data.message,
        duration: 10000,
        position: 'top'
      });

      toast.present();
    });
  }

}
