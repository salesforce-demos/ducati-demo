import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { FaceBookPage } from '../pages/facebook/facebook';
import { RegistrationPage } from '../pages/registration/registration';
import { DiscoverPage } from '../pages/discover/discover';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { RidePage } from '../pages/ride/ride';
import { ProfilePage } from '../pages/profile/profile';
import { LockPage } from '../pages/lock/lock';
import { PopUpPage } from '../pages/popup/popup';

import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
const config: SocketIoConfig = { url: 'https://ducati-server-demo.herokuapp.com', options: {} };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    FaceBookPage,
    RegistrationPage,
    DiscoverPage,
    DashboardPage,
    RidePage,
    ProfilePage,
    LockPage,
    PopUpPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SocketIoModule.forRoot(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    FaceBookPage,
    RegistrationPage,
    DiscoverPage,
    DashboardPage,
    RidePage,
    ProfilePage,
    LockPage,
    PopUpPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
