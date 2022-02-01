import {Component, OnInit} from '@angular/core';
import {TimeTrackingService} from "../../data-access/time-tracking.service";
import {TimeTrackingRecord, TrackingType} from "../../data-access/entities/TimeTrackingRecord";
import {getUserId} from "../../../common/UserContext";
import {dateAsString} from "../common/TimeTrackingUtils";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {TimeTrackingEditDialog} from "../dialog/time-tracking-edit-dialog/time-tracking-edit-dialog.component";
import {MatSnackBar} from "@angular/material/snack-bar";


@Component({
  selector: 'app-time-tracking',
  templateUrl: './time-tracking.component.html',
  styleUrls: ['./time-tracking.component.scss']
})
export class TimeTrackingComponent implements OnInit {

  searchDate = dateAsString();
  selected: TimeTrackingRecord;
  tracking: TimeTrackingRecord[] = [];

  constructor(private service: TimeTrackingService, private dialog: MatDialog, private _snackBar: MatSnackBar) {
    this.selected = {
      date: dateAsString(), fromTime: "", toTime: "", type: TrackingType.VACATION, userId: getUserId()
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  ngOnInit(): void {
    this.service.loadByMonth().subscribe({
      next: (data) =>
        this.tracking = data
    });
  }

  searchByDate(): void {
    if (this.searchDate) {
      let parts = this.searchDate.split('-');
      this.service.findRecordsByDate(this.searchDate).subscribe({
        next: (r) => {
          this.tracking = <TimeTrackingRecord[]>r;
          if (Array.isArray(r) && r.length === 0) {
            this._snackBar.open(`No tracking entries found for day: [${this.searchDate}]`, 'No Date!');
          }
        },
        error: (e) => console.log(e)
      })
    }
  }

  select(record: TimeTrackingRecord): void {
    this.selected = record;
  }

  createRecord(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(TimeTrackingEditDialog, dialogConfig);

    dialogRef.afterClosed().subscribe((result: TimeTrackingRecord | string) => {
      if (result === 'GO_REGISTER_YOURSELF') {
        this._snackBar.open('Tracking record not created.', 'Cancelled');
      } else {
        this.service.creatRecord(result as TimeTrackingRecord).subscribe({
          next: (response) => {
            this._snackBar.open(`Tracking record created!`, 'Created!');
            this.searchByDate();
          },
          error: (e) => this._snackBar.open(`Error happened!`, 'Error!')
        })
      }
    });
  }
}
