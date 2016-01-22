import 'es6-shim';
import 'reflect-metadata';
import 'zone.js/lib/browser/zone-microtask';
import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode} from 'angular2/core';
import {MyApp} from './dashboard/dashboard';

// if (ENVIRONMENT == 'production') {
//  enableProdMode();
// }
bootstrap(MyApp);
