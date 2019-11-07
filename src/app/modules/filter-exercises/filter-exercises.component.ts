import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MuscleView} from '../../model/muscle/MuscleView';
import {ExerciseView} from '../../model/exercise/ExerciseView';
import {ExerciseCategory} from '../../model/exercise/Category';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {ExerciseService} from '../../service/exercise/exercise.service';
import {SelectMuscleDialogComponent} from '../select-muscle-dialog/select-muscle-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {MuscleGroup} from '../../model/muscle/MuscleGroup';
import {MuscleService} from "../../service/muscle/muscle.service";

@Component({
  selector: 'app-filter-exercises',
  templateUrl: './filter-exercises.component.html',
  styleUrls: ['./filter-exercises.component.css']
})
export class FilterExercisesComponent implements OnInit {

  muscles: MuscleView[] = [];
  exercises: ExerciseView[];
  categories: ExerciseCategory[] = [ExerciseCategory.Main, ExerciseCategory.Assistance, ExerciseCategory.Accessory];
  muscleGroups: MuscleGroup[] = [MuscleGroup.Legs, MuscleGroup.Arms, MuscleGroup.Chest, MuscleGroup.Back, MuscleGroup.Shoulders];
  allMuscles: MuscleView[];

  // Properties needed to keep track of the users choices.
  selectedMuscleGroup: MuscleGroup = null;
  selectedMuscle: MuscleView = null;
  searchTerms = new Subject<string>();
  selectedCategory: ExerciseCategory = null;
  partialName = '';
  @Output() exercisesEvent = new EventEmitter<ExerciseView[]>();

  constructor(private exerciseService: ExerciseService,
              private muscleService: MuscleService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.setExercises();

    this.SubscribeToInputChanges();
    this.muscleService.getMuscleViews().subscribe(
      data => this.allMuscles = data
    );
  }

  /*
 * Subscribe to changes of the search by name input field. DebounceTime sets the time to wait for more changes after
 * each keystroke. DistinctUntilChanged makes sure we only call the exerciseService if the input has changed.
 */
  private SubscribeToInputChanges() {
    this.searchTerms.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((term: string) =>
        this.exerciseService.getExerciseViewsByCriteria(term, this.selectedCategory, this.selectedMuscleGroup, this.selectedMuscle)
      )
    ).subscribe(
      response => this.exercisesSet(response)
    );
  }

  private exercisesSet(response) {
    this.exercises = response;
    this.exercisesEvent.emit(this.exercises);
  }

  /*
    This method opens the SelectMuscleDialog. It provides an array of muscles to be populated and whether or not multiple
    selections is allowed, in the data map, as arguments to the dialog#open method. It also subscribes to the Observable
    produced by the MatDialogRef#afterClosed method.
     */
  openDialog() {
    const dialogRef = this.dialog.open(SelectMuscleDialogComponent, {
      data: {
        selectedMuscles: this.muscles,
        primaryMuscle: true,
        allMuscles: this.allMuscles
      }
    });

    dialogRef.afterClosed().subscribe(
      result => {
        if (result) {
          this.muscles = result;
          this.selectedMuscle = this.muscles[0];
          this.setExercises();
        }
      }
    );
  }

  findExercises() {
    this.setExercises();
  }

  private setExercises() {
    if (this.partialName === '' && this.selectedCategory === null &&
      this.selectedMuscleGroup === null && this.selectedMuscle === null) {

      this.exerciseService.getExerciseViews().subscribe(
        response => this.exercisesSet(response)
      );
    } else {

      this.exerciseService.getExerciseViewsByCriteria(this.partialName,
        this.selectedCategory,
        this.selectedMuscleGroup,
        this.selectedMuscle).subscribe(
        response => this.exercisesSet(response)
      );
    }
  }

  removePrimaryMuscle() {
    this.muscles = [];
    this.selectedMuscle = null;
    this.setExercises();
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  removeFilters() {
    this.selectedCategory = null;
    this.muscles = [];
    this.selectedMuscle = null;
    this.selectedMuscleGroup = null;
    this.partialName = '';
    this.setExercises();
  }
}
