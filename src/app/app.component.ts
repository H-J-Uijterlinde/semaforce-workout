import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './service/authentication-service/authentication.service';
import {DisplaySpinnerService} from './service/navigation/display-spinner.service';
import {WorkoutView} from './model/workout/WorkoutView';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {UserView} from './model/user/UserView';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  title = 'semaforce-workout';

  currentUser: UserView;
  currentWorkout: WorkoutView;
  dayNumber: number[] = [];
  selectedOption: number;
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

  populateDayNumber() {
    for (let i = 1; i <= this.currentWorkout.daysPerWeek; i++) {
      this.dayNumber[i - 1] = i;
    }
  }

  ngOnInit(): void {
    this.currentWorkout = this.currentUser.currentWorkout;
    if (this.currentWorkout) {
      this.populateDayNumber();
    }
  }

  setSelectedOption(option: number) {
    this.selectedOption = option;
  }
}
