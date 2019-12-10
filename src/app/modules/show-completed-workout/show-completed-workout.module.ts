import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowCompletedWorkoutComponent } from './show-completed-workout.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import { CompletedWorkoutDialogComponent } from './completed-workout-dialog/completed-workout-dialog.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { CompletedWorkoutBottomSheetComponent } from './completed-workout-bottom-sheet/completed-workout-bottom-sheet.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';



@NgModule({
  declarations: [ShowCompletedWorkoutComponent, CompletedWorkoutDialogComponent, CompletedWorkoutBottomSheetComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatButtonModule,
    MatBottomSheetModule
  ],
  entryComponents: [
    CompletedWorkoutDialogComponent,
    CompletedWorkoutBottomSheetComponent
  ]
})
export class ShowCompletedWorkoutModule { }
