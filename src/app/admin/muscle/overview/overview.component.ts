import {Component, OnInit} from '@angular/core';
import {MuscleView} from '../../../model/muscle/MuscleView';
import {MuscleService} from "../../../service/muscle/muscle.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  muscles: MuscleView[];

  constructor(private httpService: MuscleService,
              private router: Router) {
  }

  ngOnInit() {
    this.httpService.getMuscleViews().subscribe(
      response => this.muscles = response
    );
  }

  edit(id: bigint) {
    this.router.navigateByUrl('/admin/add-muscle/' + id);
  }

}
