import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
