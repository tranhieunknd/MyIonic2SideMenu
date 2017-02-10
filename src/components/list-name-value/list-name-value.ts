import { Component, Input } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'list-name-value',
    templateUrl: 'list-name-value.html'
})
export class ListNameValue {

    @Input() dataFor: Array<{ key: string, value: any }>;
    constructor(public navCtrl: NavController, public navParams: NavParams) { }
}
