import { Directive, ElementRef, Input, Renderer, OnInit } from '@angular/core';

@Directive({
  selector: '[appSeriestatus]',
})
export class SeriestatusDirective implements OnInit {
  @Input() private appSeriestatus: string;

  constructor(private el: ElementRef, private renderer: Renderer) { }

  // Can't put this inside constructor
  ngOnInit() {
    let classes = {
      'Running': 'text-success',
      'In Development': 'text-warning',
      'Ended': 'text-danger'
    };

    if (this.appSeriestatus in classes) {
      this.renderer.setElementClass(this.el.nativeElement, classes[this.appSeriestatus], true);
    }
  }
}
