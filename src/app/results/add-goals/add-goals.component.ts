import { Component, OnInit } from '@angular/core';
import {GoalsService} from '../../service/goals/goals.service';
import {TotalWorkouts} from '../../model/goals/TotalWorkouts';
import {ExerciseGoals} from '../../model/goals/ExerciseGoals';

@Component({
  selector: 'app-add-goals',
  templateUrl: './add-goals.component.html',
  styleUrls: ['./add-goals.component.css']
})
export class AddGoalsComponent implements OnInit {

  selectedOption: number;

  constructor(private goalsService: GoalsService) { }

  ngOnInit() {
  }

  log() {
    console.log(this.selectedOption);
  }
}
