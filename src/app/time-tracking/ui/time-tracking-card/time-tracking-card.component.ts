import {Component, Input, OnInit} from '@angular/core';
import {TimeTrackingRecord, TrackingType} from "../../data-access/entities/TimeTrackingRecord";

@Component({
  selector: 'app-time-tracking-card',
  templateUrl: './time-tracking-card.component.html',
  styleUrls: ['./time-tracking-card.component.scss']
})
export class TimeTrackingCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() record: TimeTrackingRecord = {
    toTime: '',
    fromTime: '',
    date: {},
    userId: '',
    type: TrackingType.VACATION
  };

}
