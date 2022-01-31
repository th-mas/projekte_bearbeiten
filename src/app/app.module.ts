import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { APP_ROUTES } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ProjektListComponent } from './projekt-list/projekt-list.component';
import { HeaderComponent } from './header/header.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ProjektSucheComponent } from './projekt-suche/projekt-suche.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { TimeTrackingModule } from "./time-tracking/time-tracking.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GroupeComponent } from './groupe/groupe.component';
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { AngularMaterialModule } from './angular-material.module';
import { IdentifyModule } from "./identify/identify.module";
import { SorryModule } from "./sorry/sorry.module";
import { UsersToStringPipe } from './groupe/pipe/users-to-string.pipe';
import { GroupInfoComponent } from './groupe/group-info/group-info.component';
import { GroupRoutesModule } from './groupe/groupe-routes.module';
import { BabyChildComponent } from './groupe/baby-child/baby-child.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjektListComponent,
    LandingpageComponent,
    ProjektSucheComponent,
    DashboardComponent,
    GroupeComponent,
    UserComponent,
    GroupeComponent,
    LogInComponent,
    RegisterComponent,
    UsersToStringPipe,
    GroupInfoComponent,
    BabyChildComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(APP_ROUTES),
    BrowserAnimationsModule,
    TimeTrackingModule,
    IdentifyModule,
    SorryModule,
    TimeTrackingModule,
    FormsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    GroupRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
