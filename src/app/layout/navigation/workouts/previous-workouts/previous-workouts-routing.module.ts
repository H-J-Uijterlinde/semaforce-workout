import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PreviousCompleteComponent} from './previous-complete/previous-complete.component';
import {PreviousInstantComponent} from './previous-instant/previous-instant.component';
import {PreviousWorkoutsComponent} from './previous-workouts.component';
import {NavigationComponent} from './navigation/navigation.component';


const routes: Routes = [
  {path: '', component: PreviousWorkoutsComponent, children: [
      {path: '', component: NavigationComponent},
      {path: 'complete', component: PreviousCompleteComponent},
      {path: 'instant', component: PreviousInstantComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreviousWorkoutsRoutingModule { }
