import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Basic of TypeScript for Angular';

 // how to define object and array type data types
 data:{name: string, age: number, isActive: boolean} = {name: "jhon", age:23, isActive: true}

 item:string [] = ["bread", "butter", "egg"]

 loopOverArray(d:string []){
  d.forEach(element => {
    console.log(element);
    
  });
 }

 functionCall(){
  this.loopOverArray(this.item)
 }

}
