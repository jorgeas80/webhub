/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyseriesComponent } from './myseries.component';

describe('MyseriesComponent', () => {
  let component: MyseriesComponent;
  let fixture: ComponentFixture<MyseriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyseriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
