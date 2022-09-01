import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Send Data from Child to Parent Component';

  receiveFromChild  = ""

  updateData(item : string){
    console.log(item);
    this.receiveFromChild = item
  }

}
