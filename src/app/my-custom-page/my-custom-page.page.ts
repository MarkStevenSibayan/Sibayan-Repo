import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-my-custom-page',
  templateUrl: './my-custom-page.page.html',
  styleUrls: ['./my-custom-page.page.scss'],
})
export class MyCustomPagePage implements OnInit {

  constructor(private AuthenticationService : AuthenticationService, private router: Router) { }
  goToMyCustomPage() {
    this.router.navigate(['my-custom-page/my-custom-page-with-id/',23])
  }

  goWithAuthentication(){
    this.AuthenticationService.authenticated = true;

  }



  Authentication(buttonName: string){

      if(buttonName === 'button1'){
        this.router.navigate(['blank']);
      }else if (buttonName === 'button2'){
        
        if(this.AuthenticationService.authenticated == true){
          this.router.navigate(['page2/my-custom-page-with-id/',1]);
        }
      }
    this.AuthenticationService.authenticated = false;
  }
  
  event(){
    this.router.navigate(['blank']);
}

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    
  }
  
  ionViewWillEnter(){
    console.log('You Will Enter the Second Page');
  }

  ionViewDidEnter(){
    console.log('You Did Enter the Second Page');
  }

  ionViewWillLeave(){
    console.log('You Will Leave the Second Page');
  }

  ionViewDidLeave(){
    console.log('You Did Leave the Second Page');
  }
}
