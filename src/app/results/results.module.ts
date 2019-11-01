import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsRoutingModule } from './results-routing.module';
import { HomeComponent } from './home/home.component';
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ResultsRoutingModule,
    MatIconModule
  ]
})
export class ResultsModule { }
