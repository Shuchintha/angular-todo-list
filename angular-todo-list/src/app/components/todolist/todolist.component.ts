import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  list = [
    {index:1,msg:"he"},
    {index:2,msg:"ho"}];
  constructor() { }

  ngOnInit(): void {
  }
  getTodo(todo: any) {
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++",todo)
    this.list.unshift({index:this.list.length + 1,msg: todo})
    console.log("+array",this.list)

  }
  getRemoveIndex(index:any) {
    console.log("in remove2",this.list)

    this.list = this.list.filter((item,i)=>{
      if(item.index === index) return false;
      return true;
    })
  }
}
