import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Groupe, GroupeServiceError } from "../../entities/group";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GroupeService {
  private path = '/groups';

  constructor(private http: HttpClient) {
  }

  loadAll(): Observable<Groupe[]> {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
    return this.http.get<Groupe[]>(environment.apiUrl + this.path, { headers });
  }

  findByName(name: string): Observable<Groupe[]> {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    const params = new HttpParams()
      .set('groupe_name', name);

    return this.http.get<Groupe[]>(environment.apiUrl + this.path, { params, headers });
  }

  createGroup(group: Groupe): Observable<Groupe | GroupeServiceError> {
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this.http.post(environment.apiUrl + this.path, group, { headers });
  }

  delete_Group(group_id: number): Observable<Groupe | GroupeServiceError> {
    return this.http.delete(environment.apiUrl + this.path + '/' + group_id);
  }
}
