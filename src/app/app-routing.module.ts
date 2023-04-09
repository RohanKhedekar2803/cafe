import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutComponent } from './user/out/out.component';
import { Home2Component } from './user/component/home2/home2.component';
import { HomeComponent } from './user/component/home/home.component';


const routes: Routes = [

 {path : "home" ,component: OutComponent ,children :[

    {path : "" , component : Home2Component},
    {path : "2" , component : HomeComponent}

 ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
