import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Todo List';
  todoList : any[] = [] ;

  addTask(item: string){
   this.todoList.push({id: this.todoList.length, name: item})
   console.log(this.todoList);
   
  }
  removeFromList(id : number){
   console.log(id);
   this.todoList = this.todoList.filter(item => item.id == id) 
  }
}