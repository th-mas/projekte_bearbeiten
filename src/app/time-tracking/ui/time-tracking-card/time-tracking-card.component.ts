import {Component, Input, OnInit} from '@angular/core';
import {TimeTrackingRecord, TrackingType} from "../../data-access/entities/TimeTrackingRecord";
import {updateDurationInfo} from "../common/TimeTrackingUtils";

@Component({
  selector: 'app-time-tracking-card',
  templateUrl: './time-tracking-card.component.html',
  styleUrls: ['./time-tracking-card.component.scss']
})
export class TimeTrackingCardComponent implements OnInit {

  duration: string = '';
  constructor() { }

  ngOnInit(): void {
    const {fromTime, toTime} = this.record;
    this.duration = updateDurationInfo(fromTime, toTime);
  }

  @Input() record: TimeTrackingRecord = {
    toTime: '',
    fromTime: '',
    date: {},
    userId: '',
    type: TrackingType.VACATION
  };
}
