import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Send Data Parent to Child Component';
  data1 = 10 ;
  data2 = 20 ;
  
  updateChild(){
    this.data1 = Math.floor(Math.random() * 10)
    this.data2 = Math.ceil(Math.random() * 10)
  }
}