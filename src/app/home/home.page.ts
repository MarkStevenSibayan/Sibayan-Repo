import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonButton, ToastController } from '@ionic/angular';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  constructor(
    private AuthenticationService: AuthenticationService,
    private route : Router,
    private toastController:ToastController,
    private alertController: AlertController) {
      if(this.AuthenticationService.num == 0){
        this.username = '';
        this.password = '';
      }
    }

  // goWithAuthentication(){
  //   this.AuthenticationService.authenticated = true;

  // }


  // Authentication(buttonName: string){

  //     if(buttonName === 'button1'){
  //       this.route.navigate(['blank']);
  //     }else if (buttonName === 'button2'){
        
  //       if(this.AuthenticationService.authenticated == true){
  //         this.route.navigate(['page2']);
  //       }
  //     }
  //   this.AuthenticationService.authenticated = false;
  // }

  // event(){
  //     this.route.navigate(['blank']);
  // }


  // ngOnDestroy(): void {
    
  // }

  // ionViewWillEnter(){
  //   console.log('You Will Enter the Home Page');
  // }

  // ionViewDidEnter(){
  //   console.log('You Did Enter the Home Page');
  // }

  // ionViewWillLeave(){
  //   console.log('You Will Leave the Home Page');
  // }

  // ionViewDidLeave(){
  //   console.log('You Did Leave the Home Page');
  // }

  ngOnInit() {
   
  }

   username: string = ''
   password: string = ''

  async login(){
    if(this.username == 'admin'){
      if(this.password == 'admin'){
        const alert = await this.alertController.create({
          header: "Login",
          subHeader: "Status",
          message: "Login Successfully",
          buttons: ['ok']
        });
        await alert.present();
        this.AuthenticationService.authenticated = true;
        this.AuthenticationService.num = 1;
        this.route.navigate(['dashboard/home']);
      } else{
        const toast = await this.toastController.create({
          message: "Login Failed",
          duration:2000
        });
        toast.present();
      }
    } else if(this.username == 'sibayan'){
      if(this.password == '12345'){
        const alert = await this.alertController.create({
          header: "Login",
          subHeader: "Status",
          message: "Login Successfully",
          buttons: ['ok']
        });
        await alert.present();
        this.AuthenticationService.authenticated = true;
        this.AuthenticationService.num = 2;
        this.route.navigate(['dashboard/home']);
      } else{
        const toast = await this.toastController.create({
          message: "Login Failed",
          duration:2000
        });
        toast.present();
      }
    } else {
      const toast = await this.toastController.create({
        message: "Login Failed",
        duration:2000
      });
      toast.present();
    }
  }
}
  