import { Todo, TodoState } from './todo.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todo0 = new Todo('Buy something');
  todo1 = new Todo('Cook this something');
  todo2 = new Todo('Buy another thing');
  todo3 = new Todo('Study angular');
  todo4 = new Todo('Forget about the rest');

  mockTodos: Todo[] = [this.todo0, this.todo1, this.todo2, this.todo3, this.todo4];

  constructor() {}

  addTodo(todo: Todo): void {
    const newMockTodos = [...this.mockTodos, todo];
    this.mockTodos = newMockTodos;
  }

  removeTodo(id: string): void {
    this.mockTodos = this.mockTodos.filter((todo) => todo.id !== id);
  }

  updateTodo(id: string, todo: Todo) {
    let toUpdateTodo = this.mockTodos.find((td) => td.id === id);
    toUpdateTodo = todo;
    const remainingTodos = this.mockTodos.filter((td) => td.id !== id);
    this.mockTodos = [...remainingTodos, toUpdateTodo];
  }

  getAllTodos(filterOption: TodoState = null): Todo[] {
    switch (filterOption) {
      case TodoState.active:
        return this.mockTodos.filter((todo) => todo.state === TodoState.active);
      case TodoState.completed:
        return this.mockTodos.filter((todo) => todo.state === TodoState.completed);
      default:
        return this.mockTodos;
    }
  }
}
