/// <reference path="../../../typings/globals/jasmine/index.d.ts" />

/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { ContainerComponent } from './container.component';

describe('Component: Container', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContainerComponent
      ],
    });
  });

  it('should create an instance', () => {
    let fixture = TestBed.createComponent(ContainerComponent);
    let containerComponent = fixture.debugElement.componentInstance;
    expect(containerComponent).toBeTruthy();
  });

  it('should output container-fluid class when fluid is missing', () => {
    let fixture = TestBed.createComponent(ContainerComponent);
    let containerComponent = fixture.debugElement.componentInstance;

    let element = fixture.nativeElement;

    fixture.detectChanges();

    console.log(element.querySelector('div').attributes['class'].value);
    expect(element.querySelector('div').attributes['class'].value).toBe('container');

  });

  it('should output container-fluid class when fluid is false', () => {
    let fixture = TestBed.createComponent(ContainerComponent);
    let containerComponent = fixture.debugElement.componentInstance;
    containerComponent.fluid = false;

    let element = fixture.nativeElement;

    fixture.detectChanges();

    console.log(element.querySelector('div').attributes['class'].value);
    expect(element.querySelector('div').attributes['class'].value).toBe('container');

  });

  it('should output container-fluid class when fluid is true', () => {
    let fixture = TestBed.createComponent(ContainerComponent);
    let containerComponent = fixture.debugElement.componentInstance;
    containerComponent.fluid = true;

    let element = fixture.nativeElement;

    fixture.detectChanges();

    console.log(element.querySelector('div').attributes['class'].value);
    expect(element.querySelector('div').attributes['class'].value).toBe('container-fluid');

  });
});
