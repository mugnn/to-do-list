import { Component, EventEmitter, Output } from '@angular/core';
import { ModalComponent } from '../../modal/modal.component';
import { FormComponent } from '../../modal/form/form.component';

@Component({
  selector: 'app-add-remove-component',
  standalone: true,
  imports: [ModalComponent, FormComponent],
  templateUrl: './add-remove-component.component.html',
  styleUrl: './add-remove-component.component.css'
})
export class AddRemoveComponentComponent {
  @Output() toDelete = new EventEmitter<boolean>();
  deleteMode = false;
  isOpen: boolean = false;

  openModal(): void {
    this.isOpen = !this.isOpen;
  }
  resetState(): void {
    this.isOpen = !this.isOpen;
  }

  deleteComponent(): void {
    this.deleteMode= !this.deleteMode;
    this.toDelete.emit(this.deleteMode);
  }
}
