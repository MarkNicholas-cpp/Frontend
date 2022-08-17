import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Input()
  display!: boolean;
  @Input()
  loginHide: boolean = true;
  @Input()
  signupHide: boolean = true;
  @Input()
  logoutVisible :boolean = true;
  constructor() { 
  }

  ngOnInit(): void {
    $(document).ready(function(){
      $("#HomeNav").click(function () {
        $("#HomeNav").addClass('active btn btn-sm btn-outline-info');
        $("#AboutusNav").removeClass('active btn btn-sm btn-outline-info');
        $("#WhatwedoNav").removeClass('active btn btn-sm btn-outline-info');
        $("#ContactNav").removeClass('active btn btn-sm btn-outline-info');
    });
 
    $("#AboutusNav").click(function () {
        $("#AboutusNav").addClass('active btn btn-sm btn-outline-info');
        $("#HomeNav").removeClass('active btn btn-sm btn-outline-info');
        $("#WhatwedoNav").removeClass('active btn btn-sm btn-outline-info');
        $("#ContactNav").removeClass('active btn btn-sm btn-outline-info');
    });
 
    $("#WhatwedoNav").click(function () {
        $("#WhatwedoNav").addClass('active btn btn-sm btn-outline-info');
        $("#HomeNav").removeClass('active btn btn-sm btn-outline-info');
        $("#AboutusNav").removeClass('active btn btn-sm btn-outline-info');
        $("#ContactNav").removeClass('active btn btn-sm btn-outline-info');
    });
 
    $("#ContactNav").click(function () {
        $("#ContactNav").addClass('active btn btn-sm btn-outline-info');
        $("#HomeNav").removeClass('active btn btn-sm btn-outline-info');
        $("#AboutusNav").removeClass('active btn btn-sm btn-outline-info');
        $("#WhatwedoNav").removeClass('active btn btn-sm btn-outline-info');
 
    });
    })
  }

}
