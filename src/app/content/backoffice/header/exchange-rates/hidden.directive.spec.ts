import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HiddenDirective } from './hidden.directive';
import { By } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'course-hidden-directive-test',
  template: `
    <button mat-button  courseHidden #control="hiddenControl"></button>
    <span class="hide" (click)="control.hide()">Hide</span>
    <span class="show" (click)="control.show()">Show</span>
  `
})
class TestComponent {
}

describe('Hidden directive', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, HiddenDirective],
      imports: [MatButtonModule]
    });
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });
  it('should hide/show ', () => {

    const element: DebugElement = fixture.debugElement.query(By.css('[courseHidden]'));
    const hideBtn: DebugElement = fixture.debugElement.query(By.css('.hide'));
    const showBtn: DebugElement = fixture.debugElement.query(By.css('.show'));
    hideBtn.triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(element.styles.visibility).toEqual('hidden');
    showBtn.triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(element.styles.visibility).toEqual('visible');

  });
});
