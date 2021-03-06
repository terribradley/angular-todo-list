import {Component, EventEmitter} from 'angular2/core';
import { TaskComponent } from './task.component';
import { Task } from './task.model';
import { EditTaskDetailsComponent } from './edit-task-details.component';
import { NewTaskComponent } from './new-task.component';
import { DonePipe } from './done.pipe';
import { CategoryPipe } from './category.pipe';
import { Category } from './category.model';
import { NewCategoryComponent } from './new-category.component';

@Component({
  selector: 'task-list',
  inputs: ['taskList', 'categoryList'],
  outputs: ['onTaskSelect'],
  pipes: [DonePipe, CategoryPipe],
  directives: [TaskComponent, EditTaskDetailsComponent, NewTaskComponent, NewCategoryComponent],
  template: `
    <select (change)="filterOnDone($event.target.value)" class="filter">
      <option value="all">Show All</option>
      <option value="done">Show Done</option>
      <option value="notDone" selected="selected">Show Not Done</option>
    </select>
    <select (change)="filterOnCategory($event.target.value)" class="filter">
      <option *ngFor="#currentCategory of categoryList">{{currentCategory.name}}</option>
      <option selected>All</option>
    </select>
    <new-category (onSubmitNewCategory)="createCategory($event)"></new-category>
    <task-display *ngFor="#currentTask of taskList | done:filterDone | category:filterCategory " (click)="taskClicked(currentTask)"
    [class.selected]="currentTask === selectedTask"
    [task]="currentTask">
    </task-display>
    <edit-task-details
    *ngIf="selectedTask"
    [categoryList]="categoryList"
    [task]="selectedTask">
    </edit-task-details>
    <new-task [categoryList]="categoryList" (onSubmitNewTask)="createTask($event)"></new-task>
    `
})
export class TaskListComponent {
  public taskList: Task[];
  public categoryList: Category[];
  public selectedTask: Task;
  public onTaskSelect: EventEmitter<Task>;
  public filterDone: string = "notDone";
  public filterCategory: string = "All";
  constructor() {
    this.onTaskSelect = new EventEmitter();
  }
  taskClicked(clickedTask: Task): void {
    console.log('child', clickedTask);
    this.selectedTask = clickedTask;
    this.onTaskSelect.emit(clickedTask);
  }
  createTask(taskProperties: string[]): void {
    this.taskList.push(
      new Task(taskProperties[0], taskProperties[1], taskProperties[2], this.taskList.length)
    );
  }
  createCategory(categoryName: string): void {
    this.categoryList.push(
      new Category(categoryName)
    );
  }
  filterOnDone(filterOption) {
    this.filterDone = filterOption;
    console.log(this.filterDone);
  }
  filterOnCategory(filterOption) {
    this.filterCategory = filterOption;
    console.log(this.filterCategory);
  }
}
