import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs-compat/Observable';
import { Groupe, GroupeServiceError } from 'src/app/entities/group';
import { environment } from 'src/environments/environment';
import { GroupeComponent } from '../groupe.component';

@Injectable({
  providedIn: 'root'
})
export class GroupInfoService {

  constructor(private http: HttpClient) {
    console.log("I like trains");
  }




  findRecord(id: number): Observable<Groupe[]> {
    const params = new HttpParams().set('id', id);
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this.http.get<Groupe[]>(this.GroupPath(), { params, headers });
  }

  private GroupPath(): string {
    return environment.apiUrl + '/groups';
  }



}