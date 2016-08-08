import {Pipe, PipeTransform} from 'angular2/core';
import {Task} from './task.model';

@Pipe({
  name: "category",
  pure: false
})
export class CategoryPipe implements PipeTransform {
  transform(input: Task[], args) {
    var desiredCategory = args[0];
    if(desiredCategory === "All") {
      return input;
    } else {
      return input.filter((task) => (task.category === desiredCategory));
    }
  }
}
