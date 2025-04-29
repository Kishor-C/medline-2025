import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFormatter',
  standalone: false
})
export class NameFormatterPipe implements PipeTransform {

  transform(value: string, args?: string): unknown {
    let gender = args?.charAt(0).toLowerCase();
    if(gender == 'm') {
      return 'Mr. '+value;
    } else if(gender == 'f'){
      return 'Ms. '+value;
    }
     return value.toUpperCase();
  }
}
/*
  <div>{{user1.username | nameFormatter : user1.gender}}</div>
  <div>{{user2.username | nameFormatter : user2.gender}}</div>
  <div>{{person.name | nameFormatter}}
*/
