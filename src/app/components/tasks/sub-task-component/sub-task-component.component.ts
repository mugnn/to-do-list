import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DropdownStateComponent } from '../../dropdown-state/dropdown-state.component';
import { HandleTasksService } from '../../../services/handle-tasks.service';

@Component({
  selector: 'app-sub-task-component',
  standalone: true,
  imports: [FormsModule, CommonModule, DropdownStateComponent],
  templateUrl: './sub-task-component.component.html',
  styleUrl: './sub-task-component.component.css'
})
export class SubTaskComponentComponent {
  @Input() subTaskValues: any;
  @Input() removeSubTasks: boolean = false;
  @Input() taskIndex: number = -1;
  @Input() subTaskIndex: number = -1;

  @Output() updatedTaskList = new EventEmitter<any>();

  constructor(private taskService: HandleTasksService) {}

  async deleteSubTask() {
    await this.taskService.deleteSubTasks(this.taskIndex, this.subTaskIndex).then(async res => {
      console.log(res)
      if (res) {
        await this.taskService.getSubTasks(this.subTaskIndex).then((taskList: any) => {
          this.updatedTaskList.emit(taskList);
        })
      }
    })
  }
}
