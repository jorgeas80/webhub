/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SeriestableComponent } from './seriestable.component';

describe('SeriestableComponent', () => {
  let component: SeriestableComponent;
  let fixture: ComponentFixture<SeriestableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriestableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriestableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
