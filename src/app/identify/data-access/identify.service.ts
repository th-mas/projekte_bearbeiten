import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {IdentifyObject} from './entities/IdentifyObject';

@Injectable({
  providedIn: 'root'
})
export class IdentifyService {

  constructor(private http: HttpClient) {
  }

  loginUser(idObj: IdentifyObject): Observable<IdentifyObject> {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
    return this.http.get<IdentifyObject>(`http://localhost:3000/users/${idObj.id}`, {headers});
  }
}
