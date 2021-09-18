import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen: boolean = false
  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) { }

  @HostListener('document:click', ['$event']) toogleOpen(event: Event) {
    // console.log(this.elementRef.nativeElement);
    this.isOpen = this.elementRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }

}
