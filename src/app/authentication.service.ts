import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticated = true;
  num = 0;
  constructor() { }
  canActivate() {
    return this.authenticated;
  }
}

