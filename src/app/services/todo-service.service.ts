import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../interfaces/todo';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'Application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  private _todosUrl = 'https://jsonplaceholder.typicode.com/todos';
  
  constructor(private _http: HttpClient) { }

  getTodos():Observable<Todo[]>{
    return this._http.get<Todo[]>(this._todosUrl);
  }

  markAsComplete(todo:Todo):Observable<any>{
    let id = todo.id;
    return this._http.put<Todo>(`${this._todosUrl}/${id}`, todo, httpOptions);
  }
  addTodo(todo:Todo):Observable<any>{
    return this._http.post<Todo>(this._todosUrl, todo, httpOptions)
  }
}
