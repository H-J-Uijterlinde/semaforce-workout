import { Component, OnInit } from '@angular/core';
import {UserView} from '../../model/user/UserView';
import {WorkoutView} from '../../model/workout/WorkoutView';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../../service/authentication-service/authentication.service';
import {DisplaySpinnerService} from '../../service/navigation/display-spinner.service';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  currentUser: UserView;
  currentWorkout: WorkoutView;
  dayNumber: number[] = [];
  isWeb$: Observable<boolean>;

  constructor(public authenticationService: AuthenticationService,
              public displaySpinnerService: DisplaySpinnerService,
              public breakPointObserver: BreakpointObserver) {

    this.isWeb$ = this.breakPointObserver.observe(Breakpoints.Web)
      .pipe(
        map(result => result.matches)
      );

    this.currentUser =  JSON.parse(sessionStorage.getItem('user'));
  }

  ngOnInit() {
    this.currentWorkout = this.currentUser.currentWorkout;
    if (this.currentWorkout) {
      this.populateDayNumber();
    }
  }

  populateDayNumber() {
    for (let i = 1; i <= this.currentWorkout.daysPerWeek; i++) {
      this.dayNumber[i - 1] = i;
    }
  }
}
