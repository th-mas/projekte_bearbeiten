import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User, Groupe } from '../entities/group';

@Component({
  selector: 'app-groupe',
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.scss']
})
export class GroupeComponent implements OnInit {

  groupe_name: string = '';
  groupe_users: Array<User> = [];
  groups: Array<Groupe> = [];
  selectedGroup: Groupe | null = null;



  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  add_to_group(u: User): void {
    const url = 'http://localhost:3000/groups'

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');


    // PLEASE CREATE ME
    console.log("ADDING TO GROUP")
    this.groupe_users.push(u);
  }

  search_group(): void {
    console.log("searching....")
    const url = 'http://localhost:3000/groups'

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    const params = new HttpParams()
      .set('groupe_name', this.groupe_name)


    this.http
      .get<Groupe[]>(url, { headers, params })
      .subscribe({
        next: (groups: Groupe[]) => {
          this.groups = groups;
        },
        error: (errResp) => {
          console.error('Error loading flights', errResp);
        }
      });
  }


  // replace_l(s: String): String {
  //   return s.slice(3,).replace(/[^0-9]+/g, "*");
  // }

  // replace_letters(n: Array<User>): Array<User> {
  //   // dito
  //   // e.user_name.slice(3,).replace(/[^0-9]+/g, "*")
  //   // user_name: string;
  //   // access_level: number;
  //   // groups: Array<Groupe>;
  //   let secret_name!: Array<User>;
  //   n.forEach(secret_name.push(this.replace_l(n.user_name));
  //   return secret_name;
  // }

  remove_from_group(): void {
    // dito
  }


  add_to_project(): void {
    // dito
  }

  remove_from_project(): void {
    // dito
  }

  select(f: Groupe): void {
    this.selectedGroup = f;
  }

}
