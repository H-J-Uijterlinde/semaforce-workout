import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  isWeb$: Observable<boolean>;

  constructor(private breakPointObserver: BreakpointObserver,
              public router: Router) {
    this.isWeb$ = this.breakPointObserver.observe(Breakpoints.Web)
      .pipe(
        map(result => result.matches)
      );
  }

  ngOnInit() {
  }
}
