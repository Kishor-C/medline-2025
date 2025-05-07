import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-todo-add',
  standalone: false,
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.css'
})
export class TodoAddComponent {
  private _builder = inject(FormBuilder);
  todoForm = this._builder.group({
    task : [], date : []
  });
  // a function to add the task
  addTask() {
    let todos = sessionStorage.getItem("todos");
    if(todos == null) {
      sessionStorage.setItem("todos", JSON.stringify([]));
    } else {
      let items = JSON.parse(todos);
      items.push(this.todoForm.value);
      sessionStorage.setItem("todos", JSON.stringify(items));
    }
    console.log(todos);
    // let items = undefined;
    // // if(todos == undefined || todos == null) {
    // //   items = []; // initially an empty array
    // // }
    // // else {
    // //   items = JSON.parse(todos); // if you have json string convert to js array
    // // }
    // // items.push(this.todoForm.value);
    // sessionStorage.setItem("todos", JSON.stringify(items))
    this.todoForm.reset();
  }

}
