import { Component, OnInit } from '@angular/core';
import {DeviceDetectorService} from "ngx-device-detector";

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {
  step = -1;

  constructor(public deviceDetector: DeviceDetectorService) { }

  ngOnInit() {
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
