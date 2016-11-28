/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Clickme2Component } from './clickme2.component';

describe('Clickme2Component', () => {
  let component: Clickme2Component;
  let fixture: ComponentFixture<Clickme2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Clickme2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Clickme2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
