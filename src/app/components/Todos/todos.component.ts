import { Component, Input } from '@angular/core';
import { LogService } from 'src/app/log.service';
import { Todo } from 'src/app/shared/todo.model';

@Component({
  selector: 'todos-list',
  templateUrl: './todos.component.html',
  styleUrls:[ './todos.component.css' ],
  providers : [LogService]
})
export class TodosComponent  {
  doneStatus : boolean = false;
  @Input() todos : Todo[];

  constructor(private logService : LogService) {}

  get filterTodos() {
    return this.todos.filter(item => item.done === this.doneStatus);
  }

  get doneTodos() {
    return this.todos.filter(item => item.done === true)
  }

  get unDoneTodos() {
    return this.todos.filter(item => item.done === false)
  }
}
