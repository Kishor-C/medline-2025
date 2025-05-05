import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input({transform : capitalize})
  username = "Guest";

  @Input({required : true})
  product : string | undefined = undefined;
}
function capitalize(value : string) {
  return value.toUpperCase();
}