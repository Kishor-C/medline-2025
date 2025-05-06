import { Component } from '@angular/core';

@Component({
  selector: 'app-tdf-demo',
  standalone: false,
  templateUrl: './tdf-demo.component.html',
  styleUrl: './tdf-demo.component.css'
})
export class TdfDemoComponent {
  firstname : string = "";
  lastname : string = "";

  handleSubmit(value: any) {
    console.log(this.firstname, this.lastname);
    // we can send these data to the backend
  }
}
