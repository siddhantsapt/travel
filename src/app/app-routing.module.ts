import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PackagesComponent } from './packages/packages.component';
import { DestinationComponent } from './destination/destination.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'destination',component:DestinationComponent},
  {path:'packages',component:PackagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
