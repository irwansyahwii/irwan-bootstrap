import { Component, OnInit, Input, ElementRef, Renderer } from '@angular/core';

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

  ngOnInit() {
    this.renderer.setElementClass(this.el.nativeElement, 'row', true);
    if(this.flexItems.trim().length > 0){
      this.renderer.setElementClass(this.el.nativeElement, 'flex-items-' + this.flexItems.trim(), true);
    }
    
  }

}
