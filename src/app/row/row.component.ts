import { Component, OnInit, Input, ElementRef, Renderer, OnChanges } from '@angular/core';

@Component({
  selector: 'row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {

  /**
   * Possible values: xs-top | xs-middle | xs-bottom
   * will add class flex-items-*[value]
   */
  @Input()
  public flexItems:string = '';

  constructor(private el:ElementRef, private renderer: Renderer) 
  { 

  }

  ngOnInit(){
    this.reApply();
  }

  reApply(){
    let divElement = this.el.nativeElement.querySelector('div');

    this.renderer.setElementClass(divElement, 'row', true);
    if(this.flexItems.trim().length > 0){
      this.renderer.setElementClass(divElement, 'flex-items-' + this.flexItems.trim(), true);
    }
    else{
      this.renderer.setElementClass(divElement, 'flex-items-' + this.flexItems.trim(), false);
    }
  }

  ngOnChanges() {
    this.reApply();
    
  }

}
