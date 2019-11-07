import {Component, OnInit} from '@angular/core';
import {AuthenticatedUserService} from '../../service/authentication-service/authenticated-user.service';
import {WorkoutView} from '../../model/workout/WorkoutView';
import {DeviceDetectorService} from "ngx-device-detector";

@Component({
  selector: 'app-workout-menu',
  templateUrl: './workout-menu.component.html',
  styleUrls: ['./workout-menu.component.css']
})
export class WorkoutMenuComponent implements OnInit {

  currentWorkout: WorkoutView;

  dayNumber: number[] = [];

  constructor(private authenticatedUserService: AuthenticatedUserService,
              public deviceDetector: DeviceDetectorService) {
  }

  populateDayNumber() {
    for (let i = 1; i <= this.currentWorkout.daysPerWeek; i++) {
      this.dayNumber[i - 1] = i;
    }
  }

  ngOnInit() {
    this.currentWorkout = this.authenticatedUserService.user.currentWorkout;
    if (this.currentWorkout) {
      this.populateDayNumber();
    }
  }

}
