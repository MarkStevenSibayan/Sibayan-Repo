import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SignupPage } from './signup/signup.page';
import { environment } from 'src/environments/environment';
import { initializeApp } from 'firebase/app';
import { DashboardPage } from './dashboard/dashboard.page';
import { LoginPage } from './login/login.page';
import { HomePage } from './home/home.page';
import { getFirestore } from 'firebase/firestore';


@NgModule({
  declarations: [AppComponent, DashboardPage, HomePage],
  imports: [FormsModule,BrowserModule, IonicModule.forRoot(), AppRoutingModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: !isDevMode(),
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {
  app = initializeApp(environment.firebaseConfig);
  firestore = getFirestore(this.app)
}
