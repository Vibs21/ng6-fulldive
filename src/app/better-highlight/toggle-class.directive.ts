import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appToggleClass]'
})
export class ToggleClassDirective {
  @HostBinding('class.customClass') isClass = false;

  @HostListener('click') toggleClass() {
    this.isClass = !this.isClass;
  }
}
