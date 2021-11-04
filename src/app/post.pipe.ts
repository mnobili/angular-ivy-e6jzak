import { Pipe, PipeTransform } from '@angular/core';
import { Posts } from '../posts';

@Pipe({
  name: 'post'
})
export class PostPipe implements PipeTransform {

  transform(post: Posts, args?: any): any {
    return Posts;
  }

}