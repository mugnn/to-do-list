import { Component, Input } from '@angular/core';
import { ModalComponent } from '../../modal/modal.component';
import { CommonModule } from '@angular/common';
import { TaskInfoComponent } from '../../modal/task-info/task-info.component';

@Component({
  selector: 'app-task-box',
  standalone: true,
  imports: [ModalComponent, CommonModule, TaskInfoComponent],
  templateUrl: './task-box.component.html',
  styleUrl: './task-box.component.css'
})
export class TaskBoxComponent {
  @Input() taskContent: any;
  @Input() taskIndex: number = 0;
  
  isOpen: boolean = false;

  openModal(): void {
    this.isOpen = !this.isOpen;
  }
  resetState(): void {
    this.isOpen = !this.isOpen;
  }
}
