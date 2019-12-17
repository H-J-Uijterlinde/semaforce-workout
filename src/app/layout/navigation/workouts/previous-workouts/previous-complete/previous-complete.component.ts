import { Component, OnInit } from '@angular/core';
import {WorkoutService} from '../../../../../service/workout/workout.service';
import {WorkoutView} from '../../../../../model/workout/WorkoutView';
import {Observable} from 'rxjs';
import {AuthenticatedUserService} from '../../../../../service/authentication-service/authenticated-user.service';
import {MatDialog} from '@angular/material/dialog';
import {CompletedWorkoutDialogComponent} from '../../../../../modules/show-completed-workout/completed-workout-dialog/completed-workout-dialog.component';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {map} from 'rxjs/operators';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {CompletedWorkoutBottomSheetComponent} from '../../../../../modules/show-completed-workout/completed-workout-bottom-sheet/completed-workout-bottom-sheet.component';

@Component({
  selector: 'app-previous-complete',
  templateUrl: './previous-complete.component.html',
  styleUrls: ['./previous-complete.component.css']
})
export class PreviousCompleteComponent implements OnInit {

  allWorkoutsForUser: Observable<WorkoutView[]>;
  isMobile$: Observable<boolean>;

  constructor(private workoutService: WorkoutService,
              private authenticatedUser: AuthenticatedUserService,
              private dialog: MatDialog,
              public breakPointObserver: BreakpointObserver,
              private bottomSheet: MatBottomSheet) {

    this.isMobile$ = this.breakPointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches)
      );
  }

  ngOnInit() {
    this.allWorkoutsForUser = this.workoutService.getWorkoutViewsByUserId(this.authenticatedUser.user.id);
  }

  openCompletedWorkoutDialog(workout: WorkoutView) {

    this.isMobile$.subscribe(
      response => {
        if (response) {
          this.bottomSheet.open(CompletedWorkoutBottomSheetComponent, {
            data: {
              workout,
              trainingDayId: null
            },
            hasBackdrop: true
          });
        } else {
          this.dialog.open(CompletedWorkoutDialogComponent, {
            data: {
              workout,
              trainingDayId: null
            },
            width: '75%'
          });
        }
      }
    );
  }
}
