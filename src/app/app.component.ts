import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Loop in Angular';
  users = ['Messi', "Ronaldo", "Neymar", "Ramos", "DiMaria"]

  usersDetails = [{
    name: 'Messi',
    email: 'messi@gmail.com',
    phone:8888
  },{
    name: 'Ronaldo',
    email: 'ronaldo@yahoo.com',
    phone:11111
  },{
    name: 'Neymar',
    email: 'neymar@hotmail.com',
    phone:11111
  },{
    name: 'Ramos',
    email: 'ramos@yahoo.com',
    phone:11119
  }]
}
