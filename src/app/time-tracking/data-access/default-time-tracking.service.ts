import {Injectable} from '@angular/core';
import {TimeTrackingService} from "./time-tracking.service";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {TimeTrackingRecord} from "./entities/TimeTrackingRecord";
import {Observable, of} from "rxjs";
import {ErrorObservable} from "rxjs-compat/observable/ErrorObservable";
import {TimeTracingServiceError} from "./entities/TimeTracingServiceError";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DefaultTimeTrackingService implements TimeTrackingService {
  constructor(private http: HttpClient) {
    if (!environment.apiUrl) {
      throw new Error("API URL not defined for time-tracking. Check configuration.")
    }
  }

  loadByMonth(): Observable<TimeTrackingRecord[]> {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this.http.get<TimeTrackingRecord[]>(this.timeTrackingPath(), {headers});
  }

  creatRecord(record: TimeTrackingRecord): Observable<TimeTrackingRecord | TimeTracingServiceError> {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this.http.post(this.timeTrackingPath(), record, {headers});
  }

  findRecordsByDate(date: Date): Observable<TimeTrackingRecord[] | TimeTracingServiceError> {
    const params = new HttpParams().set('date', date.toISOString());
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
    return this.http.get(this.timeTrackingPath(), {params, headers});
  }



  findRecord(id: number): Observable<TimeTrackingRecord | TimeTracingServiceError> {
    const params = new HttpParams().set('id', id);
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');


    return this.http.get(this.timeTrackingPath(), {params, headers});
  }

  removeRecord(record: TimeTrackingRecord): Observable<TimeTrackingRecord | TimeTracingServiceError> {
    return of({
      errorMessage: 'Server not implemented!'
    });
  }

  updateRecord(record: TimeTrackingRecord): Observable<TimeTrackingRecord | TimeTracingServiceError> {
    return of({
      errorMessage: 'Server not implemented!'
    });
  }


  private timeTrackingPath(): string {
    return environment.apiUrl + '/time-tracking';
  }

}
