import {Component} from 'angular2/core';

@Component({
  selector: 'app',
  templateUrl: '/static/app/dashboard/dashboard.html'
})
export class MyApp {
  constructor() {
    this.bla = 'cddd';
    this.number = 7;
  }
}
