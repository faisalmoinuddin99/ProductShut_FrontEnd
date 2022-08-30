import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  data = "Step by step process"
  counter = 1 
  getName(name : string, time: number){
    alert("function called " + name + " Time " + time)
  }

  myCounter(): Number{
      this.counter = this.counter + 1 
      return this.counter
  }
}
