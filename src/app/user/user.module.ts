import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './component/home/home.component';
import { Home2Component } from './component/home2/home2.component';
import { OutComponent } from './out/out.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import 'boxicons' 

@NgModule({
  declarations: [ 
    HomeComponent,
    Home2Component,
    OutComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule
  ],
  exports : [
    HomeComponent,
    Home2Component
  ]
})
export class UserModule { }
