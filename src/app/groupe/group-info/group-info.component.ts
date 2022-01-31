import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Groupe, User } from 'src/app/entities/group';
import { UserComponent } from 'src/app/user/user.component';
import { BabyChildComponent } from '../baby-child/baby-child.component';
import { GroupInfoService } from '../data-access/group-info.service';
import { GroupRoutesModule } from '../groupe-routes.module';


@Component({
  selector: 'app-group-info',
  templateUrl: './group-info.component.html',
  styleUrls: ['./group-info.component.scss'],
})
export class GroupInfoComponent implements OnInit {
  id: number = -1;
  selectedGroup: Groupe | null = null;
  info: Observable<Groupe> = of({
    groupe_name: '',
    users: Array<User>()
  });
  groupe_name: Observable<string> = of('');
  users = of(Array<User>());
  options: Observable<string[]> = of([]);
  allOptions: string[] = [];
  groupe_name_change: string = '';
  groupe_members_change: User[] = [];




  constructor(private route: ActivatedRoute, private service: GroupInfoService) {
    console.log("INSIDE THE CONSTRUCTOR");
    this.route.paramMap.subscribe(
      params => {
        this.id = +params.get('id')!;
        console.log("ID: ", this.id);

        service.findRecord(this.id).subscribe({
          next: (data) => {
            const info: Groupe = data[0];
            this.groupe_name = of(info.groupe_name);
            this.users = of(info.users);
          },
          error: (e) => {
            console.log("ERROR: ", e);
          }
        });
      }
    );
  }

  select(f: Groupe): void {
    this.selectedGroup = f;
  }


  ngOnInit(): void {
    console.log("INSIDE GROUPE-INFO: ", this.info);
  }


  groupe_name_changed(val: string): void {
    if (val && val.length >= 2) {
      this.options = of(this.allOptions.filter(o => o.toUpperCase().indexOf(val.toUpperCase()) > -1));
    } else {
      this.options = of([]);
    }
  }

  groupe_members_changed(val: string): void {
    if (val && val.length >= 2) {
      this.options = of(this.allOptions.filter(o => o.toUpperCase().indexOf(val.toUpperCase()) > -1));
    } else {
      this.options = of([]);
    }
  }


  changeObject(): void {
    console.log("CHANGE OBJECT");
  }

}
function BabyChild(BabyChild: any) {
  throw new Error('Function not implemented.');
}

