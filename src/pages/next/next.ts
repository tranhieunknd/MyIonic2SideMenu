import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// import { ListNameValue } from '../../components/list-name-value/list-name-value';

/*
  Generated class for the Next page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  selector: 'page-next',
  templateUrl: 'next.html'
})
export class NextPage {

  lstSV: Array<{ key: string, value: any }>
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lstSV = [];
    for(let i = 0; i < 10; i ++){
      this.lstSV.push({
        key: '#sv' + i,
        value: 'Hoc sinh ' + i
      })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NextPage');
  }
}
