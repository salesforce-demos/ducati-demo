import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-item',
  templateUrl: 'item.html'
})
export class ItemPage {

  constructor(public view: ViewController) {

  }

  back() {
    this.view.dismiss();
  }

}
