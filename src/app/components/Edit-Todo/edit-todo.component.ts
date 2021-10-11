import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'edit-todo',
  templateUrl: './edit-todo.component.html',
  styles: []
})
export class EditTodoComponent {
  @Input('text') textTodo : string;
  @Output() edit = new EventEmitter<string>();

  editHandler() {
    if(this.textTodo.length > 0) {
      this.edit.emit(this.textTodo);
    }
  }
}
