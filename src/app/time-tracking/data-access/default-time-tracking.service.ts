import {Injectable} from '@angular/core';
import {TimeTrackingService} from "./time-tracking.service";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {TimeTrackingRecord} from "./entities/TimeTrackingRecord";
import {Observable, of} from "rxjs";
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

  findRecordsByDate(date: string): Observable<TimeTrackingRecord[] | TimeTracingServiceError> {
    const params = new HttpParams().set('date', date);
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
    return this.http.get(this.timeTrackingPath(), {params, headers});
  }


  findRecord(id: number): Observable<TimeTrackingRecord[] | TimeTracingServiceError> {
    const params = new HttpParams().set('id', id);
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');


    return this.http.get(this.timeTrackingPath(), {params, headers});
  }

  removeRecord(id: number): Observable<unknown> {
    if (id) {
      const headers = new HttpHeaders()
        .set('Accept', 'application/json');
      return this.http.delete(this.timeTrackingPath(`${id}`), {headers});
    } else {
      return of({
        errorId: 'ER404',
        errorMessage: 'Record id is not defined. Can not delete record.'
      })
    }
  }

  updateRecord(record: TimeTrackingRecord): Observable<TimeTrackingRecord | TimeTracingServiceError> {
    if (record.id) {
      const headers = new HttpHeaders()
        .set('Accept', 'application/json');
      return this.http.put(this.timeTrackingPath(`${record.id}`), record, {headers});
    } else {
      return of({
        errorId: 'ER404',
        errorMessage: 'Record id is not defined. Can not update record.'
      })
    }
  }

  private timeTrackingPath(val?: string): string {
    return environment.apiUrl + '/time-tracking' + (val ? `/${val}` : '');
  }
}
