import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'; 
import { FormServiceService } from '../../../services/form-service.service';
import { DropdownModule } from 'primeng/dropdown';
import { DropdownStateComponent } from '../../dropdown-state/dropdown-state.component';

@Component({
  selector: 'app-form',
  standalone:true,
  imports: [FormsModule, DropdownModule, DropdownStateComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  options = [
    { value: '1', label: 'to begin', image: './assets/to-begin-c.svg' },
    { value: '2', label: 'in progress', image: './assets/in-progress-c.svg' },
    { value: '3', label: 'done', image: './assets/solved-c.svg' }
  ];
  

  @Output() closeForm = new EventEmitter<boolean>();

  inputTitle: string = '';
  inputDesc: string = '';
  selectState = {value: ''};

  constructor(private sendFormService: FormServiceService, private toastr: ToastrService) {}

  sendForm() {
    if (this.inputTitle === '' || this.inputDesc === '' || this.selectState.value === '') {
      this.toastr.error('Please fill in all the fields.', 'ERROR', {
        timeOut: 3000,
        progressBar: true,
        progressAnimation: 'increasing'
      })
    } else {
      const formData = {
        title: this.inputTitle,
        description: this.inputDesc,
        state: this.selectState.value,
        subTasks: []
      }

      this.inputTitle = this.inputDesc = this.selectState.value = '';

      this.closeForm.emit();
      this.sendFormService.getSendData(formData);
    }
  }

  getState(value: string): void {
    this.selectState.value = value;
  }
}
