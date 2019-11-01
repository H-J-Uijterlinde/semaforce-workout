import {Component, OnInit} from '@angular/core';
import {MuscleService} from '../../../service/muscle/muscle.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormControl, Validators} from '@angular/forms';
import {MuscleView} from '../../../model/muscle/MuscleView';

@Component({
  selector: 'app-add-muscle',
  templateUrl: './add-muscle.component.html',
  styleUrls: ['./add-muscle.component.css']
})
export class AddMuscleComponent implements OnInit {

  constructor(private muscleService: MuscleService,
              private router: Router,
              private snackBar: MatSnackBar,
              private activeRoute: ActivatedRoute) {

    const id = activeRoute.snapshot.params.id;
    if (id != null) {
      Object.assign(this.muscle, muscleService.getMuscleById(id).subscribe(
        response => this.muscle = response) || new MuscleView(null, '', ''));
    }
  }

  muscle: MuscleView = new MuscleView(null, '', '');

  // Form validation
  name = new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]);
  scientificName = new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]);

  ngOnInit() {
  }

  createMuscle() {
    this.muscleService.createMuscle(this.muscle).subscribe(
      response => {
        this.router.navigate(['/admin/muscle']);
        this.snackBar.open('Muscle added successfully', null, {
            duration: 3000
          }
        );
      },
      error => this.snackBar.open('Muscle already exists in the database', null, {duration: 3000})
    );
  }

  getErrorMessage(property: FormControl) {
    return property.hasError('required') ? 'Please enter a name' :
      property.hasError('pattern') ? 'The name can contain only letters' : '';
  }
}
