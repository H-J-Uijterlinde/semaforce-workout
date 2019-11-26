import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AddUserComponent} from './authentication/add-user/add-user.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './authentication/login/login.component';
import {LogoutComponent} from './authentication/logout/logout.component';
import {BasicAuthHttpInterceptorServiceService} from './service/authentication-service/basic-auth-http-interceptor-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import {MatTabsModule} from '@angular/material/tabs';
import {DeviceDetectorModule} from 'ngx-device-detector';
import {NavigationComponent} from './layout/navigation/navigation.component';
import {HomeComponent} from './layout/home/home.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {ShowWorkoutCondensedModule} from "./modules/show-workout-condensed/show-workout-condensed.module";
import {MatGridListModule} from "@angular/material/grid-list";

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    LoginComponent,
    LogoutComponent,
    NavigationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatTabsModule,
    DeviceDetectorModule.forRoot(),
    MatSidenavModule,
    ShowWorkoutCondensedModule,
    MatGridListModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BasicAuthHttpInterceptorServiceService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
