import { Component } from '@angular/core';
import { Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Socket } from 'ng-socket-io';
import { Storage } from '@ionic/storage';
import { DEFAULT_SOCKET_URL } from '../constants';

import { LoginPage } from '../pages/login/login';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    toast: ToastController,
    socket: Socket,
    storage: Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      storage.get('url').then(url => {
        socket = new Socket({ url: url || DEFAULT_SOCKET_URL });
        socket.on('message', (data) => {
           toast.create({
             message: data.message,
             duration: 10000,
             position: 'top'
           }).present();
        });
      })
      statusBar.styleDefault();
      splashScreen.hide();
    });

  }
}
