import { Component, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'course-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SwitcherComponent,
      multi: true
    }
  ]
})
export class SwitcherComponent implements ControlValueAccessor {

  public customValue = false;
  // tslint:disable-next-line:ban-types
  private onChangeCb!: Function;

  @HostListener('click')
  public toggle(): void {
    this.customValue = !this.customValue;
    this.onChangeCb(this.customValue);
  }

  public writeValue(checked: boolean): void {
    this.customValue = checked;
  }

  public registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }

  // tslint:disable-next-line:variable-name
  public registerOnTouched(_fn: any): void {

  }
}
