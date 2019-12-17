import { Component, OnInit } from '@angular/core';
import {AuthenticatedUserService} from '../../../../../service/authentication-service/authenticated-user.service';
import {TrainingDayService} from '../../../../../service/training-day/training-day.service';
import {Observable} from 'rxjs';
import {TrainingDayMiniView} from '../../../../../model/workout/TrainingDayMiniView';
import {CompletedWorkoutBottomSheetComponent} from '../../../../../modules/show-completed-workout/completed-workout-bottom-sheet/completed-workout-bottom-sheet.component';
import {CompletedWorkoutDialogComponent} from '../../../../../modules/show-completed-workout/completed-workout-dialog/completed-workout-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-previous-instant',
  templateUrl: './previous-instant.component.html',
  styleUrls: ['./previous-instant.component.css']
})
export class PreviousInstantComponent implements OnInit {

  trainingDayMiniViews$: Observable<TrainingDayMiniView[]>;
  isMobile$: Observable<boolean>;

  constructor(private authenticatedUser: AuthenticatedUserService,
              private trainingDayService: TrainingDayService,
              private dialog: MatDialog,
              public breakPointObserver: BreakpointObserver,
              private bottomSheet: MatBottomSheet) {

    this.isMobile$ = this.breakPointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches)
      );
  }

  ngOnInit() {
    this.trainingDayMiniViews$ = this.trainingDayService
      .getTrainingDaysByInstantWorkoutAndUserId(this.authenticatedUser.user.id);
  }

  openCompletedWorkoutDialog(trainingDayId: bigint) {

    this.isMobile$.subscribe(
      response => {
        if (response) {
          this.bottomSheet.open(CompletedWorkoutBottomSheetComponent, {
            data: {
              workout: null,
              trainingDayId
            },
            hasBackdrop: true
          });
        } else {
          this.dialog.open(CompletedWorkoutDialogComponent, {
            data: {
              workout: null,
              trainingDayId
            },
            width: '75%'
          });
        }
      }
    );
  }
}
