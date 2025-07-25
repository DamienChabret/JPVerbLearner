import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ConjugationPageComponent } from './ConjugationPage.component';

describe('ConjugationPageComponent', () => {
  let component: ConjugationPageComponent;
  let fixture: ComponentFixture<ConjugationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConjugationPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConjugationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
