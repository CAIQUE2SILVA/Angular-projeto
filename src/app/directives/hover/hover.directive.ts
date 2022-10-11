import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  @Input() public appHover : string = '';

private elementColor: string ;

  constructor(private elementRef: ElementRef) {
    this.elementColor = this.elementRef.nativeElement.style.backgroundColor
  }

  @HostListener('mouseenter')
  private onMouseEnter() : void {
    this.elementRef.nativeElement.style.backgroundColor = this.appHover || 'yellow'
  }


  @HostListener('mouseleave')
  private onMauseLeave(): void{

    this.elementRef.nativeElement.style.backgroundColor = this.elementColor || 'transparent'

  }
}
