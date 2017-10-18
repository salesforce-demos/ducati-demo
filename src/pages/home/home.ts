import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DiscoverPage } from '../discover/discover';
import { RidePage } from '../ride/ride';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  DiscoverPage = DiscoverPage;
  RidePage = RidePage;
  ProfilePage = ProfilePage;

  constructor(public nav: NavController) {
  }

}
