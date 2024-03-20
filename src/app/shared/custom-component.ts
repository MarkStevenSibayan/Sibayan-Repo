import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'shared-page',
  templateUrl: 'custom-component.html',
})
export class customPage {

  constructor(private authenticationService : AuthenticationService, private route : Router) {}
  goWithAuthentication(){
    this.authenticationService.authenticated = true;
    this.route.navigate(['another']);
  }


}