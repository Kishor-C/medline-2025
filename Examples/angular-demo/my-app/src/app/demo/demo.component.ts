import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  standalone: false,
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {
  message = 'This is a Demo Component';
  person = {name : "Kishor", dob : "1988-11-24", salary : 35000};
  user1 = {username: "Alex", gender: "Male"}
  user2 = {username:"Jennifer", gender:"Female"}
}
