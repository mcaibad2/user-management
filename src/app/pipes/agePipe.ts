import * as moment from 'moment';
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'age'})
export class AgePipe implements PipeTransform {
  transform(value: string): number {
    let age;
    if (value) {
      age = moment().diff(moment(value), 'years');
    } else {
      age = 0;
    }
    return age;
  }
}
