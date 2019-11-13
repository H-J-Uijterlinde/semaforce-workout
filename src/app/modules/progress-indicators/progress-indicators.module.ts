import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressIndicatorsComponent } from './progress-indicators.component';
import {MatCardModule} from "@angular/material/card";
import {MatProgressBarModule} from "@angular/material/progress-bar";



@NgModule({
  declarations: [ProgressIndicatorsComponent],
  exports: [
    ProgressIndicatorsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressBarModule
  ]
})
export class ProgressIndicatorsModule { }
