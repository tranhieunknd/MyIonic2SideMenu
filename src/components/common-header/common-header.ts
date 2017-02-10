import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'header-common',
    templateUrl: 'header-common.html'
})
export class HeaderCommon {
    // private _title: string;
    // @Input() title: string;
    // set title(til: string) {
    //     this._title = (til && til.trim()) || "Page Common";

    // } 
    // get title() : string { return this._title; }

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        // this._title = '';
       // console.log(this.title);
     }

}