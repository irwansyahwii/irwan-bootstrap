import { Component, OnInit, Input, ElementRef, Renderer, OnChanges } from '@angular/core';

import * as Rx from 'rxjs/Rx';

declare let require:any;
let validate = require('validate.js');

@Component({
  selector: 'column',
  templateUrl: './col.component.html',
  styleUrls: ['./col.component.css']
})
export class ColumnComponent implements OnInit, OnChanges {

  @Input()
  public xs:string = '';

  @Input()
  public sm:string = '';

  @Input()
  public md:string = '';

  @Input()
  public lg:string = '';

  @Input()
  public xl:string = '';

  @Input()
  public hidden:string = '';

  @Input()
  public offset:string = '';

  protected validSizeValues = ["true", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]; 
  protected validHiddenValues = ["xs-down", "sm-down", "md-down", "lg-down", "xl-down", "xs-up", "sm-up", "md-up", "lg-up", "xl-up"];

  protected attributesConstraints = {
    xs:{
      presence:false,
      inclusion: this.validSizeValues
    },
    sm:{
      presence:false,
      inclusion: this.validSizeValues
    },
    md:{
      presence:false,
      inclusion: this.validSizeValues
    },
    lg:{
      presence:false,
      inclusion: this.validSizeValues
    },
    xl:{
      presence:false,
      inclusion: this.validSizeValues
    }
  }

  protected hiddenConstraints = {
    hidden: {
      presence: false,
      inclusion: this.validHiddenValues
    }
  }

  constructor(private el:ElementRef, private renderer:Renderer ) { }


  protected setSizeClass(sizeName:string, sizeValue:string, separator:string = '-'){
    sizeValue = sizeValue.trim().toLowerCase();

    let divElement = this.el.nativeElement.querySelector('div');

    if(sizeValue.length > 0){
      if(sizeValue === "true"){
        this.renderer.setElementClass(divElement, sizeName, true);
      }
      else{
        this.renderer.setElementClass(divElement, sizeName + separator + sizeValue, true);
      }
    }
    else{
      this.renderer.setElementClass(divElement, sizeName, false);
      this.renderer.setElementClass(divElement, sizeName + separator + sizeValue, false);
    }
    
  }

  protected setArrValues(valueName:string, value:string, constraints):Rx.Observable<void>{
    return Rx.Observable.create(s => {
      let arrValues = value.split(',');
      if(arrValues.length > 0){
        Rx.Observable.from(arrValues, Rx.Scheduler.async)
          .subscribe((arrValue:string) => {
            let obj = {};
            obj[valueName] = value;
            let errors = validate(obj, constraints, {format: "flat"}) || null;

            if(errors !== null){
              console.warn(errors.join(', '));
            }

            this.setSizeClass(valueName, arrValue);

            s.next();
            s.complete();
          })
      }else{
        s.next();
        s.complete();        
      }
    })
  }

  reApply(){
    let errors = validate(this, this.attributesConstraints, {format:'flat'}) || null;

    if(errors !== null){
      console.warn(errors.join(', '))      
    }

    let xsValue = this.xs.trim().toLowerCase();
    this.setSizeClass('col-xs', xsValue);

    let smValue = this.sm.trim().toLowerCase();
    this.setSizeClass('col-sm', smValue);

    let mdValue = this.md.trim().toLowerCase();
    this.setSizeClass('col-md', mdValue);

    let lgValue = this.lg.trim().toLowerCase();
    this.setSizeClass('col-lg', lgValue);

    let xlValue = this.xl.trim().toLowerCase();
    this.setSizeClass('col-xl', xlValue);

    this.setArrValues('hidden', this.hidden, this.hiddenConstraints)
    .flatMap(() => this.setArrValues('offset', this.offset, {}))
    .subscribe(r => {
      
    })
  }

  ngOnChanges(){
    this.reApply();
  }


  ngOnInit() {
    this.reApply();

  }

}
