import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-input-todo',
  templateUrl: './input-todo.component.html',
  styleUrls: ['./input-todo.component.css']
})
export class InputTodoComponent implements OnInit {
  @Output() getTodoMessage = new EventEmitter()
  todo = "";
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("?????????????",this.todo)
    this.getTodoMessage.emit(this.todo)
  }

}
