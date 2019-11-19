import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressionChartComponent } from './progression-chart.component';
import {ChartsModule} from 'ng2-charts';
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {SelectExerciseDialogModule} from "../select-exercise-dialog/select-exercise-dialog.module";
import {MatCardModule} from "@angular/material/card";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [ProgressionChartComponent],
  exports: [
    ProgressionChartComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    MatButtonModule,
    MatSelectModule,
    SelectExerciseDialogModule,
    MatCardModule,
    FormsModule
  ]
})
export class ProgressionChartsModule { }
