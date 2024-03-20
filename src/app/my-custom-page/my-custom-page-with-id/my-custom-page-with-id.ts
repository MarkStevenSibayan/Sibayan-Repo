import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({

  templateUrl: './my-custom-page-with-id.html',

})
export class MyCustomPageWithId implements OnInit {

  constructor(private route: ActivatedRoute) { }
    id: any;
  ngOnInit(): void {
    this.id= this.route.snapshot.paramMap.get('id')
    
  }

  ngOnDestroy(): void {
    
  }

  ionViewWillEnter(){
    console.log('You Will Enter the Last Page');
  }

  ionViewDidEnter(){
    console.log('You Did Enter the Last Page');
  }

  ionViewWillLeave(){
    console.log('You Will Leave the Last Page');
  }

  ionViewDidLeave(){
    console.log('You Did Leave the Last Page');
  }
}
