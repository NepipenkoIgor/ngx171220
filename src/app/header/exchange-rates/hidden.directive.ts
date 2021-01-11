import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[courseHidden]',
  exportAs: 'hiddenControl'
})
export class HiddenDirective {

  @HostBinding('style.visibility')
  public visibility: 'visible' | 'hidden' = 'hidden';

  // TODO need discuss
  @HostBinding('color')
  public color = 'warn';

  @HostListener('click', [])
  public clickWithDirective(): void {
    console.log('click');
  }

  public show(): void {
    this.visibility = 'visible';
  }

  public hide(): void {
    this.visibility = 'hidden';
  }
}
