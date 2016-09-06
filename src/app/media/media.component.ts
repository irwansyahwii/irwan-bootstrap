import { ViewEncapsulation, Component, OnInit, Output, Input, ElementRef, Renderer, OnChanges, DoCheck} from '@angular/core';

@Component({
  selector: 'media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class MediaComponent implements OnInit {

  constructor(private el:ElementRef, private renderer:Renderer ) { }

  ngOnInit() {
    let mediaLeft = this.el.nativeElement.querySelector('media-left') || null;
    if(mediaLeft !== null){
      let verticalAlignmentAttribute = mediaLeft.attributes['verticalAlignment'] || null;
      if(verticalAlignmentAttribute !== null){
        let verticalAlignment = verticalAlignmentAttribute.value;

        let mediaLeftDiv = this.el.nativeElement.querySelector('.media-left') || null;
        if(mediaLeftDiv !== null){
          this.renderer.setElementClass(mediaLeftDiv, 'media-top' , false);
          this.renderer.setElementClass(mediaLeftDiv, 'media-middle' , false);
          this.renderer.setElementClass(mediaLeftDiv, 'media-bottom' , false);
          if(verticalAlignment.length > 0){
            this.renderer.setElementClass(mediaLeftDiv, 'media-' + verticalAlignment, true);
          }        
        }
      }     

    }

    let mediaRight = this.el.nativeElement.querySelector('media-right') || null;
    if(mediaRight !== null){
      let verticalAlignmentAttribute = mediaRight.attributes['verticalAlignment'] || null;
      if(verticalAlignmentAttribute !== null){
        let verticalAlignment = verticalAlignmentAttribute.value;

        let mediaLeftDiv = this.el.nativeElement.querySelector('.media-right') || null;
        if(mediaLeftDiv !== null){
          this.renderer.setElementClass(mediaLeftDiv, 'media-top' , false);
          this.renderer.setElementClass(mediaLeftDiv, 'media-middle' , false);
          this.renderer.setElementClass(mediaLeftDiv, 'media-bottom' , false);
          if(verticalAlignment.length > 0){
            this.renderer.setElementClass(mediaLeftDiv, 'media-' + verticalAlignment, true);
          }        
        }
      }     
      
    }

  }

}
