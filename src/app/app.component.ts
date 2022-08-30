import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Get Input Box Value';

  displayValue: string = ''
  getValue(val: string){
    console.log(val);
    this.displayValue = val ;
  }

}
