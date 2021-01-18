import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from './modal.service';
import { ModalComponent } from './modal.component';



@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule
  ],
  exports: [ModalComponent],
  providers: [
    ModalService
  ]
})
export class ModalModule { }
