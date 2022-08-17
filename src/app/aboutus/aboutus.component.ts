import { ElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor() { }
  Email: String = "";
  alertFail!: boolean;
  alertSuccess!: boolean;
  alertEmailMsgFail!: boolean;
  ngOnInit(): void {
  }
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
      this.alertFail = false;
      this.alertEmailMsgFail = false;
      this.alertSuccess = true;
    }
    else {
      this.alertSuccess = false;
      this.alertFail = true;
      this.alertEmailMsgFail = true;
    }
  }
}
