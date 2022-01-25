import { Component, OnInit } from '@angular/core';
import { item } from '../entities/projekt';

@Component({
  selector: 'app-projekt-list',
  templateUrl: './projekt-list.component.html',
  styleUrls: ['./projekt-list.component.scss']
})
export class ProjektListComponent implements OnInit {
  projekte: item[]=[
    new item(13012022,"Huber","PHA","FI","Mayer",250,95),
    new item(24012022,"Franz","RHI","KI","Sepl",20,55),
    new item(26012022,"Huber","Heuer","FI","Mayer",7,85)


  ]
  constructor() {

  }

  ngOnInit(): void {
  }

}
