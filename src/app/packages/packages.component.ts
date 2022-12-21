import { Component, OnInit } from '@angular/core';
import { AllServicesService } from '../all-services.service';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  constructor(public ser:AllServicesService) { }

  all_source=['hubli','Gadag','Goa'];
  all_destination=['dehli','mumbai','nippani'];
  s_source="";
  d_destination="";
  price=100;
  s_people=0;
  t_price=0;
  flag:boolean=false;
  doComputations(data:any){
    this.s_source=data.source;
    this.d_destination=data.destination;
    this.s_people=data.s_people;
    this.t_price=data.people*45;
    this.flag=true;
  }

  ngOnInit(): void {
  }

}
