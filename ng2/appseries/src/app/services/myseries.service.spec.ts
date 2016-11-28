/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyseriesService } from './myseries.service';

describe('MyseriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyseriesService]
    });
  });

  it('should ...', inject([MyseriesService], (service: MyseriesService) => {
    expect(service).toBeTruthy();
  }));
});
