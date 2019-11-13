import { Component, OnInit } from '@angular/core';
import {GoalsService} from "../../../service/goals/goals.service";
import {TotalWorkouts} from "../../../model/goals/TotalWorkouts";
import {AuthenticatedUserService} from "../../../service/authentication-service/authenticated-user.service";
import {NgForm} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-total-workouts-goal',
  templateUrl: './add-total-workouts-goal.component.html',
  styleUrls: ['./add-total-workouts-goal.component.css']
})
export class AddTotalWorkoutsGoalComponent implements OnInit {

  goal: TotalWorkouts = new TotalWorkouts(null, 0, null);
  daysPerWeek = [0, 1, 2, 3, 4, 5, 6, 7];
  selectedNumWeeks: number;
  selectedDaysPerWeek: number;

  constructor(private goalsService: GoalsService,
              private authenticatedUser: AuthenticatedUserService,
              private snackBar: MatSnackBar,
              private router: Router) { }

  ngOnInit() {
  }

  saveGoal(form: NgForm) {
    if (form.valid) {
      this.goal.user = this.authenticatedUser.user;
      this.goal.totalWorkouts = this.selectedNumWeeks * this.selectedDaysPerWeek;
      this.goal.endDate = this.calculateEndDate();
      this.goalsService.postTotalWorkoutGoal(this.goal).subscribe(
        success => {
          this.snackBar.open('Goal saved successfully!', null, {
            duration: 3000
          });
          this.router.navigateByUrl('/results');
        }
      );
    }
  }

  calculateEndDate(): Date {
    const currentDate = new Date();
    const newDate = new Date();
    newDate.setDate(currentDate.getDate() + (this.selectedNumWeeks * 7));
    return newDate;
  }
}
