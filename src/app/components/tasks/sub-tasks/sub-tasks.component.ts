import { Component, Input, OnInit } from '@angular/core';
import { HandleTasksService } from '../../../services/handle-tasks.service';
import { NgClass, CommonModule } from '@angular/common';
import { SubTaskComponentComponent } from '../sub-task-component/sub-task-component.component';
import { SubTaskLabelComponent } from '../sub-task-label/sub-task-label.component';

@Component({
  selector: 'app-sub-tasks',
  standalone: true,
  imports: [NgClass, CommonModule, SubTaskComponentComponent, SubTaskLabelComponent],
  templateUrl: './sub-tasks.component.html',
  styleUrl: './sub-tasks.component.css'
})
export class SubTasksComponent implements OnInit {
  @Input() taskIndex: number = -1;

  deleteMode: boolean = false;
  subTaskList: any[] = [];

  insertTaskMode: boolean = false;
  removeTaskMode: boolean = false;

  constructor(private taskService: HandleTasksService) {}

  ngOnInit(): void {
    this.getSubTasks()
  }

  async getSubTasks() {
    await this.taskService.getSubTasks(this.taskIndex).then((value) => {
      this.subTaskList = value
      console.log(this.subTaskList)
    }).catch(error => {
      console.error(error)
    });
  }

  toDelete(): void {
    this.deleteMode = !this.deleteMode
    console.log(this.deleteMode)
  }

  newListValues(newList: any): void {
    this.subTaskList = newList;
  }

  resetInsertMode(reset: boolean): void {
    this.insertTaskMode = reset;
  }

  insertNewTask(): void {
    const subTaskContent = {
      title: "insert title",
      state: '0',
    }
    this.subTaskList.push(subTaskContent)
    this.insertTaskMode = !this.insertTaskMode
  }

  removeTasks(): void {
    this.removeTaskMode = !this.removeTaskMode
  }
}
