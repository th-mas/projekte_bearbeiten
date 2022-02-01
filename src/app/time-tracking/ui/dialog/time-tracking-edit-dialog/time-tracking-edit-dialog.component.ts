import {Component, Input, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {TimeTrackingRecord, TrackingType} from "../../../data-access/entities/TimeTrackingRecord";
import {DateRepresentation} from "../../../data-access/entities/DateRepresentation";
import {getUserId} from "../../../../common/UserContext";
import {dateToDateRep, getDateString, padToString, strToDateRep} from "../../common/TimeTrackingUtils";

@Component({
  templateUrl: './time-tracking-edit-dialog.component.html',
  styleUrls: ['./time-tracking-edit-dialog.component.scss']
})
export class TimeTrackingEditDialog implements OnInit {
  date: string = getDateString();
  fromTime: string = this.initFromTime();
  toTime: string = this.initFromTime(8);
  type = TrackingType.REGULAR_WORK;
  enumType = TrackingType;

  constructor(private ref: MatDialogRef<TimeTrackingEditDialog>) {
  }

  createRecord(): void {
    this.ref.close({
      date: strToDateRep(this.date),
      fromTime: this.fromTime,
      toTime: this.toTime,
      type: this.type,
      userId: getUserId()
    });
  }

  ngOnInit(): void {
  }

  updateDate(val: string): void {
    this.date = val;
  }

  private initFromTime(offsetHrs?: number): string {
    const now = new Date();
    let result = `${padToString(now.getHours() + (offsetHrs ? offsetHrs : 0))}:${padToString(now.getMinutes())}`
    return result;
  }
}
