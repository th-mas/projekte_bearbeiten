import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {padToString, toHoursAndMinutes, updateDurationInfo} from "../TimeTrackingUtils";

@Component({
  selector: 'app-time-range-picker',
  templateUrl: './time-range-picker.component.html',
  styleUrls: ['./time-range-picker.component.scss']
})
export class TimeRangePickerComponent implements OnInit {

  duration = '';
  @Input() fromTime: any;
  @Input() toTime: any;
  @Output() fromChanged = new EventEmitter<string>();
  @Output() toChanged = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
    if (!this.fromTime) {
      const now = new Date();
      this.fromTime = `${padToString(now.getHours())}:${padToString(now.getMinutes())}`;
    }
    this.onFromChange(this.fromTime);
  }


  onFromChange(val?: string) {
    const hrsMins = toHoursAndMinutes(val);
    const toTime = toHoursAndMinutes(this.toTime);
    if (hrsMins) {
      let update;
      if (toTime) {
        const {hrs, min} = toTime;
        update = hrs <= hrsMins.hrs || hrs === hrsMins.hrs && min <= hrsMins.min;
      } else {
        update = true;
      }
      if (update) {
        let {hrs, min} = hrsMins;
        if (min === 59) {
          min = 0;
          hrs++;
        } else {
          min++;
        }
        this.toTime = `${padToString(hrs)}:${padToString(min)}`;
      }
      this.fromChanged.emit(this.fromTime);
    }
    this.duration = updateDurationInfo(this.fromTime, this.toTime);
  }

  onToChange(val?: string): void {
    const hrsMins = toHoursAndMinutes(val);
    let fromTime = toHoursAndMinutes(this.fromTime);

    if (hrsMins) {
      let update;
      if (fromTime) {
        const {hrs, min} = fromTime;
        update = hrs >= hrsMins.hrs || hrs === hrsMins.hrs && min >= hrsMins.min;
      } else {
        update = true;
      }
      if (update) {
        let {hrs, min} = hrsMins;
        if (min === 0) {
          min = 59;
          hrs--;
        } else {
          min--;
        }
        this.fromTime = `${padToString(hrs)}:${padToString(min)}`;
      }
      this.toChanged.emit(this.toTime);
    }
    this.duration = updateDurationInfo(this.fromTime, this.toTime);
  }




}
