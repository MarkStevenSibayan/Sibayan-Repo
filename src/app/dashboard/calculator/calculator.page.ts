import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {

  constructor(private navCtrl: NavController,
              private router: Router
    ) { }
    

    ngOnInit() {
      
    }

  Input(value: string): void {
      const display = document.getElementById('display') as HTMLInputElement;
      display.value += value;
  }
  
  Clear(): void {
      const display = document.getElementById('display') as HTMLInputElement;
      display.value = '';
  }
  
  Compute(): void {
      const display = document.getElementById('display') as HTMLInputElement;
      const expression: string = display.value;
      const result: string = eval(expression);
      display.value = result;
      const history = document.getElementById('history') as HTMLDivElement;
      history.innerHTML += `${expression} = ${result}<br>`;
  }
}
