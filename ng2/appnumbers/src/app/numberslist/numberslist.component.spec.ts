/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NumberslistComponent } from './numberslist.component';

describe('NumberslistComponent', () => {
  let component: NumberslistComponent;
  let fixture: ComponentFixture<NumberslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
