/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VerbCardComponent } from './verbCard.component';

describe('VerbComponent', () => {
  let component: VerbCardComponent;
  let fixture: ComponentFixture<VerbCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerbCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerbCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
