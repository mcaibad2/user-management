import {Pipe} from '@angular/core';

@Pipe({name: 'avatar'})
export class AvatarPipe {
  transform(value: string): string {
    let imageUrl = '';
    if (value && value.startsWith('public/images')) {
      imageUrl = `http://lab.wappier.com/${value}`;
    } else {
      imageUrl = value;
    }
    return imageUrl;
  }
}
