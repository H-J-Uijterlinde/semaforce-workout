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

  constructor(private goalsService: GoalsService,
              private authenticatedUser: AuthenticatedUserService) { }

  ngOnInit() {
    this.goalsService.getGoalViewsByUserId(this.authenticatedUser.user.id).subscribe(
      response => this.goals = response
    );
  }

  removeGoal(id: bigint, index: number) {
    this.goalsService.removeGoal(id).subscribe(
      success => this.goals.splice(index, 1)
    );
  }
}
