const uuidv4 = require('uuid/v4');

export enum TodoState {
  active,
  completed,
}

export class Todo {
  public id: string;
  public state: TodoState;
  public title: string;

  constructor(title: string) {
    this.id = uuidv4();
    this.state = TodoState.active;
    this.title = title;
  }
}
