import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  todoArray:string[] = [];
  todos = "";

  addTodo(value:string) {
    this.todoArray.push(value);
    console.log(this.todos);
  }
}
