import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-two',
  standalone: false,
  templateUrl: './parent-two.component.html',
  styleUrl: './parent-two.component.css'
})
export class ParentTwoComponent {
  childValue : number = 0;
  getValue(val : number) { this.childValue = val;}
}
