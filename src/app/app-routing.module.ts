import { RouterModule, Routes } from '@angular/router';
import { ProjektListComponent } from "./projekt-list/projekt-list.component";
import { LandingpageComponent } from "./landingpage/landingpage.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { GroupeComponent } from './groupe/groupe.component';
import { NgModule } from '@angular/core';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';



import {Routes} from '@angular/router';
import {ProjektListComponent} from "./projekt-list/projekt-list.component";
import {LandingpageComponent} from "./landingpage/landingpage.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {IdentifyComponent} from "./identify/identify-component/identify.component";
import {SorryComponent} from "./sorry/sorry/sorry.component";
import {IdentifyGuard} from "./identify/identify-guard.service";
import {LocalStorage} from "./common/storage/storage";

const storage = new LocalStorage();

const CONTEXT = {
  logged: false,
  user: '',
  touched: ''
}

export function getUserId(): string {
  if (isLogged()) {
    return CONTEXT.user;
  }
  return '';
}

export function loggedIn(user: string): void {
  CONTEXT.logged = true;
  CONTEXT.user = user;
  CONTEXT.touched = new Date().toISOString();
  storage.set('context', JSON.stringify(CONTEXT));
}

export function isLogged(): boolean {
  if (CONTEXT.logged && CONTEXT.user) {
    return true;
  }
  const context = storage.get('context');
  if (context) {
    let parsedContext = JSON.parse(context);
    if (parsedContext.touched && new Date().getTime() - new Date(parsedContext.touched).getTime() < 1800000) {
      CONTEXT.logged = parsedContext.logged;
      CONTEXT.user = parsedContext.user;
      CONTEXT.touched = new Date().toISOString();
    } else {
      CONTEXT.logged = false;
      CONTEXT.user = '';
      CONTEXT.touched = '';
    }
  }
  return !!(CONTEXT.logged && CONTEXT.user);
}

export const APP_ROUTES: Routes = [
  {
    path: 'identify',
    component: IdentifyComponent
  },
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
    component: GroupeComponent
  },
  {
    path: '**',
    redirectTo: 'login'
    redirectTo: 'identify'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
