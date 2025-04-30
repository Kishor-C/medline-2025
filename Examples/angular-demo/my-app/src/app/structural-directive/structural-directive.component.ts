import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  standalone: false,
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {
  username : string | undefined = undefined; //username is fetched from the backend
  message = "Success Message";
  userRole = {type : 'admin'}
  status : boolean = false;
  counter = 0;
  fetchUser() {
    this.username = "Atharv";
    this.status = !this.status;
    this.counter++;
    if(this.counter == 1) {
      this.userRole = {type : 'admin'}
    } else if(this.counter == 2) {
      this.userRole = {type : 'user'}
    } else {
      this.counter = 0;
    }
  }
}
