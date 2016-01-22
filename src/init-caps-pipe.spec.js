import 'reflect-metadata';
import {
  it,
  inject,
  injectAsync,
  beforeEachProviders,
  TestComponentBuilder
}
from 'angular2/testing';

import {InitCapsPipe} from './init-caps-pipe.js';

describe('InitCapsPipe', () => {
  let pipe = InitCapsPipe;
  beforeEach(() => {
    pipe = new InitCapsPipe();
  });
  it('transforms "abc" to "Abc"', () => {
    expect(pipe.transform('abc')).toEqual('Abc');
  });
  it('transforms "abc def" to "Abc Def"', () => {
    expect(pipe.transform('abc def')).toEqual('Abc Def');
  });
  it('leaves "Abc Def" unchanged', () => {
    expect(pipe.transform('Abc Def')).toEqual('Abc Def');
  });
});
