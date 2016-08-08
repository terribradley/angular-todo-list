import {Pipe, PipeTransform} from 'angular2/core';
import {Task} from './task.model';

@Pipe({
  name: "category",
  pure: false
})
export class CategoryPipe implements PipeTransform {
  transform(input: Task[], args) {
    var desiredCategory = args[0];
    if(desiredCategory === "Home") {
      return input.filter((task) => (task.category === "Home"));
    } else if (desiredCategory === "Work") {
      return input.filter((task) => (task.category === "Work"));
    } else if (desiredCategory === "Hobby") {
        return input.filter((task) => (task.category === "Hobby"));
    } else {
      return input;
    }
  }
}
