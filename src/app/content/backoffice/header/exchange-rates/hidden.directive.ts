import { Directive, Host, HostBinding, HostListener, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Directive({
  selector: '[courseHidden]',
  exportAs: 'hiddenControl'
})
export class HiddenDirective implements OnInit {

  @HostBinding('style.visibility')
  public visibility: 'visible' | 'hidden' = 'hidden';

  // TODO need discuss
  @HostBinding('color')
  public color = 'warn';

  public constructor(
    @Host() private matButComponent: MatButton
  ) {

  }

  public ngOnInit(): void {
    this.matButComponent.color = 'warn';
  }


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
