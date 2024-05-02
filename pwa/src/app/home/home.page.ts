import { Component } from '@angular/core';
import { User, iUser } from './home.model';
import { HomeService } from './home.service';
import { AlertController } from '@ionic/angular';


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
    private alertcontroler: AlertController
    ) { this.users();}

  async presentAlert(header: string, message: string){
    const alert = await this.alertcontroler.create({
      header: header,
      message: message,
      buttons: ['ok'],
    })
  }

  save(){
    if (this.user.id){
      this.homeService.tryUpdate(this.user);
      this.presentAlert('Updated', 'User Updated');
    } else {
      this.homeService.tryAdd(this.user);
      this.presentAlert('Success', 'User Added');
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
    await this.homeService.tryDelete(user);
    this.presentAlert('Deleted', 'User Deleted')
    this.user = new User();
    this.isLoading = false;
  }

}
