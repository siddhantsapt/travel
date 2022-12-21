import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { AllServicesService } from '../all-services.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public _router:Router,public serv:AllServicesService) { }

  user =new User("","");

  all_user=['ganesh','suraj','chinmay'];
  all_password=['123456','7896437','8974385'];
  flag=false;

  UserInfo(data:any){

    if(this.all_user.includes(data.name)){

      if(this.all_password.includes(data.pass))
      {
        this.flag=true;
      }
    }

    if(this.flag)
    {
      this._router.navigate(['/destination'])
    }
    else{
     this.serv.show_success();
    }
  }
  ngOnInit(): void {
  }

}
