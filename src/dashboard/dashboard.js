import {Component} from 'angular2/core';
import {InitCapsPipe} from '../init-caps-pipe.js';

@Component({
  selector: 'app',
  pipes: [InitCapsPipe],
  templateUrl: '/dashboard/dashboard.html'
})
export class MyApp {
  constructor() {
    this.message = 'hello world';
  }
}
