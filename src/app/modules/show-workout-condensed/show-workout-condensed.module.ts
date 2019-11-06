import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowWorkoutCondensedComponent } from './show-workout-condensed.component';
import {MatTabsModule} from '@angular/material/tabs';
import {RouterModule} from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [ShowWorkoutCondensedComponent],
  exports: [
    ShowWorkoutCondensedComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    RouterModule,
    MatExpansionModule,
    MatButtonModule,
    FormsModule
  ]
})
export class ShowWorkoutCondensedModule { }
