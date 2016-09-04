/// <reference path="../../../typings/globals/jasmine/index.d.ts" />

/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { RowComponent } from './row.component';

describe('Component: Row', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        RowComponent
      ],
    });
  });

  it('should create an instance', () => {
    let fixture = TestBed.createComponent(RowComponent);
    let containerComponent = fixture.debugElement.componentInstance;
    expect(containerComponent).toBeTruthy();
  });

  it('should create a div with row class', () => {
    let fixture = TestBed.createComponent(RowComponent);
    let containerComponent = fixture.debugElement.componentInstance;

    let element = fixture.nativeElement;

    expect(element.querySelector('div').attributes['class'].value).toBe('row')
  });
  
});
