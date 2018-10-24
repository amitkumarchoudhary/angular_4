import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import {ErrorComponent} from '../app/common/error/error.component';
import {HomeComponent} from '../app/common/home/home.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'login/home', component: HomeComponent },
 
  { path: '**', component: ErrorComponent },

];
 
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})


export class AppRoutingModule { }
