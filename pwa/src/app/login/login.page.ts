import { Component, OnInit } from '@angular/core';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';
  constructor(
  private authenticationService: AuthenticationService,
  private alertController: AlertController,
  private route: Router) { }

  ngOnInit() {
  }

  Login(){
    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.email, this.password)
    .then((userCredential) => {
      const user = userCredential.user
      this.authenticationService.setAuthentication(true);
      this.presentAlert('Success', 'Welcome To My Dashboard User!');
      this.authenticationService.authenticated = true;
      this.route.navigate(['dashboard']);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message
      this.presentAlert('Failed', 'Invalid Input')
    })
    this.email = '';
    this.password = '';
  }

  async presentAlert(header: string, message: string){
    const alert = await this.alertController.create({
      header: header,
      subHeader: message,
      buttons: ['okay']
    });
    await alert.present();
  }

  signupPage(){
    this.route.navigate(['signup'])
  }
}
