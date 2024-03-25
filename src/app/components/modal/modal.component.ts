import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgClass],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent{
  @Input() isOpen: boolean = false;
  @Input() modalContent: TemplateRef<any> | undefined;
  @Output() reset = new EventEmitter<boolean>();

  closeWindow(): void {
    this.isOpen = !this.isOpen
    this.reset.emit();
  }
}
