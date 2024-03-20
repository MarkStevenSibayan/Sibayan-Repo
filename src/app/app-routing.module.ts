import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { AnotherPage } from './another/another.page';
import { customPage } from './shared/custom-component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'page2',
    loadChildren: () => import('./my-custom-page/my-custom-page.module').then( m => m.MyCustomPagePageModule)
  },
  {
    path: 'another',
    component: AnotherPage,
    canActivate: [AuthenticationService]
  },
  {
    path: 'blank',
    component: customPage
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
