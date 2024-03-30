import { AddRemoveComponentComponent } from './add-remove-component/add-remove-component.component';
import { TaskBoxComponent } from './task-box/task-box.component';
import { FormServiceService } from '../../services/form-service.service';
import { HandleTasksService } from '../../services/handle-tasks.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [AddRemoveComponentComponent, TaskBoxComponent, CommonModule, NgClass],
})

export class TasksComponent implements OnInit {
  taskList: any[] = [];
  deleteMode: boolean = false;

  constructor(private getFormService: FormServiceService, 
    private handleTasks: HandleTasksService) {};

  ngOnInit(): void {
    this.getFormService.getTasks().then((result) => {
      this.taskList = result;
    }).catch((error) => {
      console.error(error);
    })
    this.getFormService.taskList$.subscribe((taskList: any) => {
      this.taskList = taskList;
    })
  }

  toDelete(): void {
    this.deleteMode = !this.deleteMode
  }

  async deleteComponent(component: Number) {
    const index = parseInt(component + '')
    this.taskList.splice(index, 1)
    try {
      const list = this.handleTasks.deleteComponent(component);
      if (this.taskList.length === 0) {
        this.deleteMode = false;
      } else {
        list.then((result) => {
          this.taskList = result;
        }).catch((error) => {
          console.error(error);
        })
      }
    } catch (error) {
      console.error(error);
    }
  }
}
