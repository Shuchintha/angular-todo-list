import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-item-todo',
  templateUrl: './item-todo.component.html',
  styleUrls: ['./item-todo.component.css']
})
export class ItemTodoComponent implements OnInit {
  @Input() todo:any;
  @Input() index:any;
  @Output() getRemoveTodo = new EventEmitter();
  isDone:boolean;
  currentStyles: {};

  
  constructor() { }

  ngOnInit(): void {
    this.isDone = false;
  }
  todoDone() {
    this.isDone = !this.isDone;
    this.currentStyles = {
      'text-decoration': this.isDone ? "line-through":"none",
    }
  }

  todoRemove(){
    console.log("in remove")
    this.isDone = false;
    this.getRemoveTodo.emit(this.todo.index)
  }
}
