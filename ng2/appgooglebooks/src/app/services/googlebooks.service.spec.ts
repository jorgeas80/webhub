/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GooglebooksService } from './googlebooks.service';

describe('GooglebooksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GooglebooksService]
    });
  });

  it('should ...', inject([GooglebooksService], (service: GooglebooksService) => {
    expect(service).toBeTruthy();
  }));
});
