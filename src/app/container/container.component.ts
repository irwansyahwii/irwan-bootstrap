import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  /**
   * Setting this to true will change the css class to .container-fluid 
   */

  @Input()
  public fluid: boolean = false;
  constructor() { }

  ngOnInit() {
    console.log('this.fluid:', this.fluid);
  }
}
