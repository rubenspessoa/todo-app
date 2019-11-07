import { Todo, TodoState } from '../todo.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;

  constructor() {}

  ngOnInit() {}

  isActive(): boolean {
    return this.todo.state === TodoState.active;
  }
}
