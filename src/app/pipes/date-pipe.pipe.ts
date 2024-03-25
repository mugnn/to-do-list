import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe',
  standalone: true
})
export class DatePipePipe implements PipeTransform {

  transform(value: Date): string {
    const weekday = value.toLocaleDateString('pt-BR', { weekday: 'long' });
    const month = value.toLocaleDateString('pt-BR', { month: 'long' });
    const day = value.getDate();
    const year = value.getFullYear();
    return `${weekday}, ${month} ${day}, ${year}`;
  }
}
