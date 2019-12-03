import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressIndicatorsComponent } from './progress-indicators.component';
import {MatCardModule} from "@angular/material/card";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatButtonModule} from "@angular/material/button";
import {MatExpansionModule} from "@angular/material/expansion";



@NgModule({
  declarations: [ProgressIndicatorsComponent],
  exports: [
    ProgressIndicatorsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressBarModule,
    MatButtonModule,
    MatExpansionModule
  ]
})
export class ProgressIndicatorsModule { }
