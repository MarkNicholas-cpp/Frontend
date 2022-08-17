import { Component, OnInit } from '@angular/core';
import { UserservService } from '../userserv.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private user:UserservService) { }
  ngOnInit(): void {
  }
  Password: string = '';
  Email: string = '';
  verifyPassword: String = '';

  showPwd: boolean = false;
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
      if ((this.Password == this.verifyPassword) && ((this.Password.length && this.verifyPassword.length) >= 8)) {
        this.alertFail = false;
        this.alertEmailMsgFail = false;
        this.alertPasswordMsgFail = false;
        this.alertSuccess = true;
        const data={
          Email:this.Email,
          Password:this.Password
        }
        this.user.create(data).subscribe(
          data => {
            console.log(data);
          },
          error=>{
            console.log(error);
          }
          )
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
