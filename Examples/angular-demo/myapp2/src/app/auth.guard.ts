import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  let sessionUser =  sessionStorage.getItem('un');
  let loggedInUser = route.paramMap.get('user');
  if(sessionUser === loggedInUser) {
    return true;
  } else {
    alert('You must log in first');
    router.navigate(['/login']);
    return false;
  }

};
