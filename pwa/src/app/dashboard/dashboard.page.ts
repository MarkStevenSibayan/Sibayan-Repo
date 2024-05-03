import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private route: Router
  ) { this.authenticationService.authenticated=false;}

  ngOnInit() {
    this.authenticationService.authenticated = false;
  }

  logout(){
    this.authenticationService.authenticated = false;
    this.route.navigate(['login']);
  }

  navigateCrud(){
    this.authenticationService.authenticated=true;
    this.route.navigate(['home'])
  }

}
