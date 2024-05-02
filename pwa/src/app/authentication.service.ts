import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticated = true;
  constructor(private route: Router) { }
  
  canActivate(){
    // if(localStorage.getItem("loggedIn") == "true"){
    //   return true;
    // }
    // this.route.navigate(['login'])
    // return false;
    return this.authenticated;
  }

  setAuthentication(auth:boolean){
    if(auth){
      localStorage.setItem("Login", "true");
    }
  }
}
