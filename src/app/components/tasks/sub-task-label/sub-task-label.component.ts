import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HandleTasksService } from '../../../services/handle-tasks.service';
import { NgClass, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-sub-task-label',
  standalone: true,
  imports: [NgClass, CommonModule, FormsModule],
  templateUrl: './sub-task-label.component.html',
  styleUrl: './sub-task-label.component.css'
})
export class SubTaskLabelComponent {
  @Input() subTaskIndex: number = -1;
  @Input() insertMode: boolean = false;
  @Output() updatedTaskList = new EventEmitter<any>();
  @Output() resetInsertMode = new EventEmitter<boolean>();


  subTaskValues = {
    title: 'insert title',
    state: '0'
  }


  constructor (private taskService: HandleTasksService) {}


  async submitSubtask() {
    console.log(this.subTaskValues.title)
    console.log(this.subTaskValues.state)
    const subTaskContent = {
      title: this.subTaskValues.title,
      state: this.subTaskValues.state
    }
    await this.taskService.setSubTask(subTaskContent, this.subTaskIndex).then(async res => {
      if(res) {
        await this.taskService.getSubTasks(this.subTaskIndex).then((taskList: any) => {
          this.updatedTaskList.emit(taskList);
        })
      }
    }).catch(error => {
      console.error(error)
    });
    this.resetInsertMode.emit(false);
    this.insertMode = !this.insertMode;
  }
}
