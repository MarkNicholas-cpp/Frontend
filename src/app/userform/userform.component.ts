import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  private Problems: String[] = [];
  constructor() { }
  ngOnInit(): void {
  }
  Sanitation !: boolean;
  WaterSupply!: boolean;
  StreetLights!: boolean;
  extraIssues!: boolean;
  ProperHousing!: boolean;
  Yes !: boolean;
  No !: boolean;
  areaName: String = "";
  address: String = "";
  Action: String = "";
  Reason: String = "";

  Verify() {
    if (this.Sanitation) {
      this.Problems.push("Sanitation");
    }
    if (this.WaterSupply) {
      this.Problems.push("WaterSupply");
    }
    if (this.StreetLights) {
      this.Problems.push("StreetLights");
    }
    if (this.ProperHousing) {
      this.Problems.push("ProperHousing");
    }
    for (var i in this.Problems) {
      console.log(this.Problems[i]);
    }
  }
  officerResponceYes() {
    this.Yes = true;
    this.No = false;
  }
  officerResponceNo() {
    this.Yes = false;
    this.No = true;
  }

}
