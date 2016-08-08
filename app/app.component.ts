import { Component, EventEmitter} from 'angular2/core';
import { TaskListComponent } from './task-list.component';
import { Task } from './task.model';

@Component({
  selector: 'my-app',
  directives: [TaskListComponent],
  template: `
    <div class="container">
      <h1>Todo</h1>
      <task-list
        [taskList]="tasks"
        (onTaskSelect)="taskWasSelected($event)">
      </task-list>
    </div>
  `
})
export class AppComponent {
  public tasks: Task[];
  constructor() {
    this.tasks = [
    new Task("Create To-Do List App", "Low", "Work", 0),
    new Task("learn King Fu", "High", "Hobby", 1),
    new Task("Rewatch all of the Lord of the Rings movies", "Medium", "Home", 2),
    new Task("Do the Laundry", "Low", "Home", 3)
    ];
  }
  taskWasSelected(clickedTask: Task): void {
    console.log('parent', clickedTask);
  }
}
