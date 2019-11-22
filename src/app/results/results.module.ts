import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsRoutingModule } from './results-routing.module';
import { HomeComponent } from './home/home.component';
import {MatIconModule} from '@angular/material/icon';
import {ProgressIndicatorsModule} from '../modules/progress-indicators/progress-indicators.module';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { AddGoalsComponent } from './add-goals/add-goals.component';
import {MatSelectModule} from '@angular/material/select';
import {AddGoalsModule} from '../modules/add-goals/add-goals.module';
import { ProgressionComponent } from './progression/progression.component';
import {ProgressionChartsModule} from '../modules/progression-charts/progression-charts.module';
import { GoalsComponent } from './goals/goals.component';


@NgModule({
  declarations: [HomeComponent, AddGoalsComponent, ProgressionComponent, GoalsComponent],
  imports: [
    CommonModule,
    ResultsRoutingModule,
    MatIconModule,
    ProgressIndicatorsModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    AddGoalsModule,
    ProgressionChartsModule
  ]
})
export class ResultsModule { }
