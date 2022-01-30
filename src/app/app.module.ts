import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {APP_ROUTES} from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ProjektListComponent } from './projekt-list/projekt-list.component';
import { HeaderComponent } from './header/header.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ProjektSucheComponent } from './projekt-suche/projekt-suche.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LinechartComponent } from './dashboard/linechart/linechart.component';
import { BarchartComponent } from './dashboard/barchart/barchart.component';
import { CommonModule } from '@angular/common';
import { ProjektHinzuComponent } from './projekt-list/projekt-hinzu/projekt-hinzu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjektDeleteComponent } from './app/projekt-list/projekt-delete/projekt-delete.component';
//import {FormBuilder, FormGroup, Validators} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjektListComponent,
    LandingpageComponent,
    ProjektSucheComponent,
    DashboardComponent,
    LinechartComponent,
    BarchartComponent,
    ProjektHinzuComponent,
    ProjektDeleteComponent
  ],
  imports: [
    BrowserModule, //FormBuilder,FormGroup,Validators,
    CommonModule,
    RouterModule.forRoot(APP_ROUTES),
    BrowserAnimationsModule
],
providers: [],
bootstrap: [AppComponent]

})
export class AppModule { }
