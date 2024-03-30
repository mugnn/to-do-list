import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService implements OnInit {
  taskList: any[] = [];

  constructor() {}

  ngOnInit(): void {
    
  }
}
