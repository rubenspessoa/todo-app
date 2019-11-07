import { TodoComponent } from './todo/todo.component';
import { TodosComponent } from './todos.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodosComponent, TodoComponent],
  imports: [CommonModule, FormsModule],
  exports: [TodosComponent],
})
export class TodosModule {}
