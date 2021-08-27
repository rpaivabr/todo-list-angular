import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() todos: Todo[] = [];
  @Output() update: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  handleChange(event: any, todo: Todo): void {
    const done = event.target.checked;
    const todoToUpdate = { ...todo, done };
    this.update.emit(todoToUpdate);
  }

  handleDelete(id: number): void {
    this.delete.emit(id);
  }
}
