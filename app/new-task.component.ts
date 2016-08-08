import {Component, EventEmitter} from 'angular2/core';
import {Task} from './task.model';
import {Category} from './category.model';

@Component({
  selector: 'new-task',
  inputs: ['categoryList'],
  outputs: ['onSubmitNewTask'],
  template: `
  <div class="task-form">
    <h3>Create Task:</h3>
    <input placeholder="Description" class="col-sm-8 input-lg" #newDescription>
    <select #newPriority>
      <option>High</option>
      <option selected>Medium</option>
      <option>Low</option>
    </select>
    <select #newCategory>
      <option *ngFor="#category of categoryList">{{category.name}}</option>
    </select>
    <button (click)="addTask(newDescription, newPriority, newCategory)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})

export class NewTaskComponent {
  public onSubmitNewTask: EventEmitter<String[]>;
  constructor(){
    this.onSubmitNewTask = new EventEmitter();
  }
  addTask(userDescription: HTMLInputElement, userPriority: HTMLInputElement, userCategory: HTMLInputElement) {
    this.onSubmitNewTask.emit([userDescription.value, userPriority.value, userCategory.value]);
    userDescription.value = "";
  }
}
