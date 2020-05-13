import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private router: Router) {
  }
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url && (event.url.indexOf('auth') !== -1)) {
        // tslint:disable-next-line: max-line-length
          (<HTMLElement>document.getElementsByTagName('body')[0]).style.cssText = 'padding-top: 0;';
        } else {
          (<HTMLElement>document.getElementsByTagName('body')[0]).style.cssText = 'padding-top: 4.5rem;';
         }
      }
    });
  }
}
