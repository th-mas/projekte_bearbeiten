import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumStr'
})
export class EnumStrPipe implements PipeTransform {

  transform(value: string): string {
    if (value) {
      const split = value.split('_');
      return split.map<string>(v => v.toUpperCase().substring(0, 1) + v.toLowerCase().substring(1)).join(' ');
    }
    return '';
  }

}
