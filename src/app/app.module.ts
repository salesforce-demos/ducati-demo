import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SocketIoModule } from 'ng-socket-io';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { ConfigPage } from '../pages/config/config';
import { HomePage } from '../pages/home/home';
import { FaceBookPage } from '../pages/facebook/facebook';
import { RegistrationPage } from '../pages/registration/registration';
import { DiscoverPage } from '../pages/discover/discover';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { RidePage } from '../pages/ride/ride';
import { ProfilePage } from '../pages/profile/profile';
import { LockPage } from '../pages/lock/lock';
import { PopUpPage } from '../pages/popup/popup';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ConfigPage,
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
    SocketIoModule.forRoot({url: '', options: {}}),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ConfigPage,
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
