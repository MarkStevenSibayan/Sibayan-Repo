import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController, NavController, ToastController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  volume = 100;
  user : string = ''
  router: any;
  condition: boolean = true;
  constructor(private route : Router,
    private authentication : AuthenticationService,
    private modalController : ModalController,
    private alertController : AlertController,
    private toastController : ToastController,
    private navCtrl: NavController) {
      if(this.authentication.num == 1){
        this.user = 'Admin';
      } else if (this.authentication.num == 2){
        this.user = 'Sibayan';
      }
   }

  ngOnInit() {
    
  }

  logout(){
    this.route.navigate(['/home']);
    this.authentication.num = 0;
  }

  async closemodal(){
    await this.modalController.dismiss();
  }

  async alert(){
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'subtitle',
      message: 'This is an Alert',
      buttons: ['ok']
    });
    await alert.present();
  }

  async toast(){
    const toast = await this.toastController.create({
      message: 'This is a 2 second Toast',
      duration: 2000
    });
    await toast.present();
  }

  async closetoast(){
    const toast = await this.toastController.getTop();
    if(toast){
      toast.dismiss();
    }
  }

  goToHome() {
    this.route.navigate(['dashboard/home']);
  }

  goToCalculator() {
    this.route.navigate(['dashboard/calculator']);
  }
}

