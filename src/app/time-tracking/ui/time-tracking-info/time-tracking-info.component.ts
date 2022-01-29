import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TimeTrackingService} from "../../data-access/time-tracking.service";
import {TimeTrackingRecord, TrackingType} from "../../data-access/entities/TimeTrackingRecord";

@Component({
  selector: 'app-time-tracking-info',
  templateUrl: './time-tracking-info.component.html',
  styleUrls: ['./time-tracking-info.component.scss']
})
export class TimeTrackingInfoComponent implements OnInit {
  id: number = -1;
  duration='';
  info: TimeTrackingRecord = {
    toTime: '',
    fromTime: '',
    date: {},
    type: TrackingType.PAUSE,
    userId: 'admin'
  };

  constructor(private route: ActivatedRoute, private service: TimeTrackingService) {
    this.route.paramMap.subscribe(
      params => {
        this.id = +params.get('id')!;
        service.findRecord(this.id).subscribe({
          next: (data) => {
              this.info = <TimeTrackingRecord>data;
          }
        });
      }
    );
  }

  ngOnInit(): void {
    console.log(this.info);
  }

}
