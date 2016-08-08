import {Component} from 'angular2/core';
import {Task} from './task.model';

@Component({
  selector: 'edit-task-details',
  inputs: ['task'],
  template: `
  <div class="task-form">
    <input [(ngModel)]="task.description" class="col-sm-8 input-lg task-form"/>
    <select [(ngModel)]="task.priority" #editPriority>
      <option>High</option>
      <option selected>Medium</option>
      <option>Low</option>
    </select>
  </div>
  `
})
export class EditTaskDetailsComponent {
  public task: Task;
}
