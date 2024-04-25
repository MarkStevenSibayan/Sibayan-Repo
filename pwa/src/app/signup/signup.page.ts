import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { DashboardPage } from '../dashboard/dashboard.page';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  email: string = '';
  password: string = '';
  retypePassword: string = '';

  constructor(
    private alertController : AlertController,
    private route: Router
  ) { }

  ngOnInit() {
  }

  async signUp(){
    if (!this.email || !this.password || !this.retypePassword){
        this.presentAlert('Error', 'Please Fill in All Fields');
        return;
    }

    if (this.password !== this.retypePassword){
      this.presentAlert('Error', 'Password Do Not Match');
      return;
    }
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, this.email, this.password)
    .then((userCredential) => {
      console.log(userCredential);
      const user = userCredential.user;
      this.presentAlert('Success', 'Sign Up Successfully');
      this.route.navigate(['login']);
    })
    .catch((error) => {
      const errorcode = error.code;
      const errorMessage = error.message
      console.error(error);
    });

    this.email = '';
    this.password = '';
    this.retypePassword = '';
  }

  async presentAlert(header: string, message: string){
    const alert = await this.alertController.create({
      header: header,
      subHeader: message,
      buttons: ['okay']
    });
    await alert.present();
  }

  loginPage(){
    this.route.navigate(['login'])
  }
}
