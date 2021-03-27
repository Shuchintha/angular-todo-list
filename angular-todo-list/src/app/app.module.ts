import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { InputTodoComponent } from './components/input-todo/input-todo.component';
import { ItemTodoComponent } from './components/item-todo/item-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    InputTodoComponent,
    ItemTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
