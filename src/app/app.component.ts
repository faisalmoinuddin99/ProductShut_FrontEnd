import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Basic Form';
  formData: any ={};
  display = true ;

  getData(data:NgForm){
    console.log(data);
    this.formData =  data
  }
  toggle(){
    this.display = !this.display
  }
}