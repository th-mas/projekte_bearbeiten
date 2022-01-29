import { RouterModule, Routes } from '@angular/router';
import { ProjektListComponent } from "./projekt-list/projekt-list.component";
import { LandingpageComponent } from "./landingpage/landingpage.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { GroupeComponent } from './groupe/groupe.component';
import { NgModule } from '@angular/core';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';




export const APP_ROUTES: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'login'
  },
  {
    path: 'login', component: LogInComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'landing',
    component: LandingpageComponent
  },
  {
    path: 'projekte',
    component: ProjektListComponent
  },
  {
    path: 'dash',
    component: DashboardComponent
  },
  {
    path: 'group',
    component: GroupeComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
