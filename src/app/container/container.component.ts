import { Component, OnInit, Output, Input, ElementRef, Renderer, OnChanges, DoCheck} from '@angular/core';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit, DoCheck, OnChanges {
  /**
   * Setting this to true will change the css class to .container-fluid 
   */

  // @Input()
  // public fluid: boolean = false;

  private _fluid:boolean = false;

  public get fluid(){
    return this._fluid;
  }

  @Input()
  public set fluid(value){
    if(value !== this._fluid){
      this._fluid = value;
      this.className = this.fluid ? 'container-fluid' : 'container';
    }
    
  }

  @Output()
  private className:string = 'container';

  constructor(private el:ElementRef, private renderer:Renderer ) { }

  ngOnInit() {
  }

  ngDoCheck(){
  }

  ngOnChanges(){
    // this.className = this.fluid ? 'container-fluid' : 'container';

    // let divEl = this.el.nativeElement.querySelector('div');
    
    // this.renderer.setElementClass(divEl, 'container-fluid', false);
    // this.renderer.setElementClass(divEl, 'container', false);
    // this.renderer.setElementClass(divEl, className, true);
  }

}
