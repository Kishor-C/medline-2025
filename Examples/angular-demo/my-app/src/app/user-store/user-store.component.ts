import { Component, inject, OnInit } from '@angular/core';
import { UserMockService } from '../user-mock.service';
import { User } from '../user-mock';

@Component({
  selector: 'app-user-store',
  standalone: false,
  templateUrl: './user-store.component.html',
  styleUrl: './user-store.component.css'
})
export class UserStoreComponent implements OnInit{
  private _service : UserMockService = inject(UserMockService);

  ngOnInit(): void {
      // simulate form submission here
      let user : User = {id : 2, name : "Ravi", dob : new Date("1987-03-08")};
      // this._service.saveUser(user).subscribe({
      //   next : (value) => console.log(value)
      // });
  }
}
