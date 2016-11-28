/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TvmazeService } from './tvmaze.service';

describe('TvmazeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TvmazeService]
    });
  });

  it('should ...', inject([TvmazeService], (service: TvmazeService) => {
    expect(service).toBeTruthy();
  }));
});
