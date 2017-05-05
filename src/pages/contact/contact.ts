import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  lista: any[] = [];
  constructor(public navCtrl: NavController) {
    this.lista.push({ name: "fauger2008@hotmail.com" });
    this.lista.push({ name: "cary68@hotmail.com" });
    this.lista.push({ name: "josepirobo@hotmail.com" });
    this.lista.push({ name: "marieta10la@hotmail.com" });
    this.lista.push({ name: "bracay@hotmail.com" });
    this.lista.push({ name: "alaskita@hotmail.com" });
    this.lista.push({ name: "fauger2008@hotmail.com" });
    this.lista.push({ name: "cary68@hotmail.com" });
    this.lista.push({ name: "josepirobo@hotmail.com" });
    this.lista.push({ name: "marieta10la@hotmail.com" });
    this.lista.push({ name: "bracay@hotmail.com" });
    this.lista.push({ name: "alaskita@hotmail.com" });
  }

}
