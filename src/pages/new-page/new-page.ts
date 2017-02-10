import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { NextPage } from '../../pages/next/next';
import { HeaderCommon } from '../../components/common-header/common-header';

/*
  Generated class for the NewPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-new-page',
  templateUrl: 'new-page.html'
})
export class NewPage {

  aboutPage: any;
  dataView: Array<{ title: string, icon: string, note: string, component: any }>;
  icons: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
      'american-football', 'boat', 'bluetooth', 'build'];

    this.dataView = [];
    for (let i = 0; i < 10; i++) {
      this.dataView.push({
        title: 'item' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)],
        note: "#" + i + " This icon",
        component: NextPage
      });
    }

    this.aboutPage = NextPage

    // this.dataView = [
    //   { title: 'flask', component: NextPage },
    //   { title: 'wifi', component: NextPage },
    //   { title: 'beer', component: NextPage },
    // ];

  }

  clickPage(page) {
    console.log('vua click xong roi do');
    this.navCtrl.push(NextPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPagePage');
  }

}
