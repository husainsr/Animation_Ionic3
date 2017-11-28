import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavController, NavParams } from 'ionic-angular';
import {
  trigger,
  state,
  style,
  animate,
  transition,query,stagger
} from '@angular/animations';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  animations: [
    trigger('photosAnimation', [
      transition('* => *', [
        query('ion-item',style({ transform: 'translateX(-100%)'})),
        query('ion-item',stagger('600ms', [animate('900ms', style({ transform: 'translateX(0)'}))]))
      ])
    ])
  ]
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {


        this.items.push({
          title: 'Item ' + i,
          note: 'This is item #' + i,
          icon: this.icons[Math.floor(Math.random() * this.icons.length)]
        });


    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}
