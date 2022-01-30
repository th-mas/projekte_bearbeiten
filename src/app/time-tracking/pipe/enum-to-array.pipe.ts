import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumToArray'
})
export class EnumToArrayPipe implements PipeTransform {

  transform(enumObj: Object): string[] {
    return Object.keys(enumObj);
  }
}
