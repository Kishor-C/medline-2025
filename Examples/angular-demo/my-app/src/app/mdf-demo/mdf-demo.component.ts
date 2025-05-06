import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-mdf-demo',
  standalone: false,
  templateUrl: './mdf-demo.component.html',
  styleUrl: './mdf-demo.component.css'
})
export class MdfDemoComponent {
  builder = inject(FormBuilder);
  
  user = this.builder.group({
    firstname : ['Anonymous'], 
    lastname : ['', Validators.compose([Validators.required])], 
    phone : ['', ]
  })
  
  handleSubmit() {
    console.log(this.user.value);
    this.user.reset({firstname : "Guest"});
  }
}
