import { Component, inject, OnInit } from '@angular/core';
import { UserMockService } from '../user-mock.service';
import { User } from '../user-mock';

@Component({
  selector: 'app-user-read',
  standalone: false,
  templateUrl: './user-read.component.html',
  styleUrl: './user-read.component.css'
})
export class UserReadComponent implements OnInit{
  private _service : UserMockService = inject(UserMockService);
  users !: User[];

  ngOnInit(): void {
      this._service.getUsers().subscribe({
        next : (value) => this.users = value
      });
  }
}
