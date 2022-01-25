import {Routes} from '@angular/router';
import {ProjektListComponent} from "./projekt-list/projekt-list.component";
import {LandingpageComponent} from "./landingpage/landingpage.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

export const APP_ROUTES: Routes = [
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
    path: '**',
    redirectTo: 'landing'
  }
]
