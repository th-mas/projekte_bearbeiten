import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimeTrackingComponent} from './ui/time-tracking/time-tracking.component';
import {TimeTrackingRoutesModule} from "./time-tracking-routes.module";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { TimeRangePickerComponent } from './ui/common/time-range-picker/time-range-picker.component';
import {HttpClientModule} from "@angular/common/http";
import { EnumToArrayPipe } from './pipe/enum-to-array.pipe';
import { TimeTrackingInfoComponent } from './ui/time-tracking-info/time-tracking-info.component';
import { EnumStrPipe } from './pipe/enum-str.pipe';
import { DateStrPipe } from './pipe/date-str.pipe';
import {AngularMaterialModule} from "../angular-material.module";
import {TimeTrackingCardComponent} from "./ui/time-tracking-card/time-tracking-card.component";
import { TimeTrackingEditDialog } from './ui/dialog/time-tracking-edit-dialog/time-tracking-edit-dialog.component';


@NgModule({
  declarations: [
    TimeTrackingComponent,
    TimeRangePickerComponent,
    EnumToArrayPipe,
    TimeTrackingInfoComponent,
    TimeTrackingCardComponent,
    EnumStrPipe,
    DateStrPipe,
    TimeTrackingEditDialog
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    TimeTrackingRoutesModule,
    AngularMaterialModule
  ],
  exports: [
    TimeTrackingComponent
  ]
})
export class TimeTrackingModule {
}
