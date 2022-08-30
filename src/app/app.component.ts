import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Nested   Loop in Angular';
  
  usersDetails = [{
    name: 'Messi',
    email: 'messi@gmail.com',
    phone:8888,
    socialAccounts: ["Facebook","Twitter","Instagram"]
  },{
    name: 'Ronaldo',
    email: 'ronaldo@yahoo.com',
    phone:11111,
    socialAccounts: ["Whatsapp","Twitter","Instagram"]
  },{
    name: 'Neymar',
    email: 'neymar@hotmail.com',
    phone:11111,
    socialAccounts: ["Whatsapp","Instagram"]

  },{
    name: 'Ramos',
    email: 'ramos@yahoo.com',
    phone:11119,
    socialAccounts: ["Whatsapp","Instagram","Snapchat"]
  }]
}
