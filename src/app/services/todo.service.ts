import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from '../log.service';
import { Todo } from '../shared/Todo.model';

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  todosChanged = new EventEmitter<Todo[]>();
  todos : Todo[] = [];

  constructor(private logService : LogService) { }

  getTodos() {
    return this.todos;
  }

  add(todo) {
      this.logService.log('add todo')
      this.todos.push(new Todo(Date.now() , todo , false));
  }

  delete(key) {
    let indexTodo = this.todos.findIndex(todo => todo.key === key);
    this.todos.splice(indexTodo,1);
  }

  toggle(key) {
    let indexTodo = this.todos.findIndex(todo => todo.key === key);
    this.todos[indexTodo].toggle()
  }

  edit({ key , text }) {
    let indexTodo = this.todos.findIndex(todo => todo.key === key);
    this.todos[indexTodo].text = this.todos[indexTodo].text;
  }
}
