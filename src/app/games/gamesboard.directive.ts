import { Directive, ElementRef, HostListener, Input, Renderer} from '@angular/core';

@Directive({
  selector: '[playerHandling]'
})
export class PlayerHandlingDirective {

  constructor(private element: ElementRef, private renderer: Renderer) { }

  @Input('playerHandling') cssClass: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.addClass(this.cssClass, true);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.addClass(this.cssClass, false);
  }

  private addClass(cssClass: string, isAdd: boolean) {
    if (!this.element.nativeElement.classList.contains('active')) {
      this.renderer.setElementClass(this.element.nativeElement, cssClass, isAdd);
    }
  }
}
