import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from './user-mock';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserMockService {
  // inject HttpClient to this service
  private _http : HttpClient = inject(HttpClient);
  private baseURI : string = "http://localhost:3000/users";

  // store operation takes user from the component form : id, name & dob
  saveUser(data : User) : Observable<any> { // interface User { id, name, dob} is already present
    return this._http.post(this.baseURI, data);
  }
  // get all the users 
  getUsers() : Observable<User[]> {
    return this._http.get<User[]>(this.baseURI);  // since get returns Observable<Object>
  }
}
