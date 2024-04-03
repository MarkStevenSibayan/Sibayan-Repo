import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomePage } from '../home/home.page';
import { AlertController, ModalController, NavController, ToastController } from '@ionic/angular';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  volume = 100;
  user : string = ''
  router: any;
  condition: boolean = true;
  constructor(private route : Router,
private authentication : AuthenticationService) {
      if(this.authentication.num == 1){
        this.user = 'Admin';
      } else if (this.authentication.num == 2){
        this.user = 'Sibayan';
      }
   }

  ngOnInit() {
    
  }

  goToHome() {
    this.route.navigate(['dashboard/home']);
  }

  goToCalculator() {
    this.route.navigate(['dashboard/calculator']);
  }
}
