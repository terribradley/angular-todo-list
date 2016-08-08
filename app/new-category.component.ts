import {Component, EventEmitter} from 'angular2/core';
import {Category} from './category.model';

@Component({
  selector: 'new-category',
  outputs: ['onSubmitNewCategory'],
  template: `
    <div>
      <input placeholder="New Category Name" class="input-lg" #newCategory>
      <button (click)="addCategory(newCategory)" class="btn-success btn-lg">Add Category</button>
    </div>
  `
})

export class NewCategoryComponent {
  public onSubmitNewCategory: EventEmitter<string>;
  constructor() {
    this.onSubmitNewCategory = new EventEmitter();
  }
  addCategory(newCategoryInput: HTMLInputElement) {
    this.onSubmitNewCategory.emit(newCategoryInput.value);
    newCategoryInput.value = "";
  }
}
