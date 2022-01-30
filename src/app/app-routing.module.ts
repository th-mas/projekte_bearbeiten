import {RouterModule, Routes} from '@angular/router';
import {ProjektListComponent} from "./projekt-list/projekt-list.component";
import {LandingpageComponent} from "./landingpage/landingpage.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {GroupeComponent} from './groupe/groupe.component';
import {NgModule} from '@angular/core';
import {LogInComponent} from './components/log-in/log-in.component';
import {RegisterComponent} from './components/register/register.component';
import {IdentifyComponent} from "./identify/identify-component/identify.component";
import {SorryComponent} from "./sorry/sorry/sorry.component";
import {IdentifyGuard} from "./identify/identify-guard.service";
import {AdminGuard} from "./identify/admin-guard.service";

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'identify'
  },
  {
    path: 'identify',
    component: IdentifyComponent
  },
  {
    path: 'login', component: LogInComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'landing',
    component: LandingpageComponent,
    canActivate: [IdentifyGuard]
  },
  {
    path: 'projekte',
    component: ProjektListComponent,
    canActivate: [IdentifyGuard]
  },
  {
    path: 'dash',
    component: DashboardComponent,
    canActivate: [IdentifyGuard]
  },
  {
    path: 'sorry',
    component: SorryComponent
  },
  {
    path: 'group',
    component: GroupeComponent,
    canActivate: [AdminGuard]
  },
  {
    path: '**',
    redirectTo: 'identify'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
