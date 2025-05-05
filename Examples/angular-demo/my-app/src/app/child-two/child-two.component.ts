import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-two',
  standalone: false,
  templateUrl: './child-two.component.html',
  styleUrl: './child-two.component.css'
})
export class ChildTwoComponent {
  @Output()
  numberEmitter:EventEmitter<number> = new EventEmitter<number>();
  counter : number = 0;
  // function to emit the value
  increase() {
    this.numberEmitter.emit(++this.counter);
  }
}
