import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { Todo, TodoPostRequest } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private api: ApiService) {}

  get doneTodosLength(): number {
    const notDoneTodos: Todo[] = this.todos.filter(todo => !todo.done);
    return notDoneTodos.length;
  }

  ngOnInit(): void {
    this.getTodos();
  }

  addTodo(title: string): void {
    const newTodo: TodoPostRequest = {
      title,
      done: false
    }
    this.saveTodo(newTodo);
  }
  
  handleDelete(id: number): void {
    this.api.deleteTodo(id).subscribe(() => this.getTodos());
  }

  handleToggleDone(todoToUpdate: Todo): void {
    this.api.putTodo(todoToUpdate).subscribe(() => this.getTodos());
  }

  private getTodos(): void {
    this.api.getTodos().subscribe(todos => this.todos = todos);
  }

  private saveTodo(todo: TodoPostRequest): void {
    this.api.postTodo(todo).subscribe(() =>  this.getTodos());
  }

}
