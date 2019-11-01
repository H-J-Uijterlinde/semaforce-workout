import {Component, Inject, OnInit} from '@angular/core';
import {MuscleView} from '../../model/muscle/MuscleView';
import {MuscleService} from '../../service/muscle/muscle.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface MuscleData {
  selectedMuscles: MuscleView[];
  primaryMuscle: boolean;
}

@Component({
  selector: 'app-select-muscle-dialog',
  templateUrl: './select-muscle-dialog.component.html',
  styleUrls: ['./select-muscle-dialog.component.css']
})
export class SelectMuscleDialogComponent implements OnInit {

  muscles: MuscleView[];

  constructor(private muscleService: MuscleService,
              public dialogRef: MatDialogRef<SelectMuscleDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: MuscleData) { }

  ngOnInit() {
    this.muscleService.getMuscleViews().subscribe(
      response => this.muscles = response
    );
  }

  select() {
    this.dialogRef.close(this.data.selectedMuscles);
  }
}
