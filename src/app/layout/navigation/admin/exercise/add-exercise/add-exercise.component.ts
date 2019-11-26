import {Component, OnInit} from '@angular/core';
import {Exercise} from '../../../../../model/exercise/Exercise';
import {ExerciseService} from '../../../../../service/exercise/exercise.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ExerciseCategory} from '../../../../../model/exercise/Category';
import {MuscleView} from '../../../../../model/muscle/MuscleView';
import {MatDialog} from '@angular/material/dialog';
import {SelectMuscleDialogComponent} from '../../../../../modules/select-muscle-dialog/select-muscle-dialog.component';
import {NgForm} from '@angular/forms';
import {MuscleGroup} from '../../../../../model/muscle/MuscleGroup';
import {MuscleService} from '../../../../../service/muscle/muscle.service';

export interface MuscleData {
  selectedMuscles: MuscleView[];
}

@Component({
  selector: 'app-add-exercise',
  templateUrl: './add-exercise.component.html',
  styleUrls: ['./add-exercise.component.css']
})
export class AddExerciseComponent implements OnInit {

  categories: ExerciseCategory[] = [ExerciseCategory.Main, ExerciseCategory.Assistance, ExerciseCategory.Accessory];
  muscleGroups: MuscleGroup[] = [MuscleGroup.Legs, MuscleGroup.Arms, MuscleGroup.Chest, MuscleGroup.Back, MuscleGroup.Shoulders];
  exercise: Exercise = new Exercise('', [], null, null);
  allMuscles: MuscleView[];

  constructor(private exerciseService: ExerciseService,
              private muscleService: MuscleService,
              private router: Router,
              private snackBar: MatSnackBar,
              public dialog: MatDialog,
              private activeRoute: ActivatedRoute) {

    const id = activeRoute.snapshot.params.id;
    if (id != null) {
      Object.assign(this.exercise, exerciseService.getExerciseById(id).
        subscribe(response => this.exercise = response) ||
        new Exercise('', [], null, null));
    }
  }

  ngOnInit() {
    this.muscleService.getMuscleViews().subscribe(
      data => this.allMuscles = data
    );
  }



  openAssistanceMusclesDialog() {
    const dialogRef = this.dialog.open(SelectMuscleDialogComponent, {
      data: {
        selectedMuscles: this.exercise.musclesTrained,
        primaryMuscle: false,
        allMuscles: this.allMuscles
      }
    });

    dialogRef.afterClosed().subscribe(
      result => {
        if (result) {
          this.exercise.musclesTrained = result;
        }
      }
    );
  }

  createExercise(nameForm: NgForm, exerciseForm: NgForm) {
    if (nameForm.valid && exerciseForm.valid) {
      this.exerciseService.createExercise(this.exercise).subscribe(
        response => {
          this.router.navigate(['/admin/exercise']);
          this.snackBar.open('Exercise: ' + response.name + ' saved successfully', null, {
              duration: 3000
            }
          );
        });
    } else {
      this.snackBar.open('Please complete the required steps', 'OK',  {
        duration: 5000
      });
    }

  }
}
