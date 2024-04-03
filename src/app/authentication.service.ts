import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticated = false;
  num = 0;
  constructor() { }
  canActivate() {
    return this.authenticated;
  }
}

