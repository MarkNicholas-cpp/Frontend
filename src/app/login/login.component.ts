import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserservService } from '../userserv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private user:UserservService,private router:Router) { }
    ngOnInit(): void {
    
  }
  userDet:any;
  showPwd = false;
  Password: string = '';
  Email: string = '';
  verifyPassword: String = '';
  alertSuccess: boolean = false
  alertFail: boolean = false;
  alertEmailMsgFail: boolean = false;
  alertPasswordMsgFail: boolean = false;


  validateEmail(email: String): boolean {
    const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const valid = regularExpression.test(email.toLowerCase());
    if (valid) {
      return true;
    }
    else {
      return false;
    }
  }
  Verify() {
    if (this.Email != null && this.validateEmail(this.Email)) {
      if (this.Password.length >= 8) {
        this.alertFail = false;
        this.alertEmailMsgFail = false;
        this.alertPasswordMsgFail = false;
        this.alertSuccess = true;
        this.user.getone(this.Email).subscribe(
          data => {
            console.log(data);
            this.userDet=data;
            if(this.userDet["Password"]==this.Password){
              this.router.navigate(['Userform']);
            }
          },
          err=>{
            console.log(err);
          });
      }
      else {
        this.alertFail = true;
        this.alertPasswordMsgFail = true;
      }
    }
    else {
      this.alertFail = true;
      this.alertEmailMsgFail = true;
    }
  }

}

