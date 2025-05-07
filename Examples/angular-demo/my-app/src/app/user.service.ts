import { Injectable } from '@angular/core';
import { User, USERS } from './user-mock';
import { Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserService {
  constructor() { }

  // using a method that returns promise using async await, a function with async/await returns Promise
  async getUsers2() : Promise<User> {
    return await Promise.resolve(USERS[0]);
  }

  // method that returns observables
  getUsers() : Observable<User> {
    // to emit value you can use next() method
    return new Observable((observer) => {
      // emit all the values using for loop
      USERS.forEach((value) => observer.next(value));
      let counter = 1;
      const timerId = setInterval(()=>{
        counter++;
        console.log('setInterval()');
        observer.next({id : 100+counter, name: "Atharv: "+counter, dob: new Date("2024-04-08")})
      }, 2000)
      return () => {console.log('unsubscribing....'); clearInterval(timerId)};
    });
  }

  
}
