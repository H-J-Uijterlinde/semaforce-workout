import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressIndicatorsComponent } from './progress-indicators.component';
import {MatCardModule} from "@angular/material/card";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [ProgressIndicatorsComponent],
  exports: [
    ProgressIndicatorsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressBarModule,
    MatButtonModule
  ]
})
export class ProgressIndicatorsModule { }
