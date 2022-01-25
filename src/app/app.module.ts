import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ProjektListComponent } from './projekt-list/projekt-list.component';
import { HeaderComponent } from './header/header.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ProjektSucheComponent } from './projekt-suche/projekt-suche.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LinechartComponent } from './dashboard/linechart/linechart.component';
import { BarchartComponent } from './dashboard/barchart/barchart.component';
import { PlotlyModule } from 'angular-plotly.js';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProjektListComponent,
    LandingpageComponent,
    ProjektSucheComponent,
    DashboardComponent,
    LinechartComponent,
    BarchartComponent



  ],
  imports: [
    BrowserModule, PlotlyModule, CommonModule,
    AppRoutingModule,
        RouterModule.forRoot([
        {path: 'projekte', component: ProjektListComponent},
        {path: 'landing', component: LandingpageComponent},
        {path: 'dash', component: DashboardComponent},

  ])
],
providers: [],
bootstrap: [AppComponent]

})
export class AppModule { }
