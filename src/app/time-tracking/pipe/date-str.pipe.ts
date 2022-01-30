import { Pipe, PipeTransform } from '@angular/core';
import {DateRepresentation} from "../data-access/entities/DateRepresentation";

@Pipe({
  name: 'dateStr'
})
export class DateStrPipe implements PipeTransform {

  transform(value: DateRepresentation, fmt = 'full'): string {
    if (value) {
      switch (fmt) {
        case 'full':
          return `${value.day}.${value.month}.${value.year}`;
        default:
          return `${value.day}.${value.month}`;
      }
    }
    return '';
  }

}
