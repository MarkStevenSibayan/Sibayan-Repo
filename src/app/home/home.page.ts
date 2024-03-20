import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  addedNum = 4;
  origArr = [1, 2, 3];
  out: boolean = false;
  
  data: String = '';
  LoadingText: String = 'Loading...';
  isLoading: boolean = false;
  showArr : boolean = false;
  

  constructor(
    private AuthenticationService: AuthenticationService,
    private dataService: DataService,
 ) 
 {}

 Unauthenticate(){
  alert('Successfully Unauthenticated')
  this.AuthenticationService.authenticate = false;
  this.dataService.errorCondition = true;
  this.showArr = false;
}

authenticate(){
  alert('Successfully Authenticated')
  this.AuthenticationService.authenticate = true;
  this.dataService.errorCondition = false;
}

  async showObject(){
    this.isLoading = true;
    await this.dataService
      .fetchData()
      .then((data) => {
        this.showArr = true;
      })
      .catch((error) => {
        console.error('Process failed', error);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }


  async addObject() {
    this.isLoading = true;
    this.showArr = false;
    await this.dataService
      .fetchData()
      .then((data) => {
        this.origArr = [...this.origArr, this.addedNum];
        this.addedNum += 1;
        
      })
      .catch((error) => {
        console.error('Process failed', error);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
}
  