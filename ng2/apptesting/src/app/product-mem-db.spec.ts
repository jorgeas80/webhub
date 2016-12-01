/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />
import {ProductMemDb} from './product-mem-db';

describe('ProductMemDb', () => {
  it('should create an instance', () => {
    expect(new ProductMemDb()).toBeTruthy();
  });
});
