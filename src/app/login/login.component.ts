import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserservService } from '../userserv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private user:UserservService,private router:Router,private userserv:UserservService) { }
    ngOnInit(): void {
    
  }
  userDet:any;
  showPwd = false;
  Password: string = '';
  Email: string = '';
  verifyPassword:boolean=false;
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
        this.user.getone(this.Email).subscribe(
          data => {
            console.log(data);
            this.userDet=data;
            if(this.userDet["Password"]==this.Password){
              this.alertSuccess = true;
              this.userserv.details=true;
              this.router.navigate(['Userform']);
            }
            else{
              this.alertFail=true;
              this.verifyPassword=true;
            }
          },
          err=>{
            console.log(err);
          });
      }
      else {
        this.alertFail = true;
        this.alertPasswordMsgFail = true;
        this.verifyPassword=false;
      }
    }
    else {
      this.alertFail = true;
      this.alertEmailMsgFail = true;
      this.verifyPassword=false;
    }
  }

}

