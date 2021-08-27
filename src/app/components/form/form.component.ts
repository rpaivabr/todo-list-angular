import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @ViewChild('todoTitle') todoTitle!: ElementRef<HTMLInputElement>;
  @Output() add: EventEmitter<string> = new EventEmitter<string>();

  handleAdd(): void {
    this.add.emit(this.todoTitle.nativeElement.value);
    this.todoTitle.nativeElement.value = '';
  }
}
