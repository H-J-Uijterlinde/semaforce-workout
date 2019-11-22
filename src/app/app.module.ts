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
import {HomeComponent} from './layout/home/home.component';
import {AuthenticatedUserResolver} from './service/resolvers/AuthenticatedUser.resolver';
import {MatTabsModule} from '@angular/material/tabs';
import {ShowWorkoutCondensedModule} from './modules/show-workout-condensed/show-workout-condensed.module';
import {AllTrainingdaysResolverService} from './service/resolvers/all-trainingdays-resolver.service';
import {DeviceDetectorModule} from 'ngx-device-detector';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    LoginComponent,
    LogoutComponent,
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
    ShowWorkoutCondensedModule,
    DeviceDetectorModule.forRoot(),
    MatSidenavModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BasicAuthHttpInterceptorServiceService,
      multi: true
    },
    AuthenticatedUserResolver,
    AllTrainingdaysResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
