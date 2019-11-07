import { Todo, TodoState } from './todo.model';
import { TodosService } from './todos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  newTodoTitle = 'default value';

  constructor(private todosService: TodosService) {}

  ngOnInit() {
    this.getAllTodos();
  }

  addTodo(): void {
    this.todosService.addTodo(new Todo(this.newTodoTitle));
    this.getAllTodos();
  }

  removeTodo(todo: Todo): void {
    this.todosService.removeTodo(todo.id);
    this.getAllTodos();
  }

  changeState(todo: Todo): void {
    const updatedTodo = todo;
    switch (todo.state) {
      case TodoState.active:
        updatedTodo.state = TodoState.completed;
        break;
      case TodoState.completed:
        updatedTodo.state = TodoState.active;
        break;
    }
    this.todosService.updateTodo(todo.id, updatedTodo);
    this.getAllTodos();
  }

  getAllTodos(): void {
    this.todos = this.todosService.getAllTodos();
  }

  getActiveTodos(): void {
    this.todos = this.todosService.getAllTodos(TodoState.active);
  }

  getCompletedTodos(): void {
    this.todos = this.todosService.getAllTodos(TodoState.completed);
  }
}
