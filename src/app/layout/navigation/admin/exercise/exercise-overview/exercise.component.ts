import {Component, OnInit} from '@angular/core';
import {ExerciseView} from '../../../../../model/exercise/ExerciseView';
import {Router} from '@angular/router';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  displayedColumns: string[] = ['Name', 'Category', 'Muscle Group', 'delete'];
  exercises: ExerciseView[];
  displayFilter = false;
  isMobile$: Observable<boolean>;

  constructor(private router: Router,
              private breakPointObserver: BreakpointObserver) {

    this.isMobile$ = this.breakPointObserver.observe(Breakpoints.Handset).pipe(
      map(result => result.matches)
    );
  }

  ngOnInit() {
    this.isMobile$.subscribe(
      isMobile => this.displayFilter = !isMobile
    );
  }

  setExercises($event: ExerciseView[]) {
    this.exercises = $event;
  }

  editExercise(exerciseView: ExerciseView) {
    this.router.navigateByUrl('admin/add-exercise/' + exerciseView.id);
  }

  showFilter() {
    this.displayFilter = !this.displayFilter;
  }
}
