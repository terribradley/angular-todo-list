import { Component, EventEmitter} from 'angular2/core';
import { TaskListComponent } from './task-list.component';
import { Task } from './task.model';
import { Category } from './category.model';

@Component({
  selector: 'my-app',
  directives: [TaskListComponent],
  template: `
    <div class="container">
      <h1>Todo</h1>
      <task-list
        [categoryList]="categories"
        [taskList]="tasks"
        (onTaskSelect)="taskWasSelected($event)">
      </task-list>
    </div>
  `
})
export class AppComponent {
  public tasks: Task[];
  public categories: Category[];
  constructor() {
    this.tasks = [
    new Task("Create To-Do List App", "Low", "Work", 0),
    new Task("learn King Fu", "High", "Hobby", 1),
    new Task("Rewatch all of the Lord of the Rings movies", "Medium", "Home", 2),
    new Task("Do the Laundry", "Low", "Home", 3)
    ];
    this.categories = [
      new Category("Work"),
      new Category("Hobby"),
      new Category("Home"),
      new Category("School")
    ];
  }
  taskWasSelected(clickedTask: Task): void {
    console.log('parent', clickedTask);
  }
}
