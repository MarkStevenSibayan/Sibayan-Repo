import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(){}
  errorCondition : boolean = true;
  fetchData() {
  return new Promise((resolve, reject) => {
  
    if (this.errorCondition) {
      reject(new Error('Authentication Needed'));
    } else {
      setTimeout(() => {
        resolve('Nice');
      }, 2000)
    }
  });
  }

}
