import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Groupe, User } from 'src/app/entities/group';
import { UserComponent } from 'src/app/user/user.component';
import { GroupInfoService } from '../data-access/group-info.service';
import { GroupRoutesModule } from '../groupe-routes.module';


@Component({
  selector: 'app-group-info',
  templateUrl: './group-info.component.html',
  styleUrls: ['./group-info.component.scss']
})
export class GroupInfoComponent implements OnInit {
  id: number = -1;
  selectedGroup: Groupe | null = null;
  info: Groupe = {
    groupe_name: '',
    users: Array<User>()
  };


  constructor(private route: ActivatedRoute, private service: GroupInfoService) {
    console.log("INSIDE THE CONSTRUCTOR");
    this.route.paramMap.subscribe(
      params => {
        this.id = +params.get('id')!;
        console.log("ID: ", this.id);
        service.findRecord(this.id).subscribe({
          next: (data) => {
            this.info = <Groupe>data;
            console.log("INFO: ", this.info);
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

}
