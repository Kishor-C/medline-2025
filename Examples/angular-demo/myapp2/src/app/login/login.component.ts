import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  _builder = inject(FormBuilder);
  // Router is for programmatic navigation
  _router = inject(Router); 
  loginForm = this._builder.group({
    username : ['']
  });
  
  login() {
    let username = this.loginForm.value['username'];
    //console.log(username);
    // routerLink = 'success/:user'
    this._router.navigate(['success'], {queryParams : {user: username}, skipLocationChange:true}); 
  }
}
