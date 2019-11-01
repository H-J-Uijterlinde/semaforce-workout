import { Component, OnInit } from '@angular/core';
import {ExerciseView} from '../../../model/exercise/ExerciseView';
import {Router} from '@angular/router';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  displayedColumns: string[] = ['Name', 'Category', 'Muscle Group', 'delete'];
  exercises: ExerciseView[];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  setExercises($event: ExerciseView[]) {
    this.exercises = $event;
  }

  editExercise(exerciseView: ExerciseView) {
    this.router.navigateByUrl('admin/add-exercise/' + exerciseView.id);
  }
}
