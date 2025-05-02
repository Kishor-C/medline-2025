import { Directive, ElementRef, HostListener } from '@angular/core';
@Directive({
  selector: '[appToggle]',
  standalone: false
})
export class ToggleDirective {
  // ElementRef must be injected to this directive that will be the element generated an event
  constructor(private _element : ElementRef) { }

  // @HostListener: this can listen to any event that occur on the element that uses appToggle
  @HostListener("mouseenter")
  onMouseEnter() {
    //this._element.nativeElement.textContent = 'Click me';
    //play a video
    this._element.nativeElement.play();
  }
  @HostListener("mouseleave")
  onMouseLeave() {
    //pause a video
    this._element.nativeElement.pause();
    // this._element.nativeElement.textContent = "See you again";
    // // delay and show the button name
    // setTimeout(() => {
    //   this._element.nativeElement.textContent = "Button";
    // }, 3000)
  }
}
