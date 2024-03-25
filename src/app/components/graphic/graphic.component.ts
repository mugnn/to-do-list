import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-graphic',
  standalone: true,
  imports: [],
  templateUrl: './graphic.component.html',
  styleUrl: './graphic.component.css'
})
export class GraphicComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    Chart.register(...registerables);
    this.render()
  }

  render() {
    const data = {
      labels: ['solved', 'in progress', 'to begin'],
      datasets: [{
        data: [10, 20, 30],
        backgroundColor: [
          'rgb(98, 162, 103)',
          'rgb(245, 186, 71)',
          'rgb(35, 168, 196)'
        ]
      }]
    };
    new Chart('pie', {
      type: 'pie',
      data: data
    })
  }
}
