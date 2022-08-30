import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Important Event in Angular';
  counter = 1 
  getName(name : string, time: number){
    alert("function called " + name + " Time " + time)
  }

  myCounter(): Number{
      this.counter = this.counter + 1 
      return this.counter
  }

  getData(val : string){
    console.warn(val);
    
  }

}
