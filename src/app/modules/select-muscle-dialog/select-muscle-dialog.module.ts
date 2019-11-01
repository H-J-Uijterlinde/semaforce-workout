import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SelectMuscleDialogComponent} from "./select-muscle-dialog.component";
import {MaterialModule} from "../../material.module";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [SelectMuscleDialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  entryComponents: [
    SelectMuscleDialogComponent
  ]
})
export class SelectMuscleDialogModule { }
