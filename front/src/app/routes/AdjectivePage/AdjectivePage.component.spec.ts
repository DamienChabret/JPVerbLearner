import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdjectivePageComponent } from './AdjectivePage.component';

describe('AdjectivePageComponent', () => {
  let component: AdjectivePageComponent;
  let fixture: ComponentFixture<AdjectivePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdjectivePageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjectivePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
