import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {APP_ROUTES} from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ProjektListComponent } from './projekt-list/projekt-list.component';
import { HeaderComponent } from './header/header.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ProjektSucheComponent } from './projekt-suche/projekt-suche.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { CommonModule } from '@angular/common';
import { ProjektHinzuComponent } from './projekt-list/projekt-hinzu/projekt-hinzu.component';
import { FormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";

import { ProjektDeleteComponent } from './projekt-list/projekt-delete/projekt-delete.component';
import { AngularMaterialModule } from './angular-material.module';
import { IdentifyModule } from './identify/identify.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SorryModule } from './sorry/sorry.module';
import { TimeTrackingModule } from './time-tracking/time-tracking.module';



//import {FormBuilder, FormGroup, Validators} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjektListComponent,
    LandingpageComponent,
    ProjektSucheComponent,
    DashboardComponent,
    ProjektHinzuComponent,
    ProjektDeleteComponent
  ],
  imports: [
    BrowserModule, FormsModule,MatButtonModule,MatCardModule,  //FormBuilder,FormGroup,Validators,
    CommonModule,
    RouterModule.forRoot(APP_ROUTES),
    BrowserAnimationsModule,
    TimeTrackingModule,
    IdentifyModule,
    SorryModule,
    FormsModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule {}
