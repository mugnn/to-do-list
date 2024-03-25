import { Component, OnInit } from '@angular/core';
import { DatePipePipe } from '../../pipes/date-pipe.pipe';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})

export class CalendarComponent implements OnInit{
  days: string[] = ["dom", "seg", "ter", "qua", "qui", "sex", "sab"];
  weekDays: Number[] = [];
  today: Number;
  date: string;

  constructor() {
    this.date = new DatePipePipe().transform(new Date());
    this.today = new Date().getDate();
  }

  ngOnInit(): void {
    this.getWeekDays()
  }

  getWeekDays(): void {
    let today = new Date();
    let lastMonthDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate()

    let weekDays = [];
    for (let i = 0; i < 7; i++) {
      let day = today.getDate() - today.getDay() + i;
      if (day > lastMonthDay) {
        day -= lastMonthDay
      }
      day = (day > 0) ? day : lastMonthDay + day;
      weekDays.push(day);
    }
    this.weekDays = weekDays;
  }
}
