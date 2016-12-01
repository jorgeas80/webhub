/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />

import {Product} from './product';

describe('Product', () => {
  it('should create an instance', () => {
    expect(new Product(0, '')).toBeTruthy();
  });
});
