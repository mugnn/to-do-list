import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-dropdown-state',
  standalone: true,
  imports: [DropdownModule, FormsModule],
  templateUrl: './dropdown-state.component.html',
  styleUrl: './dropdown-state.component.css'
})
export class DropdownStateComponent {
  @Output() state = new EventEmitter<string>();

  options = [
    { value: '1', label: 'to begin', image: './assets/to-begin-c.svg' },
    { value: '2', label: 'in progress', image: './assets/in-progress-c.svg' },
    { value: '3', label: 'done', image: './assets/solved-c.svg' }
  ];

  selectState = {value: ''};

  toEmmit(value: string) {
    this.state.emit(value)
  }
}
