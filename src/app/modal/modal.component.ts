import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  HostListener,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { IModalData, ModalService } from './modal.service';
import { UnSubscriber } from '../unsubscriber';

@Component({
  selector: 'course-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent extends UnSubscriber implements OnInit {

  @ViewChild('modalContent', {read: ViewContainerRef})
  public modalViewContainerRef!: ViewContainerRef;

  public isOpen = false;

  private componentFactory!: ComponentFactory<any>;
  private componentRef!: ComponentRef<any>;

  constructor(
    private readonly modalService: ModalService,
    private readonly cfr: ComponentFactoryResolver,
  ) {
    super();
  }

  ngOnInit(): void {
    this.modalService.modalSequence$.subscribe((data: IModalData | null) => {
      if (data === null) {
        this.close();
        return;
      }
      this.isOpen = true;

      this.componentFactory = this.cfr.resolveComponentFactory(data.component);
      this.componentRef = this.modalViewContainerRef.createComponent(this.componentFactory);
      Object.entries(data.context)
        .forEach(([propName, value]) => {
          this.componentRef.instance[propName] = value;
        });
    });
  }


  @HostListener('window:keyup', ['$event.keyCode'])
  private close(code: number = 27): void {
    if (code !== 27) {
      return;
    }
    if (this.componentRef) {
      this.componentRef.destroy();
    }
    this.isOpen = false;
  }

}
