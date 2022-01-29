import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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
      this.fromTime = `${this.padToString(now.getHours())}:${this.padToString(now.getMinutes())}`;
    }
    this.onFromChange(this.fromTime);
  }


  onFromChange(val?: string) {
    const hrsMins = this.toHoursAndMinutes(val);
    const toTime = this.toHoursAndMinutes(this.toTime);
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
        this.toTime = `${this.padToString(hrs)}:${this.padToString(min)}`;
      }
      this.fromChanged.emit(this.fromTime);
    }
    this.updateDurationInfo();
  }

  onToChange(val?: string): void {
    const hrsMins = this.toHoursAndMinutes(val);
    let fromTime = this.toHoursAndMinutes(this.fromTime);

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
        this.fromTime = `${this.padToString(hrs)}:${this.padToString(min)}`;
      }
      this.toChanged.emit(this.toTime);
    }
    this.updateDurationInfo();
  }

  private updateDurationInfo() {
    if (this.fromTime && this.toTime) {
      const from = this.getAsTime(this.fromTime);
      const to = this.getAsTime(this.toTime);
      let duration = to.getTime() - from.getTime();
      let minutes  = (duration / 1000) / 60;
      let hours = (minutes - (minutes % 60)) / 60;
      const hadPause = hours >= 6
      if (hadPause) {
        minutes = minutes - 30; // Pause
      }
      hours = (minutes - (minutes % 60)) / 60;
      minutes = minutes - (minutes - (minutes % 60));
      this.duration = `${hours}:${minutes}${hadPause ? ' [ Pause 30 minutes ]' : ''}`;
    } else {
      this.duration = '';
    }
  }

  private getAsTime(val: string): Date {
    const now = new Date();
    now.setHours(this.getHours(val));
    now.setMinutes(this.getMinutes(val));
    now.setSeconds(0);
    now.setMilliseconds(0);
    return new Date(now.toISOString());
  }

  private getHours(val: string): number {
    const splitted = val.split(':');
    return Number.parseInt(splitted[0]);
  }

  private getMinutes(val: string): number {
    const splitted = val.split(':');
    return Number.parseInt(splitted[1]);
  }



  private padToString(val: number): string {
    return `${val}`.padStart(2, '0');
  }

  private toHoursAndMinutes(val: string | undefined): { hrs: number, min: number } | undefined {
    if (val) {
      const hhmm: string[] = val.split(":");
      let hrs = Number.parseInt(hhmm[0]);
      let min = Number.parseInt(hhmm[1]);
      return {hrs, min};
    }
    return undefined;
  }
}
