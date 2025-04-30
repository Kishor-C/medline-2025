import { Component, ViewEncapsulation } from '@angular/core';

/*
  ShadowDom is not supported in all the browsers
  but it completely guarantees the view encaspulation
  however, Emulated is not 100% prevents the style
  leak, use ShadowDom if in case you are building
  an UI library
*/
@Component({
  selector: 'app-for-demo',
  standalone: false,
  templateUrl: './for-demo.component.html',
  styleUrl: './for-demo.component.css',
  encapsulation : ViewEncapsulation.None
})
export class ForDemoComponent {
  products : string[] = ["Laptop", "TV", "Mobile", "Cricket Kit", 
    "Carrom Board"
  ];
  users : any[] = [
    {id: 10, name:"Atharv", gender:"M", dob: "2024-04-08"},
    {id: 12, name:"Ravi", gender:"M", dob: "1998-03-18"},
    {id: 14, name:"Geetha", gender:"F", dob: "2000-05-18"},
  ];
}
