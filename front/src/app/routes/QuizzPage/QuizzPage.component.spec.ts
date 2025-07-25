import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QuizzPageComponent } from './QuizzPage.component';

describe('QuizzPageComponent', () => {
  let component: QuizzPageComponent;
  let fixture: ComponentFixture<QuizzPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuizzPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizzPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
