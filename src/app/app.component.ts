import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Property Binding';

 name : string = "peter"

 disable: boolean = true 

 changeDisbale(){
  if(this.disable === true){
    this.disable = false
  }else {
    this.disable = true
  }
 }
}
