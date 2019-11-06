import { Injectable } from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DisplaySpinnerService {

  displaySpinner = false;

  constructor(private router: Router) {
    this.router.events.subscribe(
      event => {
        if (event instanceof NavigationStart) {
          this.displaySpinner = true;
        }
        if (event instanceof NavigationEnd) {
          this.displaySpinner = false;
        }
      }
    );
  }
}
