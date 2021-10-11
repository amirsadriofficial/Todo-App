import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/log.service';
import { TodoService } from 'src/app/services/Todo.service';
import { Todo } from 'src/app/shared/Todo.model';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos.component.html',
  styles: [],
  providers : [LogService,TodoService]
})
export class TodosPageComponent implements OnInit {
  todos : Todo[] = [];

  constructor(private todoService : TodoService, private logService : LogService) {}

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
    this.todoService.todosChanged.subscribe(todos => this.todos = todos)
  }
}
