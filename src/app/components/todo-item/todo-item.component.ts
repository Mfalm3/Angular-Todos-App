import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
import { TodoServiceService } from 'src/app/services/todo-service.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
@Input() todo:Todo;

  constructor(private _todoService: TodoServiceService) { }

  ngOnInit() {
  }

  setClasses(){
    let classes ={
      todo: true,
      'is-complete': this.todo.completed
    }
    return classes;
  }

  onToggle(todo){
    todo.completed = !todo.completed;
    this._todoService.markAsComplete(todo).subscribe(
    todo => console.log(todo));
  }
}
