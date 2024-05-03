import { Component } from '@angular/core';
import { User, iUser } from './home.model';
import { HomeService } from './home.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user: User = new User();
  userList: iUser[] = [];
  isLoading = false;
  
  constructor(
    private homeService: HomeService,
    private authenticationService: AuthenticationService,
    private alertcontroler: AlertController,
    private route: Router
    ) 
    { 
      this.authenticationService.authenticated=false;
      this.users();
    }

  async presentAlert(header: string, message: string){
    const alert = await this.alertcontroler.create({
      header: header,
      message: message,
      buttons: ['ok'],
    })
    await alert.present();
  }

  save(){
    if (this.user.id){
      this.homeService.Update(this.user);
      this.presentAlert('Updated', 'Order Updated');
    } else if(this.user.flavor == ''|| this.user.price == 0 || this.user.whatAddOns == '' || this.user.mobileNum == 0){
      this.presentAlert('Failed', 'Fill Up All');
    } else {
      this.homeService.Add(this.user);
      this.presentAlert('Success', 'Order Added');
    }
    this.user = new User();
    this.users();
  }

  async users(){
    this.isLoading = true;
    this.userList = await this.homeService.getUser();
    this.isLoading = false;
  }

  edit(user: User){
    this.user = user;
  }

  async delete(user: User){
    this.isLoading = true;
    await this.homeService.Delete(user);
    this.presentAlert('Deleted', 'Order Deleted')
    this.user = new User();
    this.isLoading = false;
  }


  navigate(){
    this.authenticationService.authenticated=true;
    this.route.navigate(['dashboard'])
  }

  logout(){
    this.route.navigate(['login'])
  }
}
