import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from 'src/app/services/todo-service.service';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  private todos: Todo[];

  constructor(private _todosService: TodoServiceService) { }

  ngOnInit() {
    this._todosService.getTodos().subscribe(response => this.todos = response.splice(0, 10))
  }

  addTodo(todo:Todo){
    this._todosService.addTodo(todo).subscribe(todo => this.todos.push(todo))
  }

}
