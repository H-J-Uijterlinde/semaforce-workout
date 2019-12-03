import { Component, OnInit } from '@angular/core';
import {ChartDataSets, ChartType} from 'chart.js';
import {Color} from 'ng2-charts';
import {SelectExerciseDialogComponent} from '../select-exercise-dialog/select-exercise-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {ExerciseView} from '../../model/exercise/ExerciseView';
import {ChartData} from '../../model/results/chart-data';
import {ChartRequest} from '../../model/results/chart-request';
import {AuthenticatedUserService} from '../../service/authentication-service/authenticated-user.service';
import {ResultService} from '../../service/results/result.service';

@Component({
  selector: 'app-progression-chart',
  templateUrl: './progression-chart.component.html',
  styleUrls: ['./progression-chart.component.css']
})
export class ProgressionChartComponent implements OnInit {

  data: ChartData;

  timeFormat = 'YYYY/MM/DD/HH/mm/ss';

  lineChartData: ChartDataSets[] = [
    { data: [], label: 'Estimated Weight', lineTension: 0.2}
  ];

  lineChartLabels;

  lineChartOptions = {
    responsive: true,
    tooltips: {
      callbacks: {
        label: (tooltipItem, data) => 'Estimated weight: ' +
          tooltipItem.yLabel.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + 'kg'
      }
    },
    title: {
      text: 'Chart.js Time Scale'
    },
    scales: {
      xAxes: [{
        type: 'time',
        time: {
          parser: this.timeFormat,
          // round: 'day'
          tooltipFormat: 'll',
          unit: 'day',
          displayFormats: {
            day: 'll'
          }
        },
        scaleLabel: {
          display: true,
          labelString: 'Date'
        },
        ticks: {
          maxTicksLimit: 12
        }
      }],
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Estimated maximum weight'
        }
      }]
    }
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(87,152,180,0.41)',
    },
  ];

  lineChartLegend = false;
  lineChartPlugins = [];
  lineChartType: ChartType = 'line';

  selectedExercise: ExerciseView;
  chartRequest: ChartRequest = new ChartRequest(null, null, null);
  maxSelectableNumReps = 12;
  selectableNumReps: number[] = [];

  constructor(private dialog: MatDialog,
              private authenticatedUser: AuthenticatedUserService,
              private resultService: ResultService) { }

  ngOnInit() {

    for (let i = 1; i <= this.maxSelectableNumReps; i++) {
      this.selectableNumReps.push(i);
    }
    this.chartRequest.userId = this.authenticatedUser.user.id;
  }

  openExerciseDialog() {

    const dialogRef = this.dialog.open(SelectExerciseDialogComponent, {
      data: {
        selectedExercise: [],
        multi: false
      }
    });

    dialogRef.afterClosed().subscribe(
      response => {
        if (response) {
          this.selectedExercise = response[0];
          this.chartRequest.exerciseId = this.selectedExercise.id;
        }
      }
    );
  }

  findResults() {
    if (this.chartRequest.numReps && this.chartRequest.exerciseId) {
      this.resultService.getResultsForGraph(this.chartRequest).subscribe(
        response => {
          this.data = response;
          this.lineChartData[0].data = this.data.estimatedWeight;
          this.lineChartLabels = this.data.dates;
        }
      );
    }
  }
}
