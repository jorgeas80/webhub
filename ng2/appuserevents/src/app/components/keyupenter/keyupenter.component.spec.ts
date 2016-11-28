/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KeyupenterComponent } from './keyupenter.component';

describe('KeyupenterComponent', () => {
  let component: KeyupenterComponent;
  let fixture: ComponentFixture<KeyupenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyupenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyupenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
