import { Component } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'add-todo',
  templateUrl: './add-todo.component.html',
  styles: [],
  providers : []
})
export class FormAddTodoComponent {
  textTodo : string = '';

  constructor(private todoService : TodoService) {}

  onSubmit() {
    if(this.textTodo.length > 0) {
      this.todoService.add(this.textTodo);
      this.textTodo = '';
    }
  }
}
