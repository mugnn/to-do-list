import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {
  
  constructor(private http: HttpClient) {}

  private taskListSubject = new Subject<any>();
  taskList$ = this.taskListSubject.asObservable();

  getSendData(formData: any) {
    this.http.post(environment.loadTask, formData).subscribe(isCompleted => {
      console.log(isCompleted)
      if (isCompleted) {
        this.http.get(environment.getTasks).subscribe((taskList: any) => {
          this.taskListSubject.next(taskList)
        })
      }
    })
    console.log(formData)
  }

  async getTasks(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(environment.getTasks).subscribe((taskList: any) => {
        this.taskListSubject.next(taskList)
        resolve(taskList)
      }, error => {
        reject(error)
      })
    })
  }
} 
