import { Component, inject } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user-mock';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  // angular DI injector injects the UserService object
  private _service : UserService = inject(UserService);
  userItems : User[] = []; // to display all the users emitted from the observable
  private _subscriber !: Subscription;
  handleClick2() {
    this._service.getUsers2().then(value => console.log(value))
  }
  handleClick() {
    // subscribe takes an object with 3 properties next, error, complete
    this._subscriber = this._service.getUsers().subscribe({
      next : (value) => this.userItems.push(value),
      error : (err) => console.log('error: '+err),
      complete : () => console.log('emitting completed')
    });
  }
  // unsubsribe from the observable
  unsubscribe() {
    this._subscriber.unsubscribe();
    this.handleClick2(); // to avoid creating another button we are invoking here
  }
}
