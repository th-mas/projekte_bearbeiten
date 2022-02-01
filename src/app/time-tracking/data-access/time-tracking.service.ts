import { Injectable } from '@angular/core';
import {TimeTrackingRecord} from "./entities/TimeTrackingRecord";
import {Observable} from "rxjs";
import {TimeTracingServiceError} from "./entities/TimeTracingServiceError";
import {DefaultTimeTrackingService} from "./default-time-tracking.service";
import {HttpClient} from "@angular/common/http";
import {DateRepresentation} from "./entities/DateRepresentation";

@Injectable({
  providedIn: 'root',
  useFactory: (http: HttpClient) => new DefaultTimeTrackingService(http),
  deps: [HttpClient]
})
export abstract class TimeTrackingService {
  abstract loadByMonth(): Observable<TimeTrackingRecord[]>;
  abstract creatRecord(record: TimeTrackingRecord): Observable<TimeTrackingRecord|TimeTracingServiceError>;
  abstract findRecordsByDate(date: DateRepresentation): Observable<TimeTrackingRecord[]|TimeTracingServiceError>;
  abstract findRecord(id: number): Observable<TimeTrackingRecord[]|TimeTracingServiceError>;
  abstract updateRecord(record: TimeTrackingRecord): Observable<TimeTrackingRecord|TimeTracingServiceError>;
  abstract removeRecord(id: number): Observable<unknown>;
}
