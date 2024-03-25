import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalendarComponent } from "./components/calendar/calendar.component";
import { TasksComponent } from './components/tasks/tasks.component';
import { GraphicComponent } from './components/graphic/graphic.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CalendarComponent, TasksComponent, GraphicComponent]
})

export class AppComponent {
  title = 'to-do-list';
}
