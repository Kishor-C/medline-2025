import { Component } from '@angular/core';

@Component({
  selector: 'app-pure-and-impure',
  standalone: false,
  templateUrl: './pure-and-impure.component.html',
  styleUrl: './pure-and-impure.component.css'
})
export class PureAndImpureComponent {
  firstname = "Sachin";
  lastname = "Tendulkar";
  date1 = new Date();
  
  updateDate() {
    this.date1 = new Date();
  }
  updateFirstname() {
    this.firstname = 'Sourav';
  }
  
}
