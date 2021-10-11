import { Component, Input } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/shared/todo.model';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent {
  editStatus : boolean = false;
  @Input('todoItem') todo : Todo;

  constructor(private todoService : TodoService) {}

  deleteTodo(key) {
    this.todoService.delete(key)
  }

  toggleTodo(key) {
    this.todoService.toggle(key);
  }

  editHandler(key,text) {
    // this.edit.emit({ key , text});
    this.editStatus = false;
  }
}
