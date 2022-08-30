import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Style Binding';
  color = 'red'
  bgColor='yellow'

  updateColor(){
    if(this.color === 'red'){
      this.color = 'blue'
      this.bgColor= 'orange'
    }else{
      this.color= 'red'
      this.bgColor= 'green'
    }
  }
}