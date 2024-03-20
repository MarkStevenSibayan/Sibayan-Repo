import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticated = false;
  constructor() { }
  canActivate() {
    return this.authenticated;
  }
}

