import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo, TodoPostRequest } from '../todo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = 'http://localhost:3000/todos';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);
  }

  getTodoById(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.url}/${id}`);
  }

  postTodo(todoToCreate: TodoPostRequest): Observable<Todo> {
    return this.http.post<Todo>(this.url, todoToCreate);
  }

  putTodo(todoToUpdate: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.url}/${todoToUpdate.id}`, todoToUpdate);
  }

  deleteTodo(todoId: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${todoId}`);
  }

}
