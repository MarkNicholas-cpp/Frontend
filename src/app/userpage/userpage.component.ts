import { Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  constructor() { }
  @Input() displayuser!:Boolean;
  ngOnInit(): void {
    this.displayuser = true;
  }
}
