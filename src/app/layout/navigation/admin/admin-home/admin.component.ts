import { Component, OnInit } from '@angular/core';
import {DeviceDetectorService} from "ngx-device-detector";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public deviceDetector: DeviceDetectorService) { }

  ngOnInit() {
  }

}
