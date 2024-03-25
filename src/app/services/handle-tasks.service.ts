import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { FormServiceService } from './form-service.service';

@Injectable({
  providedIn: 'root'
})
export class HandleTasksService {

  constructor(private http: HttpClient,
    private formService: FormServiceService) {}

  async deleteComponent(componentNumber: Number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.delete(`${environment.deleteTask}/${componentNumber}`).subscribe(res => {
        if (res) {
          this.http.get(environment.getTasks).subscribe((taskList: any) => {
            resolve(taskList);
          }, error => {
            reject(error)
          })
        } else {
          resolve(null)
        }
      }, error => {
        reject(error)
      })
    })
  }

  updateComponent(task: any, taskIndex: number): void {
    this.http.put(`${environment.updateTask}/${taskIndex}`, task).subscribe(res => {
      if (res) {
        this.formService.getTasks();
        console.log('apareceu la')
      }
    }) 
  }

  async setSubTask(task: any, taskIndex: number): Promise<any> {
    return new Promise((resolve, reject) => {
      const body = {
        task: task,
        taskIndex: taskIndex
      }
      this.http.post(environment.loadSubTask, body).subscribe(res => {
        resolve(res)
      }, error => {
        reject(error);
      })
    })
  }

  async getSubTasks(taskIndex: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(`${environment.getSubTasks}/${taskIndex}`).subscribe((taskList: any) => {
        resolve(taskList);
      }, error => {
        reject(error);
      })
    })
  }

  async deleteSubTasks(taskIndex: number, subTaskIndex: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.delete(`${environment.deleteSubTask}/${taskIndex}/${subTaskIndex}`).subscribe(res => {
        resolve(res);
      }, error => {
        reject(error);
      })
    })
  }
}
