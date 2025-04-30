import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impure',
  standalone: false,
  pure : false
})
export class ImpurePipe implements PipeTransform {

  transform(value: string): unknown {
    console.log('---transform()---');
    return value.toUpperCase();
  }

}
