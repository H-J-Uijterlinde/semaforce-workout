import { Component, OnInit } from '@angular/core';
import {GoalsView} from "../../model/goals/GoalsView";
import {GoalsService} from "../../service/goals/goals.service";
import {Observable} from "rxjs";
import {AuthenticatedUserService} from "../../service/authentication-service/authenticated-user.service";

@Component({
  selector: 'app-progress-indicators',
  templateUrl: './progress-indicators.component.html',
  styleUrls: ['./progress-indicators.component.css']
})
export class ProgressIndicatorsComponent implements OnInit {

  goals: Observable<GoalsView[]>;

  constructor(private goalsService: GoalsService,
              private authenticatedUser: AuthenticatedUserService) { }

  ngOnInit() {
    this.goals = this.goalsService.getGoalViewsByUserId(this.authenticatedUser.user.id);
  }

  removeGoal(id: bigint) {
    this.goalsService.removeGoal(id).subscribe();
  }
}
