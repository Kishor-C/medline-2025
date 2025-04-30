import { Component } from '@angular/core';

@Component({
  selector: 'app-test2',
  standalone: false,
  templateUrl: './test2.component.html',
  styleUrl: './test2.component.css'
})
export class Test2Component {
  isDisabled : boolean = false;
  username : string = "";
  update() {
    this.isDisabled = !this.isDisabled;
  }
}
