import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TimeTrackingService} from "../../data-access/time-tracking.service";
import {TimeTrackingRecord, TrackingType} from "../../data-access/entities/TimeTrackingRecord";
import {of} from "rxjs";
import {dateAsString, updateDurationInfo} from "../common/TimeTrackingUtils";
import {getUserInfo} from "../../../common/UserContext";

type TTProps = keyof TimeTrackingRecord;

@Component({
  selector: 'app-time-tracking-info',
  templateUrl: './time-tracking-info.component.html',
  styleUrls: ['./time-tracking-info.component.scss']
})
export class TimeTrackingInfoComponent implements OnInit {
  id: number = -1;
  duration = '';
  toTime = of('');
  fromTime = of('');
  date = of({});
  type = of(TrackingType.PAUSE);
  userId = of('');
  userInfo = of(getUserInfo())
  enumType = TrackingType;
  values: TimeTrackingRecord = {
    date: dateAsString(),
    fromTime: "",
    toTime: "",
    type: TrackingType.REGULAR_WORK,
    userId: ""
  };

  constructor(private route: ActivatedRoute, private service: TimeTrackingService, private router: Router) {
    this.route.paramMap.subscribe(
      params => {
        this.id = +params.get('id')!;
        service.findRecord(this.id).subscribe({
          next: (data) => {
            const tmp: any = data as any;
            this.values = tmp.length ? {...tmp[0]} : tmp;
            this.toTime = of(this.values.toTime);
            this.fromTime = of(this.values.fromTime);
            this.date = of(this.values.date);
            this.type = of(this.values.type);
            this.userId = of(this.values.userId);
            this.duration = updateDurationInfo(this.values.fromTime, this.values.toTime)
          }
        });
      }
    );
  }

  ngOnInit(): void {
  }

  deleteEntry(): void {
    this.service.removeRecord(this.id).subscribe({
      next: (r) => this.goBack()
    })
  }

  updateEntry(): void {
    this.service.updateRecord(this.values).subscribe({
      next: (r) => this.goBack()
    })
  }

  goBack(): void {
    this.router.navigate(["/time-tracking/search"]);
  }

  updateValue<T>(val: T, field: TTProps): void {
    const tmp = this.values as { [key: string]: any }
    tmp[field] = val;
    this.values = {...tmp} as TimeTrackingRecord;
  }

}
