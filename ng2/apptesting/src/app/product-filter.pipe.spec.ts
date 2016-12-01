/// <reference path="../../node_modules/@types/jasmine/index.d.ts" />

import { ProductFilterPipe } from './product-filter.pipe';
import { Product } from './product';
import { Pipe } from '@angular/core';

const makeProductsData = () => [
  {
    'id': 1,
    'name': 'Leaf Rake',
  },
  {
    'id': 2,
    'name': 'Garden Cart',
  },
  {
    'id': 3,
    'name': 'Hammer',
  },
  {
    'id': 4,
    'name': 'Saw',
  },
  {
    'id': 5,
    'name': 'Video Game Controller',
  }
] as Product[];

describe('Pipe: ProductFilter', () => {
  let fakeProducts: Product[];
  let pipe = new ProductFilterPipe();

  beforeEach(() => {
    fakeProducts = makeProductsData();
  });


  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should filter by name', () => {
    expect(pipe.transform(fakeProducts, 'Saw')[0].name).toBe('Saw');
  });

  it('should return empty array for non existent filter', () => {
    expect(pipe.transform(fakeProducts, 'xxxxxxx').length).toBe(0);
  });

});
