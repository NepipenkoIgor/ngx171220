import { Injectable, Type } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface IModalData {
  component: Type<any>;
  context: any;
}


@Injectable()
export class ModalService {
  private modalSequence$$: Subject<IModalData | null> = new Subject();

  constructor() {
    this.modalSequence$$.next();
  }

  public open(data: IModalData): void {
    this.modalSequence$$.next(data);
  }

  public get modalSequence$(): Observable<IModalData | null> {
    return this.modalSequence$$.asObservable();
  }

  public close(): void {
    this.modalSequence$$.next(null);
  }
}
