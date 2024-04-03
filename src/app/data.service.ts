import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient){}

  fetchData():Observable<any>{
    return this.http.get<any>('url');
  }



  // errorCondition : boolean = true;
  // fetchData() {
  // return new Promise((resolve, reject) => {
  
  //   if (this.errorCondition) {
  //     reject(new Error('Authentication Needed'));
  //   } else {
  //     setTimeout(() => {
  //       resolve('Nice');
  //     }, 2000)
  //   }
  // });
  // }

}
