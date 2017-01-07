import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title: String = "Studios";

  constructor(public navCtrl: NavController) {
    
  }

}
