import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User, Groupe } from '../entities/group';
import { GroupeService } from "./data-access/groupe.service";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs";

@Component({
  selector: 'app-groupe',
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.scss']
})
export class GroupeComponent implements OnInit {
  groupe_name: string = '';
  groupe_users: Array<User> = [];
  group_users_string: string = '';
  groups: Array<Groupe> = [];
  selectedGroup: Groupe | null = null;
  all_groups!: Groupe[];
  options: Observable<string[]> = of([]);
  allOptions: string[] = [];

  constructor(private service: GroupeService) { }

  ngOnInit(): void {
    this.init();
  }

  init(oo?: boolean): void {
    this.service.loadAll().subscribe({
      next: (all: Groupe[]) => {
        this.all_groups = all;
        this.allOptions = this.all_groups.map(u => u.groupe_name);
        if (oo) {
          this.groups = all;
        }
      },
      error: (errResp) => {
        console.error('Error loading flights', errResp);
      }
    });
  }

  add_to_group(u: User): void {
    const url = 'http://localhost:3000/groups'

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');


    // PLEASE CREATE ME
    // CREATE YOURSELF
    // I will try my best
    console.log("ADDING TO GROUP")
    this.groupe_users.push(u);
  }

  search_group(): void {
    if (this.groupe_name == 'all' || this.groupe_name == '') {
      this.init(true);
    }
    else {
      this.service.findByName(this.groupe_name).subscribe({
        next: (groups: Groupe[]) => {
          console.log("Printing Groupe name", this.groupe_name)
          this.groups = groups;
        },
        error: (errResp) => {
          console.error('Error loading flights', errResp);
        }
      });
    }
  }

  delete(group: Groupe): void {
    if (group.id) {
      console.log("I DELETE YOU MF: ", group.id)
      this.service.delete_Group(group.id)
        .subscribe({
          next: (r) => console.log(r),
          error: (e) => console.log(e)
        });
      this.init();
      this.search_group();
    }
  }


  // delete_group(): void {
  //   this.service.delete_Group(this.groupe_name).subscribe({
  //     next: (groups: Groupe[]) => {
  //       if (this.groupe_name == 'all') {
  //         console.log("PRINT ALLL: ", this.all_groups)
  //         this.groups = this.all_groups;
  //       }
  //       else {
  //         console.log("Printing Groupe name", this.groupe_name)
  //         this.groups = groups;
  //       }
  //     },
  //     error: (errResp) => {
  //       console.error('Error loading flights', errResp);
  //     }
  //   });
  // }


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

  public save(): void {
    console.log("saving...");
    console.log("NAME: ", this.groupe_name)
    console.log("USERS Names: ", this.group_users_string.split(","))
    this.group_users_string.split(",").forEach(element => {
      this.groupe_users.push({ user_name: element, access_level: 0 })
    });
    console.log("USERS: ", this.groupe_users)

    this.service.createGroup({
      groupe_name: this.groupe_name, users: this.groupe_users
    }).subscribe(
      {
        next:
          data => {
            console.log("Next response: ", data);
            this.groupe_users = [];
            this.group_users_string = '';
            this.groupe_name = '';
            this.search_group();
          },
        error: (e) => console.log("Error", e)
      }
    );


  }

  groupe_name_changed(val: string): void {
    if (val && val.length >= 2) {
      this.options = of(this.allOptions.filter(o => o.toUpperCase().indexOf(val.toUpperCase()) > -1));
    } else {
      this.options = of([]);
    }
  }
}
