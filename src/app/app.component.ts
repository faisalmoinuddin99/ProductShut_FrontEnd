import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular Basic Pipes';

 today = Date()

 convertToUppercase(item : string){
  return item.toUpperCase()
 }
}
