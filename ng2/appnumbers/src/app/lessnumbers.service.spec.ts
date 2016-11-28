/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LessnumbersService } from './lessnumbers.service';

describe('LessnumbersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LessnumbersService]
    });
  });

  it('should ...', inject([LessnumbersService], (service: LessnumbersService) => {
    expect(service).toBeTruthy();
  }));
});
