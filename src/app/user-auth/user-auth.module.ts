import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';



@NgModule({

  // used to register components which belongs to user-auth module
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule
  ],

  // exports is used to expose this component publicly to all other modules
  exports:[
    LoginComponent
  ]
})
export class UserAuthModule { }
