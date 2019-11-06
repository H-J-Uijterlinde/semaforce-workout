import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../service/authentication-service/authentication.service';
import {DisplaySpinnerService} from '../../service/navigation/display-spinner.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authenticationService: AuthenticationService,
              private displaySpinnerService: DisplaySpinnerService) { }

  ngOnInit() {
  }

}
