import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {TimeTrackingComponent} from "./ui/time-tracking/time-tracking.component";
import {TimeTrackingInfoComponent} from "./ui/time-tracking-info/time-tracking-info.component";
import {IdentifyGuard} from "../identify/identify-guard.service";

const routes: Routes = [
  {
    path: 'time-tracking',
    canActivate: [IdentifyGuard],
    children: [
      {
        path: 'search',
        component: TimeTrackingComponent,
        pathMatch: 'full'
      },
      {
        path: 'info/:id',
        component: TimeTrackingInfoComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeTrackingRoutesModule {
}
