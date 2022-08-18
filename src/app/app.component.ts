import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { RouteConfigLoadStart, RouterEvent ,Router, RouteConfigLoadEnd} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Loading: boolean;
  title = 'Frontend';
  ngOnInit(): void {

  }
  // displayUser!: boolean;
  // constructor(private router: Router ,private event: RouterEvent) {
  //   this.Loading = false;

  //   router.events.subscribe( (event) => {
  //     if(event instanceof RouteConfigLoadStart){
  //       this.Loading = true;
  //     }
  //     else if (event instanceof RouteConfigLoadEnd){
  //       this.Loading = false;
  //     }
  //   })
  // }
}
