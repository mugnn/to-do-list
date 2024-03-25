import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownStateComponent } from '../../dropdown-state/dropdown-state.component';
import { HandleTasksService } from '../../../services/handle-tasks.service';
import { ToastrService } from 'ngx-toastr';
import { SubTasksComponent } from '../../tasks/sub-tasks/sub-tasks.component';

@Component({
  selector: 'app-task-info',
  standalone: true,
  imports: [CommonModule, DropdownStateComponent, FormsModule, SubTasksComponent],
  templateUrl: './task-info.component.html',
  styleUrl: './task-info.component.css'
})
export class TaskInfoComponent implements OnInit {
  @Input() taskContent: any;
  @Input() taskIndex: number = -1;

  updatedTitle: string = ''
  updatedDesc: string = ''
  updatedState: string = ''

  subTasks: any[] = [];

  editMode: boolean = false;

  ngOnInit(): void {
    this.resetInputValues();
    console.log(this.updatedTitle)
    console.log(this.updatedDesc)
    console.log(this.updatedState)
  }

  constructor(private tasksService: HandleTasksService, 
    private toastr: ToastrService) {}

  turnEditMode(): void {
    this.editMode = !this.editMode
    if (!this.editMode) {
      this.resetInputValues();
    }
  }

  async getEditedText() {
    if(this.updatedTitle !== '' && this.updatedDesc !== '' && this.updatedState !== '') {
      await this.tasksService.getSubTasks(this.taskIndex).then((value) => {
        this.subTasks = value;
      })
      const task = {
        title: this.updatedTitle,
        description: this.updatedDesc,
        state: this.updatedState,
        subTasks: this.subTasks
      }
      this.tasksService.updateComponent(task, this.taskIndex)
      // call update request
      console.log(this.updatedTitle)
      console.log(this.updatedDesc)
      console.log(this.updatedState)
    } else {
      console.log(this.updatedTitle)
      console.log(this.updatedDesc)
      console.log(this.updatedState)
      this.toastr.error('Please fill in all the fields.', 'ERROR', {
        timeOut: 3000,
        progressBar: true,
        progressAnimation: 'increasing'
      })
    }
  }

  getState(value: string) {
    this.updatedState = value
  }

  resetInputValues(): void {
    this.updatedTitle = this.taskContent?.title || '';
    this.updatedDesc = this.taskContent?.description || '';
    this.updatedState = this.taskContent?.state || '';
  }
}
