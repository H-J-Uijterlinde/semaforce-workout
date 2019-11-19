import { Component, OnInit } from '@angular/core';
import {GoalsView} from '../../model/goals/GoalsView';
import {GoalsService} from '../../service/goals/goals.service';
import {AuthenticatedUserService} from '../../service/authentication-service/authenticated-user.service';

@Component({
  selector: 'app-progress-indicators',
  templateUrl: './progress-indicators.component.html',
  styleUrls: ['./progress-indicators.component.css']
})
export class ProgressIndicatorsComponent implements OnInit {

  goals: GoalsView[];
  activeGoals: GoalsView[];
  completedGoals: GoalsView[];
  selectedOption = 1;

  constructor(private goalsService: GoalsService,
              private authenticatedUser: AuthenticatedUserService) { }

  ngOnInit() {
    this.goalsService.getGoalViewsByUserId(this.authenticatedUser.user.id, true).subscribe(
      response => {
        this.activeGoals = response;
        this.goals = this.activeGoals;
      }
    );
  }

  removeGoal(id: bigint, index: number) {
    this.goalsService.removeGoal(id).subscribe(
      success => this.goals.splice(index, 1)
    );
  }

  showActiveGoals() {
    this.goals = this.activeGoals;
    this.selectedOption = 1;
  }

  showCompletedGoals() {
    this.selectedOption = 2;
    if (this.completedGoals) {
      this.goals = this.completedGoals;
    } else {
      this.goalsService.getGoalViewsByUserId(this.authenticatedUser.user.id, false).subscribe(
        response => {
          this.completedGoals = response;
          this.goals = this.completedGoals;
        }
      );
    }
  }
}
