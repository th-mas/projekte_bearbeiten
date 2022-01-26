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
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(APP_ROUTES)
],
providers: [],
bootstrap: [AppComponent]

})
export class AppModule { }
