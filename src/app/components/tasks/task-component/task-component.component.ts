import { Component, Input } from '@angular/core';
import { ModalComponent } from '../../modal/modal.component';
import { CommonModule } from '@angular/common';
import { TaskInfoComponent } from '../../modal/task-info/task-info.component';

@Component({
  selector: 'app-task-component',
  standalone: true,
  imports: [ModalComponent, CommonModule, TaskInfoComponent],
  templateUrl: './task-component.component.html',
  styleUrl: './task-component.component.css'
})
export class TaskComponentComponent {
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
