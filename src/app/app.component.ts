import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Resusable Component';

  userDeatils = [
    {
      name: 'Anil', email: "anil@test.com"
    },
    {
      name: 'Rahul Sidhu', email: "sidhu@test.com"
    },
    {
      name: 'Bhaskar Verma', email: "bhaskar@test.com"
    },
    {
      name: 'Pere ', email: "peter@test.com"
    }
  ]
}
