/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ClickmeComponent } from './clickme.component';

describe('ClickmeComponent', () => {
  let component: ClickmeComponent;
  let fixture: ComponentFixture<ClickmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
